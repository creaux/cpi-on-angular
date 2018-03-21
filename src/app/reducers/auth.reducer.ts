import { AuthActionTypes } from '../actions/auth.actions';

export const initialState = {};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case AuthActionTypes.SUCCESS:
      return { token: payload };
    case AuthActionTypes.FAILED:
      return { error: payload.error.error, status: payload.status };
    case AuthActionTypes.LOGOUT:
      return {};
    case AuthActionTypes.LOGIN:
    default:
      return state;
  }
}
