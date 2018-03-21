import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() public form;
  @Input() public isEmailValid;
  @Input() public isPasswordValid;
  @Input() public email;
  @Input() public password;
  @Input() public valid;
  @Input() public error;
  // tslint:disable-next-line no-output-rename
  @Output('onLogin') public submitEmitter = new EventEmitter();

  public submit() {
    this.submitEmitter.emit({
      email: this.email,
      password: this.password,
    });
  }
}
