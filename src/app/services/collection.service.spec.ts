import { TestBed, inject } from '@angular/core/testing';

import { CollectionService } from './collection.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { Request } from '../actions/collection.actions';

describe('CollectionService', () => {
  const mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
  const mockStore = jasmine.createSpyObj('Store', ['dispatch', 'select']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CollectionService,
        { provide: HttpClient, useValue: mockHttp },
        { provide: Store, useValue: mockStore }
      ],
      imports: [HttpClientModule, StoreModule.forRoot({})],
    });
  });

  it('should be created', inject([CollectionService], (service: CollectionService) => {
    expect(service).toBeTruthy();
  }));

  it('should call http get on getCollection method', inject([CollectionService], (service: CollectionService) => {
    const data = { params: { key1: 'value1', key2: 'value2' } };
    service.getCollection(data.params);
    expect(mockHttp.get).toHaveBeenCalledWith('https://reqres.in/api/books', data);
  }));

  it('should call store.select on collection get', inject([CollectionService], (service: CollectionService) => {
    const data = { params: { key1: 'value1', key2: 'value2' } };
    // tslint:disable-next-line
    service.collection$;
    expect(mockStore.select).toHaveBeenCalled();
  }));

  it('should call dispatch on request', inject([CollectionService], (service: CollectionService) => {
    service.request();
    expect(mockStore.dispatch).toHaveBeenCalledWith(new Request());
  }));

  it('should call dispatch on page assignment', inject([CollectionService], (service: CollectionService) => {
    // tslint:disable-next-line
    service.page = {};
    expect(mockStore.dispatch).toHaveBeenCalledWith(new Request({}));
  }));
});
