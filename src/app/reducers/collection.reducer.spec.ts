import { reducer, initialState } from './collection.reducer';
import * as CollectionActions from '../actions/collection.actions';

describe('Collection Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('FILL action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new CollectionActions.Fill({ lorem: 'ipsum' }));
      expect(result).toEqual({ lorem: 'ipsum' });
    });
  });

  describe('REQUEST action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new CollectionActions.Request({ lorem: 'ipsum' }));
      expect(result).toEqual({ lorem: 'ipsum' });
    });
  });

  describe('FAILURE action', function () {
    it('should return relevant state', function () {
      const result = reducer(initialState, new CollectionActions.Failure({ lorem: 'ipsum' }));
      expect(result).toEqual({ status: { lorem: 'ipsum' } });
    });
  });
});
