import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { Go, RouterActionTypes } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.GO),
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras}) => (
        this.router.navigate(path, { queryParams, ...extras })
    ))
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}
