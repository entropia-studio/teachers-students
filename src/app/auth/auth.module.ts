import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' }      
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
