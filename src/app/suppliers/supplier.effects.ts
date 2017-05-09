import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { SupplierDataService } from './supplier.data-service';
import { Supplier } from './supplier.model';
import * as  SupplierActions from './supplier.actions';

@Injectable()
export class SupplierEffects {
  // Listen for the 'GET_ALL_CUSTOMERS' action
  @Effect() searchSupplier$: Observable<Action> = this.actions$.ofType(SupplierActions.ActionTypes.SEARCH)
    // Map the payload into JSON to use as the request body
    .map(action => action.searchTerm)
    .mergeMap(searchTerm =>
      this.supplierDataService.search(searchTerm)
        // If successful, dispatch success action with result
        .map(data => new SupplierActions.SearchCompleteAction(data))
        // If request fails, dispatch failed action
        .catch((error) => of(new SupplierActions.SearchCompleteAction([]))));

  constructor(
    private supplierDataService: SupplierDataService,
    private actions$: Actions
  ) { }
}