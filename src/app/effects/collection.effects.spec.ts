import { TestBed, inject } from '@angular/core/testing';
import { CollectionEffects } from './collection.effects';
import { Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CollectionService } from '../services/collection.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Fill, Request } from '../actions/collection.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Collection } from '../models/collection';

const MockCollectionService: Partial<CollectionService> = {
  getCollection() {
    return Observable.create(observer => observer.next({ page: 1, per_page: 2, total: 6, total_pages: 2, data: {}}));
  }
};

describe('CollectionEffects', () => {
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CollectionEffects,
        provideMockActions(() => actions),
        { provide: CollectionService, useValue: MockCollectionService },
      ],
      imports: [HttpClientModule, StoreModule.forRoot({})]
    });
  });

  it('should be created', inject([CollectionEffects], (service: CollectionEffects) => {
    expect(service).toBeTruthy();
  }));

  it('should fill the store by Collection', inject([CollectionEffects], (effects: CollectionEffects) => {
    const action = new Request();
    const completition = new Fill(new Collection({ page: 1, perPage: 2, total: 6, totalPages: 2, data: {} }));

    const result = effects.fulfillCollection$;

    actions = hot('-a--', { a: action });
    const expected = cold('-a--', { a: completition });

    expect(result).toBeObservable(expected);
  }));
});
