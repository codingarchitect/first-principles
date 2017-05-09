import { Action } from '@ngrx/store';

export function buildWrapper(action: Action, prefix: string) : Action {
    return { ...action, type: prefix + '.'  + action.type };  
}