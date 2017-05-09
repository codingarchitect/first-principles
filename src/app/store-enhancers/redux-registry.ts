import { Action } from '@ngrx/store';

import { ReduxRegistryEntry } from './redux-registry-entry';
import { ActionCreator } from './action-creator';

export class ReduxRegistry<TState, TActionTypes extends string> {
  private initialState : TState;
  private create;
  private creators;
  private reduce;
  private reducers;
  private defs: ReduxRegistryEntry<TState>[];
  private prefix;

  setInitialState = function (state: TState) {
    this.initialState = state;
    this.state = state;
    return this;
  };

  setDefs(defs: ReduxRegistryEntry<TState>[] = []) {
    this.defs = defs;
    defs.forEach(def => this.add(def));
    return this;
  };

  setPrefix(prefix = '') {
    this.prefix = prefix;
    return this;
  };

  add(def: ReduxRegistryEntry<TState>) {
    if (!def.create) {
      throw new Error('ReduxRegistry: no create() function defined');
    }
    if (!def.reduce) {
      throw new Error('ReduxRegistry: no reduce() function defined');
    }
    if (!def.name) {
      let name = def.create(null) && def.create(null).type;
      if (!name) {
        throw new Error('ReduxRegistry: \'type\' not defined for creator function');
      } else {
        def.name = name;
      }
    };

    // add shorthand .remove() handle
    def.remove = (function () {
      this.remove(def.name);
    }).bind(this);

    // add definition
    this.defs.push(def);
    let alias = def.alias || def.name;

    // add action creator reference to .create index
    this.create[def.name] = this.create[alias] = def.create;

    // add reducer reference to .reduce index
    this.reduce[def.name] = this.reduce[alias] = def.reduce;

    return this;
  };

  remove = function (name) {
    // remove from definitions
    let match = this.defs.find(d => d.name === name || d.alias === name);

    if (!match) {
      throw new ReferenceError(`cannot find '${name}' to remove`);
    }

    this.defs = this.defs.filter(d => d !== match);
    delete this.create[match.name];
    delete this.create[match.alias];
    delete this.reduce[match.name];
    delete this.reduce[match.alias];

    return this;
  };

  getNames() : string[] {
    return this.defs.map(def => def.name);
  };

  get(name: TActionTypes) : ReduxRegistryEntry<TState>  {
    return this.defs.find(def => def.name === name || def.alias === name);
  };

  getActionCreator(name: TActionTypes) : ActionCreator {
    return this.defs.find(def => def.name === name || def.alias === name).create;
  }

  deserializeState(fn: (serializedState: string) => TState, serializedState: string) : TState {
    return fn(serializedState);
  };

  reducer = function(state: TState = this.initialState, action: Action) : TState {
    let state1 = state;

    if (Array.isArray(action)) {
      let s = state;
      action.forEach(a => {
        s = this.reducer(s, a);
      }, this);

      return s;
    }

    if (!action || !action.type || action.type.indexOf('@@') === 0) {
      return state;
    }

    let reducer = this.reducers[action.type];

    if (!reducer) {
      return state;
    }

    let nextState = reducer(state1, action);

    return nextState;
  }.bind(this);

  constructor(init?) {
    let creators = this.create = this.creators = {};
    let reducers = this.reduce = this.reducers = {};
    this
      .setDefs()
      .setPrefix();

    Object.keys(init || {}).forEach(key => {
      let setterName = 'set' + key[0].toUpperCase() + key.slice(1);
      let setter = this[setterName];
      if (!setter) {
        throw new ReferenceError(`function ${setterName}() not found in ReduxRegistry`);
      }
      setter && setter.call(this, init[key]);
    });
  }
}