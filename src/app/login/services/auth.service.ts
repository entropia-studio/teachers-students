import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/users/authenticate';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(user: User){
    this.http.post<User>(this.loginUrl, user, this.httpOptions).subscribe(resp => {
      console.log(resp,'resp')
    })
  }
}
