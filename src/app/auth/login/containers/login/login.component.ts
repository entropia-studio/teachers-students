import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  status: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  loginUser(user: User){    

    this.authService.login(user).subscribe((user: User) => {      
      
      if (!user){
        this.status = 'Invalid email/password, please try again';
      }else{                
        this.router.navigate(['/dashboard/teachers']);
      }
      
    });
  }  

}
