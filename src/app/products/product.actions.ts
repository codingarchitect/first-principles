import { Action } from '@ngrx/store';

import { type, createEnum } from '../store-enhancers';
import { Product } from './product.model';

export const ActionTypes = {
  SEARCH:           type('[Product] Search'),
  SEARCH_COMPLETE:  type('[Product] Search Complete'),
  SELECT:           type('[Product] Select'),
}

export class SearchAction implements Action {
  readonly type : string = ActionTypes.SEARCH;
  constructor(public searchTerm: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type : string = ActionTypes.SEARCH_COMPLETE;
  constructor(public results: Product[]) {}
}

export class SelectAction implements Action {
  readonly type : string = ActionTypes.SELECT;
  constructor(public productId: number) {}
}

export type Actions = SearchAction | SearchCompleteAction | SelectAction;