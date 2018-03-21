import { CollectionActionTypes } from '../actions/collection.actions';

export const initialState = {};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CollectionActionTypes.FAILURE:
      return { ...state, status: payload };
    case CollectionActionTypes.FILL:
    case CollectionActionTypes.REQUEST:
      return { ...state, ...payload };
    default:
      return state;
  }
}
