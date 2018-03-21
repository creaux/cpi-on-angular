import { Action } from '@ngrx/store';

export enum CollectionActionTypes {
  REQUEST = '[COLLECTION] Request',
  FILL = '[COLLECTION] Fill',
  FAILURE = '[COLLECTION] Failure'
}

export class Request implements Action {
  readonly type = CollectionActionTypes.REQUEST;

  constructor(
    // FIXME needed {} due to accessing payload in collections.effects
    public payload = {},
  ) {}
}

export class Fill implements Action {
  readonly type = CollectionActionTypes.FILL;

  constructor(
    public payload,
  ) {}
}

export class Failure implements Action {
  readonly type = CollectionActionTypes.FAILURE;

  constructor(
    public payload,
  ) {}
}

export type CollectionActions = Request | Fill | Failure;
