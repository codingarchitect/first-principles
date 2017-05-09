import { Action } from '@ngrx/store';
import { Handler } from './handler'; 
import { Unwrapper } from './Unwrapper';

export interface UnwrapperHandlerPair<S> {
  unwrapper: Unwrapper,
  handler: Handler<S>
};
