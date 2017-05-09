import { Product } from './product.model';

export interface ProductState {
    ids: string[];
    entities: { [id: string]: Product };
    selectedProductId: number;
  }

export const productInitialState : ProductState = {
  ids: [],
  entities: {},
  selectedProductId: -1,
}