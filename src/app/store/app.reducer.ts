import { combineReducers } from '@ngrx/store';

import { AppState, appInitialState } from './app.state';
import { customerReducer } from "../customers";
import { employeeReducer } from "../employees";
import { supplierReducer } from "../suppliers";
import { productReducer } from "../products";

export const appReducer = combineReducers({
  customers: customerReducer,
  employees: employeeReducer,
  suppliers: supplierReducer,
  products: productReducer
});