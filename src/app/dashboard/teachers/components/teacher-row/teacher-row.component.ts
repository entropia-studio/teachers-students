import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Teacher } from 'src/app/dashboard/shared/models/teacher';

@Component({
  selector: 'teacher-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './teacher-row.component.html',
  styleUrls: ['./teacher-row.component.scss']
})
export class TeacherRowComponent {

  toggled: Boolean = false;

  @Input() 
  teacher: Teacher;

  @Output() 
  edit = new EventEmitter<Teacher>();

  @Output() 
  remove = new EventEmitter<Teacher>();

  @Output() 
  showStudents = new EventEmitter<Teacher>();

  teacherClicked(){
    this.showStudents.emit(this.teacher);
  }

  removeTeacher(){
    this.remove.emit(this.teacher);
  }

  editTeacher(){
    this.edit.emit(this.teacher);
  }

  toggle(){
    this.toggled = !this.toggled;
  }



}
