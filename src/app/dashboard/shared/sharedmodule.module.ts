import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// material
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// custom components
import { SpinnerComponent } from './components/spinner/spinner.component'; 
import { StudentComponent } from './components/student/student.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [
    StudentComponent,
    InputSearchComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,    
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    StudentComponent,
    InputSearchComponent,
    SpinnerComponent
  ]
})
export class SharedmoduleModule { }
