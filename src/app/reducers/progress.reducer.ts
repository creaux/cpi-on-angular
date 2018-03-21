import { Action } from '@ngrx/store';
import { AuthActionTypes } from '../actions/auth.actions';
import { CollectionActionTypes } from '../actions/collection.actions';

export const initialState = false;

export function reducer(state = initialState, { type }: Action) {
  switch (type) {
    case AuthActionTypes.LOGIN:
    case CollectionActionTypes.REQUEST:
      return true;
    case AuthActionTypes.SUCCESS:
    case AuthActionTypes.FAILED:
    case CollectionActionTypes.FILL:
    case CollectionActionTypes.FAILURE:
      return false;
    default:
      return state;
  }
}
