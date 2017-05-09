import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { EmployeeDataService } from './employee.data-service';
import { Employee } from './employee.model';
import * as  EmployeeActions from './employee.actions';

@Injectable()
export class EmployeeEffects {
  // Listen for the 'SEARCH' action
  @Effect() searchEmployee$: Observable<Action> = this.actions$.ofType(EmployeeActions.ActionTypes.SEARCH)
    // Map the payload into JSON to use as the request body
    .map(action => action.searchTerm)
    .mergeMap(searchTerm =>
      this.employeeDataService.search(searchTerm)
        // If successful, dispatch success action with result
        .map(data => new EmployeeActions.SearchCompleteAction(data))
        // If request fails, dispatch failed action
        .catch((error) => of(new EmployeeActions.SearchCompleteAction([]))));

  constructor(
    private employeeDataService: EmployeeDataService,
    private actions$: Actions
  ) { }
}