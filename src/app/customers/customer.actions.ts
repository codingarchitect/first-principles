import { Action } from '@ngrx/store';

import { type, createEnum } from '../store-enhancers';
import { Customer } from './customer.model';

export const ActionTypes = {
  SEARCH:           type('[Customer] Search'),
  SEARCH_COMPLETE:  type('[Customer] Search Complete'),
  SELECT:           type('[Customer] Select'),
}

export class SearchAction implements Action {
  readonly type : string = ActionTypes.SEARCH;
  constructor(public searchTerm: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type : string = ActionTypes.SEARCH_COMPLETE;
  constructor(public results: Customer[]) {}
}

export class SelectAction implements Action {
  readonly type : string = ActionTypes.SELECT;
  constructor(public customerId: string) {}
}

export type Actions = SearchAction | SearchCompleteAction | SelectAction;