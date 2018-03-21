import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../actions/collection.actions';
import { Store } from '@ngrx/store';
import { State } from '../app.module';

@Injectable()
export class CollectionService {
  private url = 'https://reqres.in/api/books';

  constructor(
    private http: HttpClient,
    private store: Store<State>,
  ) { }

  public getCollection(params) {
    return this.http.get(this.url, {
      params: { ...params },
    });
  }

  public get collection$() {
    return this.store.select(state => state.collection);
  }

  public request() {
    this.store.dispatch(new Request());
  }

  public set page(data) {
    this.store.dispatch(new Request(data));
  }

}
