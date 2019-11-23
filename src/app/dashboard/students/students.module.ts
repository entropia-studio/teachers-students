import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './containers/students/students.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedmoduleModule } from '../shared/sharedmodule.module';

// material
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
  {path: '', component: StudentsComponent}
];

@NgModule({
  declarations: [
    StudentsComponent,     
  ],
  imports: [
    CommonModule,
    MatExpansionModule,  
    MatDividerModule,    
    SharedmoduleModule,  
    RouterModule.forChild(routes)
  ]  
})
export class StudentsModule { }
