import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
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

  

  filterStudents(term, teacher?: Teacher): Observable<Student[]>{            
    
    return this.store.select<Student[]>('students')
    .pipe(      
      map(students => students.filter(student => {

        const fullname = student.name.toLowerCase() + ' ' + student.lastname.toLowerCase();
        const isStudent = fullname.indexOf(term.toLowerCase()) !== -1 ? true : false;        

        if (teacher){
          const isTeacher = student.teachers.indexOf(teacher.id) !== -1 ? true : false;
          return isStudent && isTeacher;
        }
        return isStudent;                
      }))
    )   

  }

  filterTeachers(term): Observable<Teacher[]>{
    
    return this.store.select<Teacher[]>('teachers')
    .pipe(      
      map(teachers => teachers.filter(teacher => teacher.name.toLowerCase().indexOf(term.toLowerCase()) !== -1 ? true : false)),
    )    

  }
  
  getTeacher(id: string) : Observable<Teacher> {    

    if (!id || id == 'new') return of(<Teacher>{});    
    
    return this.store.select<Teacher>('teachers')
      .pipe(
        filter(Boolean),
          map((teachers: any) => teachers.find((teacher: Teacher) => teacher.id === id))
      )
  }

  addTeacher(teacher: Teacher){
    return this.http.post<Teacher>(`${environment.apiUrl}/teachers`,teacher);      
  }

  updateTeacher(id: string, teacher: Teacher){
    return this.http.put(`${environment.apiUrl}/teachers/${id}`,teacher);
  }

  removeTeacher(id: string){
    return this.http.delete(`${environment.apiUrl}/teachers/${id}`).pipe(
      tap(() => {
        this.teachers$.subscribe(teachers => {          
          this.store.set('teachers',teachers.filter(teacher => teacher.id !== id));
        })
      })
    )
  }

}
