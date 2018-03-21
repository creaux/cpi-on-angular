import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
  GO = '[Router] Go',
}

export class Go implements Action {
  readonly type = RouterActionTypes.GO;

  constructor(public payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }) {}
}

export type RouterAction = Go;
