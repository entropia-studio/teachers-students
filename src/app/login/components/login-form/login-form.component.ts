import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() submitted: EventEmitter<User> = new EventEmitter();

  constructor(
    private fb: FormBuilder,    
  ) { }

  loginForm = this.fb.group({
    'email': ['jsanchez@email.com', Validators.email],
    'password': ['12345', Validators.required],    
  });

  ngOnInit() {    

  }

  onSubmit(){

    const user: User = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    
    this.submitted.emit(user);
  }

}
