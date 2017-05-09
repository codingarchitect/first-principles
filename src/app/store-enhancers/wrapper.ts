import { Action } from '@ngrx/store';

export interface Wrapper {
  (action : Action) : Action
};