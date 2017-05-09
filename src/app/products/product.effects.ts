import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { ProductDataService } from './product.data-service';
import { Product } from './product.model';
import * as  ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  // Listen for the 'SEARCH' action
  @Effect() searchProduct$: Observable<Action> = this.actions$.ofType(ProductActions.ActionTypes.SEARCH)
    // Map the payload into JSON to use as the request body
    .map(action => action.searchTerm)
    .mergeMap(searchTerm =>
      this.productDataService.search(searchTerm)
        // If successful, dispatch success action with result
        .map(data => new ProductActions.SearchCompleteAction(data))
        // If request fails, dispatch failed action
        .catch((error) => of(new ProductActions.SearchCompleteAction([]))));

  constructor(
    private productDataService: ProductDataService,
    private actions$: Actions
  ) { }
}