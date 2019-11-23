import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ReactiveFormsModule } from '@angular/forms';

// material
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    StudentComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,    
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    StudentComponent,
    InputSearchComponent
  ]
})
export class SharedmoduleModule { }
