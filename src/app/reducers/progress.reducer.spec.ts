import { reducer, initialState } from './progress.reducer';
import * as AuthActions from '../actions/auth.actions';
import * as CollectionActions from '../actions/collection.actions';

describe('Progress Reducer', () => {
  describe('unknown action', function () {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('to switch on progress', function () {
    describe('LOGIN action', () => {
      it('should return true', () => {
        const result = reducer(initialState, new AuthActions.Login({}));
        expect(result).toBe(true);
      });
    });

    describe('REQUEST action', function () {
      it('should return true', function () {
        const result = reducer(initialState, new CollectionActions.Request());
        expect(result).toBe(true);
      });
    });
  });

  describe('to switch off progress', function () {
    describe('FAILED action', function () {
      it('should return false', function () {
        const result = reducer(initialState, new AuthActions.Failed({}));
        expect(result).toBe(false);
      });
    });

    describe('SUCCESS action', function () {
      it('should return false', function () {
        const result = reducer(initialState, new AuthActions.Success({}));
        expect(result).toBe(false);
      });
    });

    describe('FILL action', function () {
      it('should return false', function () {
        const result = reducer(initialState, new CollectionActions.Fill({}));
        expect(result).toBe(false);
      });
    });

    describe('FAILURE action', function () {
      it('should return false', function () {
        const result = reducer(initialState, new CollectionActions.Fill({}));
        expect(result).toBe(false);
      });
    });
  });
});
