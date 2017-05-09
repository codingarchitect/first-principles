import { Action } from '@ngrx/store';

import * as ProductActions from './product.actions';
import { Product } from './product.model';
import { ProductState, productInitialState } from './product.state';

export function productReducer(state: ProductState = productInitialState, action: any) : ProductState {
  switch(action.type) {
    case ProductActions.ActionTypes.SEARCH_COMPLETE: {
      const products = action.results;
      const newProducts = products.filter(product => !state.entities[product.ProductID]);

      const newProductIds = newProducts.map(product => product.ProductID);
      const newProductEntities = newProducts.reduce((entities: { [id: number]: Product }, product: Product) => {
        return Object.assign(entities, {
          [product.ProductID]: product
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newProductIds ],
        entities: Object.assign({}, state.entities, newProductEntities),
        selectedProductId: state.selectedProductId
      };
    }
    case ProductActions.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedProductId: action.productId
      };
    }
    default:
      return state;
  }
}