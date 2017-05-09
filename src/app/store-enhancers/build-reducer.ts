import { Action } from '@ngrx/store';
import { Handler } from './handler'; 
import { Unwrapper } from './unwrapper';
import { UnwrapperHandlerPair } from './unwrapper-handler-pair';

export default <S>(handlers : Array<UnwrapperHandlerPair<S>>, initialState : S) =>
  (state = initialState, action : Action) : S =>
    handlers
    .map(({ unwrapper, handler }) => ({ unwrappedAction: unwrapper(action), handler }))
    .reduce((currentState, { unwrappedAction, handler }) => {
      if (unwrappedAction) {
        return handler(currentState, unwrappedAction);
      } else {
        return currentState;
      }
    }, state);