import { Action } from '@ngrx/store';
import escapeRegexp from './escape-regexp';

export default (pattern : string) => {
  const regexp = new RegExp(`^${escapeRegexp(pattern)}\\.(.+)`);

  return (action : Action) : Action | null => {
    if (action.type === pattern) {
      return action;
    } else {
      const match = action.type.match(regexp);

      if (match) {
        return {
          ...action,
          type: match[1]
        };
      } else {
        return null;
      }
    }
  }
};