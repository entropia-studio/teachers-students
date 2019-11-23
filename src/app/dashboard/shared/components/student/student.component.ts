import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/dashboard/shared/models/student';

@Component({
  selector: 'student-row',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
