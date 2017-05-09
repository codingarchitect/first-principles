import { Action } from '@ngrx/store';

import { type, createEnum } from '../store-enhancers';
import { Employee } from './employee.model';

export const ActionTypes = {
  SEARCH:           type('[Employee] Search'),
  SEARCH_COMPLETE:  type('[Employee] Search Complete'),
  SELECT:           type('[Employee] Select'),
}

export class SearchAction implements Action {
  readonly type : string = ActionTypes.SEARCH;
  constructor(public searchTerm: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type : string = ActionTypes.SEARCH_COMPLETE;
  constructor(public results: Employee[]) {}
}

export class SelectAction implements Action {
  readonly type : string = ActionTypes.SELECT;
  constructor(public employeeId: number) {}
}

export type Actions = SearchAction | SearchCompleteAction | SelectAction;