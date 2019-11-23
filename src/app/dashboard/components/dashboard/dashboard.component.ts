import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/login/models/user';
import { Observable, Subscription} from 'rxjs';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(){
    this.user = this.authService.currentUserValue;
  }
  

  logOut(){

    this.authService.logout();

    this.router.navigate(['/auth/login']);

  }

}
