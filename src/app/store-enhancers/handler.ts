import { Action } from '@ngrx/store';

export interface Handler<S> {
  (state : S, action : Action) : S
};