import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Teacher } from 'src/app/dashboard/shared/models/teacher';
import { APIService } from '../../../shared/services/api.service';
import { Store } from 'src/app/store';
import { Student } from 'src/app/dashboard/shared/models/student';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private store: Store,
    private router: Router,
    private _snackBar : MatSnackBar
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
    this.router.navigate(['/dashboard/teachers/',event.id]);
  }

  removeTeacher(event: Teacher){
    
    this.apiService.removeTeacher(event.id).subscribe((resp : any) => {
      
      // this.store.select<Student[]>('students').pipe(
      //   map(teachers => {
      //     console.log('teachers01 ', teachers)
      //     teachers.filter(teacher => teacher.id !== event.id)
      //   }),
      //   tap(
      //     teachers => {
      //       console.log('teachers ', teachers)
      //       this.store.set('teachers',teachers)
      //   }
      //   )
      // )
      this.openSnackBar(resp.message,null);      
    })
  }

  createTeacher(){
    this.router.navigate(['/dashboard/teachers/new']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
