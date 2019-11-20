import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'dashboard' , component: DashboardComponent,
    children: [
      { path: 'teachers' , canActivate: [AuthGuard], loadChildren: './teachers/teachers.module#TeachersModule'},
      { path: 'students' , canActivate: [AuthGuard], loadChildren: './students/students.module#StudentsModule'} 
    ]
  }   
];

@NgModule({
  declarations: [
    DashboardComponent,   
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,        
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
