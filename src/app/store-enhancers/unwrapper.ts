import { Action } from '@ngrx/store';

export interface Unwrapper {
  (action : Action) : Action | null
};