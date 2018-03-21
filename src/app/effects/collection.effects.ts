import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { CollectionService } from '../services/collection.service';
import { Collection, CollectionAPI } from '../models/collection';
import { of } from 'rxjs/observable/of';
import { PageAPI } from '../models/page';
import { CollectionActionTypes, Failure, Fill } from '../actions/collection.actions';

@Injectable()
export class CollectionEffects {
  @Effect() fulfillCollection$ = this.actions$.pipe(
    ofType(CollectionActionTypes.REQUEST),
    switchMap((action: { [payload: string]: any }) => (
        this.collection.getCollection(new PageAPI({
          page: action.payload.page,
          per_page: action.payload.perPage,
          total: action.payload.total,
        })).pipe(
          map((payload: CollectionAPI) => new Collection({
            totalPages: payload.total_pages,
            data: payload.data,
            perPage: payload.per_page,
            page: payload.page,
            total: payload.total,
          })),
          map((payload) => new Fill(payload)),
          catchError((err) => of(new Failure(err)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private collection: CollectionService,
  ) {}
}
