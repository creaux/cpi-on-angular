import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { Go } from '../actions/router.actions';
import { Failed, Success, AuthActionTypes } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect() login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((action: { [payload: string]: any }) => {
      return this.service.loginPOST(action.payload).pipe(
        map((payload) => {
          return new Success(payload);
        }),
        catchError((payload) => of(new Failed(payload))),
      );
    }),
  );

  @Effect() loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.SUCCESS),
    map(() => new Go({
      path: ['/'],
    }))
  );

  @Effect() logout$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    map(() => new Go({
        path: ['/login'],
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: AuthService,
  ) {}
}
