import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import { Teacher } from '../models/teacher';
import { Store } from 'src/app/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class APIService {

  teachers$: Observable<Teacher[]>;
  students$: Observable<Student[]>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private store: Store,
    private http: HttpClient
  ) { 
    
    this.teachers$ = this.http.get<any>(`${environment.apiUrl}/teachers`, this.httpOptions)
    .pipe(      
      map(resp => resp.data.teachers),      
      tap(teachers => this.store.set('teachers',teachers))      
    )

    this.students$ = this.http.get<any>(`${environment.apiUrl}/students`, this.httpOptions)
    .pipe(            
      map(resp => resp.data.students),      
      tap(students => this.store.set('students',students))      
    )   

  }  

  filterStudents(term): Observable<Student[]>{            
    
    return this.store.select<Student[]>('students')
    .pipe(      
      map(students => students.filter(student => {
        const fullname = student.name.toLowerCase() + ' ' + student.lastname.toLowerCase();
        return fullname.indexOf(term.toLowerCase()) !== -1 ? true : false;
      })),
    )   

  }

  filterTeachers(term): Observable<Teacher[]>{
    
    return this.store.select<Teacher[]>('teachers')
    .pipe(      
      map(teachers => teachers.filter(teacher => teacher.name.toLowerCase().indexOf(term.toLowerCase()) !== -1 ? true : false)),
    )    

  }
  



}
