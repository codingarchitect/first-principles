import { Action } from '@ngrx/store';

export interface ActionCreator {
  (payload? : any) : Action
}