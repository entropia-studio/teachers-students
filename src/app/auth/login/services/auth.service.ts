import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from 'src/app/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  private loginUrl = 'http://localhost:3000/users/authenticate';  // URL to web api

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(user: User){
    return this.http.post<User>(this.loginUrl, user, this.httpOptions);
  }  

  registerUser(resp: any){

    const user: User = {
      token: resp.data.token,
      _id: resp.data.user._id,
      name: resp.data.user.name
    }
    this.isLoggedIn = true;
    this.store.set('user',user);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  
}
