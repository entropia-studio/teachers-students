import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  authorizationToken: string;

  loginUrl = `${environment.apiUrl}/users/authenticate`;  // URL to web api

  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;


  constructor(
    private http: HttpClient    
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  } 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(user: User) : Observable<User>{

    return this.http.post<any>(this.loginUrl, user, this.httpOptions)
      .pipe(
        map(loginResp => {         
          
          if (loginResp.status !== 'success'){
            return null;
          }

          const user: User = {
              token: loginResp.data.token,
              name: loginResp.data.user.name
          }
            
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          
          return user;
        })
      )
      
  }  
  

  logout(): void {
  
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    
  }  

  public get currentUserValue() : User {

    return this.currentUserSubject.value;

  }
  
}
