import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from 'src/app/store';
import { User } from 'src/app/auth/login/models/user';
import { Observable, Subscription} from 'rxjs';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  user$:  Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {   
  }

  ngOnDestroy(){

  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
