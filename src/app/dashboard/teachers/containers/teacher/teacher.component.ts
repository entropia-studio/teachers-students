import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/dashboard/shared/models/teacher';
import { Observable, Subscription } from 'rxjs';
import { APIService } from 'src/app/dashboard/shared/services/api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    private router: Router
  ) { }

  ngOnInit(){
    this.subscription = this.apiService.teachers$.subscribe();
    this.teacher$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.apiService.getWorkout(params.get('id')))
    )
  }

  updateTeacher(teacher: Teacher){
    console.log('update teacher')
  }

}
