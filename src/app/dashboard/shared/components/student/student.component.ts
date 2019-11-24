import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Student } from 'src/app/dashboard/shared/models/student';

@Component({
  selector: 'student-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  {

  @Input() student: Student;

  panelOpenState = false;

}
