import { AuthService } from './auth/login/services/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    if (req.url.includes('teachers') || req.url.includes('students')){

        const currentUser = this.authService.currentUserValue;
        
        if (currentUser){

          const authReq = req.clone({
            headers: req.headers.set('x-access-token', currentUser.token)
          });

          return next.handle(authReq).pipe(
            tap((resp: any) => {                                          
              if (resp.body){
                const {status} = resp.body;  
                if (status === 'error'){
                  this.authService.logout();                  
                  this.router.navigate(['/auth/login']);
                }
              }
            })
          );
        }
    }

    return next.handle(req);    
    
  }
}