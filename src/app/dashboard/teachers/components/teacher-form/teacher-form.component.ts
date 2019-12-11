import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Teacher } from 'src/app/dashboard/shared/models/teacher';

@Component({
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {


  @Input() 
  teacher: Teacher;

  @Output()
  update = new EventEmitter<Teacher>();

  @Output()
  create = new EventEmitter<Teacher>();

  exists: Boolean = false;

  teacherForm = this.fb.group({    
    'name': ['',[Validators.required]],
    'email': ['',[Validators.email, Validators.required]],
    'phone': ['',[Validators.required]]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.teacher && this.teacher.name){
      this.exists = true;
    }
    const value = this.teacher;
    this.teacherForm.patchValue(value);
  }

  createTeacher(){
    if (this.teacherForm.valid){
      this.create.emit(this.teacherForm.value);
    }
  }

  updateTeacher(){
    if (this.teacherForm.valid){
      this.update.emit(this.teacherForm.value);
    }
  }

}

