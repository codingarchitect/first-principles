import { Component, OnInit, Input } from '@angular/core';

import { Store, Action } from '@ngrx/store';

import { Wrapper } from './wrapper';
import { buildWrapper } from './build-wrapper';

@Component({
  selector: 'enhanced-component',
  template: ``
})
export class EnhancedComponent<RootState, SliceState> implements OnInit {
  @Input() actionWrapper: Wrapper
  @Input() stateSelector: (state: RootState) => SliceState;

  @Input() actionPrefix: string;
  @Input() stateSelectorPath: string;

  private state;
  constructor(private store: Store<RootState>) { }

  ngOnInit() {

    if (this.actionPrefix) {
      this.actionWrapper = (action: Action) => buildWrapper(action, this.actionPrefix);
    }

    if (this.stateSelectorPath) {
      const paths = this.stateSelectorPath.split(".");
      (<any>this.store).select(...paths).subscribe((state => {
        this.state = state;
      }).bind(this));
    }

    if (this.stateSelector) {
      this.store.select(this.stateSelector).subscribe(state => {
        this.state = state;
      });
    }
  }

  dispatch(action: Action) {
    this.store.dispatch(this.actionWrapper(action));
  }
}