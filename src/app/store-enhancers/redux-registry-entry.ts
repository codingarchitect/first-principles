import { Action, ActionReducer } from '@ngrx/store';

import { ActionCreator } from './action-creator';

export interface ReduxRegistryEntry<TState> {
  alias?: string;
  name?: string;
  create: ActionCreator;
  reduce: ActionReducer<TState>;
  remove?: () => void;
}