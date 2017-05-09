import { Action } from '@ngrx/store';

import * as CustomerActions from './customer.actions';
import { Customer } from './customer.model';

export interface CustomerModuleState {
  allCustomers: Customer[],
  currentCustomer: Customer,
  message: string;
}

export const customerModuleInitialState : CustomerModuleState = {
  allCustomers: [],
  currentCustomer: new Customer({}),
  message: '',
}

export function customerReducer(state: CustomerModuleState = customerModuleInitialState, action: CustomerActions.Actions) : CustomerModuleState {
  switch(action.type) {
    case CustomerActions.GET_ALL_CUSTOMERS_SUCCESS_ACTION: {
      return {
        allCustomers: action.payload,
        currentCustomer: new Customer({}),
        message: '',
      };
    }
    case CustomerActions.GET_ALL_CUSTOMERS_FAILED_ACTION: {
      return {
        allCustomers: [],
        currentCustomer: new Customer({}),
        message: 'Unable to get customers: ' + action.payload
      }
    }
    default:
      return state;
  }
}