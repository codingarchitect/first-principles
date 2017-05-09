import { Action } from '@ngrx/store';

import * as CustomerActions from './customer.actions';
import { Customer } from './customer.model';
import { CustomerState, customerInitialState } from './customer.state';

export function customerReducer(state: CustomerState = customerInitialState, action: any) : CustomerState {
  switch(action.type) {
    case CustomerActions.ActionTypes.SEARCH_COMPLETE: {
      const customers = action.results;
      const newCustomers = customers.filter(customer => !state.entities[customer.CustomerID]);

      const newCustomerIds = newCustomers.map(customer => customer.CustomerID);
      const newCustomerEntities = newCustomers.reduce((entities: { [id: string]: Customer }, customer: Customer) => {
        return Object.assign(entities, {
          [customer.CustomerID]: customer
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newCustomerIds ],
        entities: Object.assign({}, state.entities, newCustomerEntities),
        selectedCustomerId: state.selectedCustomerId
      };
    }
    case CustomerActions.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedCustomerId: action.customerId
      };
    }
    default:
      return state;
  }
}