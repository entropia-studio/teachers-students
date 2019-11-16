import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom components
import { LoginComponent } from './containers/login/login.component';

// Material Design
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class LoginModule { }
