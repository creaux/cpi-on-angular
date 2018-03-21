import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { RouterEffects } from './router.effects';
import { Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Go } from '../actions/router.actions';
import { cold, hot } from 'jasmine-marbles';

const MockRouter: Partial<Router> = {
  navigate() { return Promise.resolve(true); }
};

describe('RouterService', () => {
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        RouterEffects,
        provideMockActions(() => actions$),
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: Router, useValue: MockRouter },
      ]
    });
  });

  it('should navigate', inject([RouterEffects], (effects: RouterEffects) => {
    const action = new Go({ path: ['/'] });
    const completition = { path: ['/'] };
    const result = effects.navigate$;

    actions$ = hot('-a--', { a: action} );
    const expected = cold('-a--', { a: completition });

    expect(result).toBeObservable(expected);
  }));
});
