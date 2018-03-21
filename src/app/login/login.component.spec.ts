import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MatButton, MatCard, MatCardContent, MatCardModule, MatFormField, MatInput,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatError } from '@angular/material';
import { from } from 'rxjs/observable/from';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.form = this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render MatCard one time', () => {
    const domEl = fixture.debugElement.queryAll(By.directive(MatCard));
    expect(domEl[0]).toBeDefined();
    expect(domEl[1]).toBeUndefined();
  });

  it('should render MatCardContent one time', () => {
    const domEl = fixture.debugElement.queryAll(By.directive(MatCardContent));
    expect(domEl[0]).toBeDefined();
    expect(domEl[1]).toBeUndefined();
  });

  it('should render form one time', () => {
    const domEl = fixture.debugElement.queryAll(By.css('form'));
    expect(domEl.length).toBe(1);
  });

  it('should be possible to fill form and send it', () => {
    component.email = 'test@test';
    component.password = '123456';
    component.submitEmitter.subscribe((data) => (
      expect(data).toEqual({ email: 'test@test', password: '123456' })
    ));
    component.submit();
  });

  it('should render h2 one time with desired string', () => {
    const domEl = fixture.debugElement.queryAll(By.css('h2'));
    expect(domEl[0]).toBeDefined();
    expect(domEl[0].nativeElement.textContent).toContain('Login');
    expect(domEl[1]).toBeUndefined();
  });

  it('should render MatFormField two times with desired attributes', () => {
    const domEl = fixture.debugElement.queryAll(By.directive(MatFormField));
    expect(domEl.length).toBe(2);
    expect(domEl[0].nativeElement.classList).toContain('login__field');
    expect(domEl[1].nativeElement.classList).toContain('login__field');
  });

  it('should render input matInput two times with desired attributes', () => {
    const domEl = fixture.debugElement.queryAll(By.directive(MatInput));
    expect(domEl.length).toBe(2);
    expect(domEl[0].nativeElement.placeholder).toContain('Email');
    expect(domEl[0].nativeElement.name).toContain('email');
    expect(domEl[0].nativeElement.type).toContain('email');
  });

  it('should render matButton directive with disabled attr', () => {
    component.valid = true;
    fixture.detectChanges();
    const domEl = fixture.debugElement.queryAll(By.css('.login__button'));
    expect(domEl.length).toBe(1);
    expect(domEl[0].nativeElement.getAttribute('disabled')).toBeNull();
  });

  it('should render matButton directive without disabled attr', () => {
    component.valid = false;
    fixture.detectChanges();
    const domEl = fixture.debugElement.queryAll(By.css('.login__button'));
    expect(domEl.length).toBe(1);
    expect(domEl[0].nativeElement.getAttribute('disabled')).toBeDefined();
    expect(domEl[0].nativeElement.getAttribute('disabled')).toBe('');
  });

  it('should MatError two times', () => {
    component.isEmailValid = false;
    component.error = from([true]);
    fixture.detectChanges();
    const domEl = fixture.debugElement.queryAll(By.directive(MatError));
    expect(domEl.length).toBe(2);
  });

  it('should render email error message', () => {
    component.isEmailValid = false;
    fixture.detectChanges();
    const domEl = fixture.debugElement.queryAll(By.directive(MatError));
    expect(domEl[0]).toBeTruthy();
  });

  it('should not render email error message', () => {
    component.isEmailValid = false;
    fixture.detectChanges();
    const domEl = fixture.debugElement.queryAll(By.directive(MatError));
    expect(domEl[1]).toBeFalsy();
  });
});
