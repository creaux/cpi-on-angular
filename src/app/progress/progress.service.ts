import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../app.module';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProgressService {

  constructor(
    private store: Store<State>,
  ) {}

  public get isProgress$(): Observable<boolean> {
    return this.store.select('progress');
  }
}
