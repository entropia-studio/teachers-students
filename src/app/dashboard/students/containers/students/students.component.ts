import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService } from 'src/app/dashboard/shared/services/api.service';
import { Store } from 'src/app/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from 'src/app/dashboard/shared/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students$: Observable<Student[]>;  
  subscriptions: Subscription[] = [];

  constructor(
    private apiService: APIService,
    private store: Store
  ) {}

  ngOnInit() {
    this.subscriptions = [
      this.apiService.teachers$.subscribe(),
      this.apiService.students$.subscribe()      
    ];

    this.students$ = this.store.select<Student[]>('students'); 
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  searchStudents(term){            
      this.students$ = this.apiService.filterStudents(term);
  }

}
