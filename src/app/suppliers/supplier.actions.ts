import { Action } from '@ngrx/store';

import { type, createEnum } from '../store-enhancers';
import { Supplier } from './supplier.model';

export const ActionTypes = {
  SEARCH:           type('[Supplier] Search'),
  SEARCH_COMPLETE:  type('[Supplier] Search Complete'),
  SELECT:           type('[Supplier] Select'),
}

export class SearchAction implements Action {
  readonly type : string = ActionTypes.SEARCH;
  constructor(public searchTerm: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type : string = ActionTypes.SEARCH_COMPLETE;
  constructor(public results: Supplier[]) {}
}

export class SelectAction implements Action {
  readonly type : string = ActionTypes.SELECT;
  constructor(public supplierId: number) {}
}

export type Actions = SearchAction | SearchCompleteAction | SelectAction;