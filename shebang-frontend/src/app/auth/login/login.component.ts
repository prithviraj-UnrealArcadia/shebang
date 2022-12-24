import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login(){
    console.log(this.loginForm.value)
  }
}
