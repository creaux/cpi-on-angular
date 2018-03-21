import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { Login } from '../actions/auth.actions';

describe('AuthService', () => {
  const mockHttp = jasmine.createSpyObj('HttpClient', ['post']);
  const mockStore = jasmine.createSpyObj('Store', ['dispatch', 'select']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: HttpClient, useValue: mockHttp },
        { provide: Store, useValue: mockStore }
      ],
      imports: [HttpClientModule, StoreModule.forRoot({})],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should call http service post with relevant data', inject([AuthService], (service: AuthService) => {
    const data = { email: 'test@test', password: '123456' };
    service.loginPOST(data);
    expect(mockHttp.post).toHaveBeenCalledWith('https://reqres.in/api/login', data);
  }));

  it('should call store dispatch with required value', inject([AuthService], (service: AuthService) => {
    const loginData = { email: 'test@test', password: '123456' };
    service.login(loginData);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new Login(loginData));
  }));

  it('should call store select to acquire auth', inject([AuthService], (service: AuthService) => {
    service.isLoggedIn();
    expect(mockStore.select).toHaveBeenCalled();
  }));

  it('should call store select to acquire error', inject([AuthService], (service: AuthService) => {
    // tslint:disable-next-line
    service.error;
    expect(mockStore.select).toHaveBeenCalled();
  }));
});
