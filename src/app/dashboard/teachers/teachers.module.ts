import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './containers/teachers/teachers.component';
import { Routes, RouterModule } from '@angular/router';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedmoduleModule } from '../shared/sharedmodule.module';

// material 
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import { TeacherRowComponent } from './components/teacher-row/teacher-row.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { TeacherComponent } from './containers/teacher/teacher.component';

const routes: Routes = [
  {path: '', component: TeachersComponent},
  {path: ':id', component: TeacherComponent},
  {path: 'new', component: TeacherComponent}
];

@NgModule({
  declarations: [
    TeachersComponent,
    HighlightDirective,
    TeacherRowComponent,
    TeacherFormComponent,
    TeacherComponent,    
  ],
  imports: [
    CommonModule,        
    MatListModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule,    
    SharedmoduleModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ]
})
export class TeachersModule { }
