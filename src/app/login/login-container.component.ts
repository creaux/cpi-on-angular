import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-container',
  template: `<app-login
    (onLogin)="login($event)"
    [form]="form"
    [email]="email"
    [password]="password"
    [isEmailValid]="isEmailValid"
    [isPasswordValid]="isPasswordValid"
    [error]="error"
    [valid]="valid"
  ></app-login>`,
})
export class LoginContainerComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [
        // EMULATION: Password not required due to possibility to send form with empty password
        // Validators.required
      ]),
    });
  }

  public get email() {
    return this.form.get('email');
  }

  public get password() {
    return this.form.get('password');
  }

  public get isEmailValid() {
    return !this.email.hasError('email') &&
      !this.email.hasError('required') ||
      this.email.pristine;
  }

  public get isPasswordValid() {
    return !this.password.hasError('required');
  }

  public get valid() {
    // EMULATION: To emulate error response with missing password
    // we just validating email only otherwise 'valid' will be present
    return this.isEmailValid;
  }

  public get error() {
    return this.service.error;
  }

  public login({ email, password }) {
    this.service.login({ email: email.value, password: password.value });
  }
}
