import { Action } from '@ngrx/store';

import * as SupplierActions from './supplier.actions';
import { Supplier } from './supplier.model';
import { SupplierState, supplierInitialState } from './supplier.state';

export function supplierReducer(state: SupplierState = supplierInitialState, action: any) : SupplierState {
  switch(action.type) {
    case SupplierActions.ActionTypes.SEARCH_COMPLETE: {
      const suppliers = action.results;
      const newSuppliers = suppliers.filter(supplier => !state.entities[supplier.SupplierID]);

      const newSupplierIds = newSuppliers.map(supplier => supplier.SupplierID);
      const newSupplierEntities = newSuppliers.reduce((entities: { [id: number]: Supplier }, supplier: Supplier) => {
        return Object.assign(entities, {
          [supplier.SupplierID]: supplier
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newSupplierIds ],
        entities: Object.assign({}, state.entities, newSupplierEntities),
        selectedSupplierId: state.selectedSupplierId
      };
    }
    case SupplierActions.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedSupplierId: action.supplierId
      };
    }
    default:
      return state;
  }
}