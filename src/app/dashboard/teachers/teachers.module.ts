import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersComponent } from './containers/teachers/teachers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TeachersComponent}
];

@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ]
})
export class TeachersModule { }
