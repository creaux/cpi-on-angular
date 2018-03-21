import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SUCCESS = '[AUTH] Success',
  FAILED = '[AUTH] Failure',
  LOGIN = '[AUTH] Login',
  LOGOUT = '[AUTH] Logout',
}

export class Success implements Action {
  readonly type = AuthActionTypes.SUCCESS;

  constructor(
    public payload,
  ) {}
}

export class Failed implements Action {
  readonly type = AuthActionTypes.FAILED;

  constructor(
    public payload,
  ) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(
    public payload,
  ) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = Success | Failed | Login | Logout;
