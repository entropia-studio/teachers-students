import { AuthService } from './auth/login/services/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    if (req.url.includes('teachers') || req.url.includes('students')){
        
        const currentUser = this.authService.currentUserValue;
        
        if (currentUser){

          const authReq = req.clone({
            headers: req.headers.set('x-access-token', currentUser.token)
          });

          return next.handle(authReq);
        }
    }

    return next.handle(req);    
    
  }
}