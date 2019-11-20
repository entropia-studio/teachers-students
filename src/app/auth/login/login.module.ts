import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom components
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

// Material Design
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent, 
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)  
  ]
})
export class LoginModule { }
