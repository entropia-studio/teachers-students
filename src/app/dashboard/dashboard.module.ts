import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';


// material
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


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
    MatSidenavModule,  
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
