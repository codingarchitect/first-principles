import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';

import { CustomerDataService } from './customer.data-service';
import { Customer } from './customer.model';
import * as  CustomerActions from './customer.actions';

@Injectable()
export class CustomerEffects {
  // Listen for the 'GET_ALL_CUSTOMERS' action
  @Effect() login$: Observable<Action> = this.actions$.ofType(CustomerActions.GET_ALL_CUSTOMERS_ACTION)
    // Map the payload into JSON to use as the request body
    .map(action => action.payload)
    .mergeMap(payload =>
      this.customerDataService.getAllCustomers()
        // If successful, dispatch success action with result
        .map(data => new CustomerActions.GetAllCustomersSuccessAction(data))
        // If request fails, dispatch failed action
        .catch((error) => of(new CustomerActions.GetAllCustomersFailedAction(error)))
    );

  constructor(
    private customerDataService: CustomerDataService,
    private actions$: Actions
  ) { }
}