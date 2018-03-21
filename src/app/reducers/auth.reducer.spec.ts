import { reducer, initialState } from './auth.reducer';
import * as CollectionActions from '../actions/collection.actions';
import * as AuthActions from '../actions/auth.actions';

describe('Auth Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('SUCCESS action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new AuthActions.Success({ lorem: 'ipsum' }));
      expect(result).toEqual({ token: { lorem: 'ipsum' } });
    });
  });

  describe('FAILED action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new AuthActions.Failed({ error: { error: 'Some error.' }, status: 400 }));
      expect(result).toEqual({ error: 'Some error.', status: 400 });
    });
  });

  describe('LOGIN action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new AuthActions.Login('Whatever.'));
      expect(result).toEqual({});
    });
  });


  describe('LOGOUT action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new AuthActions.Logout());
      expect(result).toEqual({});
    });
  });
});
