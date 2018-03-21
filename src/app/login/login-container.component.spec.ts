import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginContainerComponent } from './login-container.component';
import { AuthService } from '../services/auth.service';
import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as forms from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: ``,
})
class LoginComponent {
  @Input() public form;
  @Input() public isEmailValid;
  @Input() public isPasswordValid;
  @Input() public email;
  @Input() public password;
  @Input() public valid;
  @Input() public error;
}

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, LoginContainerComponent ],
      providers: [ AuthService, FormBuilder ],
      imports: [ HttpClientModule, StoreModule.forRoot({}) ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create'  , () => {
    expect(component).toBeTruthy();
  });

  it('should be possisble to set and get email and password'  , () => {
    const data = { email: 'test@test', password: '123456' };
    component.form.setValue(data);
    expect(component.email.value).toEqual(data.email);
    expect(component.password.value).toEqual(data.password);
  });

  it('should get valid fields'  , () => {
    const data = { email: 'test@test', password: '123456' };
    component.form.setValue(data);
    expect(component.isEmailValid).toEqual(true);
    expect(component.isPasswordValid).toEqual(true);
  });

  it('should call service login method', () => {
    const mockService = fixture.debugElement.injector.get(AuthService);
    spyOn(mockService, 'login');
    component.login({ email: { value: 'test@test' }, password: { value: '123456' } });
    expect(mockService.login).toHaveBeenCalledWith({ email: 'test@test', password: '123456' });
  });
});
