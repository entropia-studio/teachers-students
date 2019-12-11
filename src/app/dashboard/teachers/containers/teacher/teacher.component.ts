import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/dashboard/shared/models/teacher';
import { Observable, Subscription } from 'rxjs';
import { APIService } from 'src/app/dashboard/shared/services/api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  teacher$: Observable<Teacher>;
  subscription: Subscription;

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(){
    this.subscription = this.apiService.teachers$.subscribe();
    this.teacher$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.apiService.getTeacher(params.get('id')))
    )
  }

  async updateTeacher(event: Teacher){
    const id = this.route.snapshot.params.id;
    await this.apiService.updateTeacher(id,event).subscribe((resp:any) => this.openSnackBar(resp.message,null));
    
  }

  async createTeacher(event: Teacher){
    await this.apiService.addTeacher(event).subscribe((resp:any) => {      
      this.openSnackBar(resp.message,null);
      this.router.navigate(['/dashboard/teachers'])
    }); 
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  

}
