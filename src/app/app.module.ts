import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';


//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom modules
import { Store } from './store';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [  
  { path: '', redirectTo: 'dashboard/teachers', pathMatch: 'full' },
  { path: '**', redirectTo: 'teachers' }   
];

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,    
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [Store, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
