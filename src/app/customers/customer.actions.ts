import { Action } from '@ngrx/store';

import { Customer } from './customer.model';

export const GET_ALL_CUSTOMERS_ACTION : string = 'GET_ALL_CUSTOMERS';
export const GET_ALL_CUSTOMERS_SUCCESS_ACTION : string = 'GET_ALL_CUSTOMERS_SUCCESS';
export const GET_ALL_CUSTOMERS_FAILED_ACTION : string = 'GET_ALL_CUSTOMERS_FAILED';

export class GetAllCustomersAction implements Action {
  readonly type : string = GET_ALL_CUSTOMERS_ACTION;
  constructor(public payload: any) {}
}

export class GetAllCustomersSuccessAction implements Action {
  readonly type : string = GET_ALL_CUSTOMERS_SUCCESS_ACTION;
  constructor(public payload: Customer[]) {}
}

export class GetAllCustomersFailedAction implements Action {
  readonly type : string = GET_ALL_CUSTOMERS_FAILED_ACTION;
  constructor(public payload: any) {}
}

export type Actions = GetAllCustomersAction | GetAllCustomersSuccessAction | GetAllCustomersFailedAction;