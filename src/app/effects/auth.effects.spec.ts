import { TestBed, inject } from '@angular/core/testing';

import { AuthEffects } from './auth.effects';
import { Observable } from 'rxjs/Observable';
import { provideMockActions } from '@ngrx/effects/testing';

import { AuthService } from '../services/auth.service';
import { StoreModule } from '@ngrx/store';
import { Failed, Login, Success } from '../actions/auth.actions';
import { hot, cold } from 'jasmine-marbles';
import { Go } from '../actions/router.actions';


const MockAuthService: Partial<AuthService> = {
  loginPOST({ success }) {
    if (success) {
      return Observable.create((observer) => observer.next({ token: 'ABCDEF'}));
    }
    return Observable.create(observer => observer.error({
      error: 'Some error.',
      status: 400,
    }));
  }
};

describe('AuthEffects', () => {
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions),
        AuthService,
        { provide: AuthService, useValue: MockAuthService },
      ],
      imports: [StoreModule.forRoot({})]
    });
  });

  it('should be created', inject([AuthEffects], (effects: AuthEffects) => {
    const action = new Login({ success: true });
    const completition = new Success({ token: 'ABCDEF'});

    const result = effects.login$;

    actions = hot('-a--', { a: action });
    const expected = cold('-a--', { a: completition });

    expect(result).toBeObservable(expected);
  }));

  it('should be created', inject([AuthEffects], (effects: AuthEffects) => {
    const action = new Login({ success: false });
    const completition = new Failed({
      error: 'Some error.',
      status: 400,
    });

    const result = effects.login$;

    actions = hot('-a--', { a: action });
    const expected = cold('-a--', { a: completition });

    expect(result).toBeObservable(expected);
  }));

  it('should be created', inject([AuthEffects], (effects: AuthEffects) => {
    const action = new Success({});
    const completition = new Go({ path: [ '/' ] });

    const result = effects.loginSuccess$;

    actions = hot('-a--', { a: action });
    const expected = cold('-a--', { a: completition });

    expect(result).toBeObservable(expected);
  }));
});
