import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Teacher } from 'src/app/dashboard/shared/models/teacher';
import { APIService } from '../../../shared/services/api.service';
import { Store } from 'src/app/store';
import { Student } from 'src/app/dashboard/shared/models/student';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, OnDestroy {

  teachers$: Observable<Teacher[]>;
  students$: Observable<Student[]>;  
  subscriptions: Subscription[] = [];
  teacherSelected: Teacher;
  hasChanged: boolean = false;

  constructor(  
    private apiService: APIService,
    private store: Store
  ) { }

  ngOnInit() {

    this.subscriptions = [
      this.apiService.teachers$.subscribe(),
      this.apiService.students$.subscribe()      
    ];

    this.teachers$ = this.store.select<Teacher[]>('teachers'); 
    
  }

  showStudents(teacher: Teacher){  
    
    this.hasChanged = !this.hasChanged;        
    this.teacherSelected = teacher;

    this.students$ = this.store.select<Student[]>('students').pipe(
      map(students => students.filter(student => student.teachers.indexOf(teacher.id) !== -1 ? true : false ))
    )   
    
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  searchTeacher(term){    
    this.teachers$ = this.apiService.filterTeachers(term);
  }

  searchStudents(term){                
    this.students$ = this.apiService.filterStudents(term, this.teacherSelected);
  }

  editTeacher(event: Teacher){
    console.log(event)
  }

  removeTeacher(event: Teacher){
    console.log(event)
  }

}
