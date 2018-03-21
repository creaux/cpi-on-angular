import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../app.module';
import { Login, Logout } from '../actions/auth.actions';

@Injectable()
export class AuthService {
  private url = 'https://reqres.in/api/login';

  constructor(
    private http: HttpClient,
    private store: Store<State>,
  ) { }

  public loginPOST(data) {
    return this.http.post(this.url, data);
  }

  public login(data) {
    return this.store.dispatch(new Login(data));
  }

  public isLoggedIn() {
    return this.store.select(state => state.auth.token);
  }

  public get error() {
    return this.store.select(state => state.auth.error);
  }

  public logout() {
    return this.store.dispatch(new Logout());
  }
}
