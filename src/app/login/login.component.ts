import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  usernameControl: FormControl;
  passwordControl: FormControl;

  constructor() {
    this.usernameControl = new FormControl(this.username, Validators.required);
    this.passwordControl = new FormControl(this.password, Validators.required);
  }

  ngOnInit(): void {}

  login() {
    if (this.usernameControl.valid && this.passwordControl.valid) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
