import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoCompleteModule, SharedModule, AutoComplete } from 'primeng/primeng';

import { Customer } from '../customer.model';
import * as CustomerActions from '../customer.actions';
import { AppState } from '../../store';

@Component({
  selector: 'ca-customer-lookup',
  templateUrl: './customer-lookup.component.html',
  styleUrls: ['./customer-lookup.component.css']
})
export class CustomerLookupComponent implements OnInit {
  private searchTerm: string = '';

  constructor(private store: Store<AppState>) { 
    this.store.select('customers', 'entities').subscribe(customersMap => {
      this.results = Object.keys(customersMap)
        .map(key => customersMap[key])
        .filter(customer => customer.CustomerID.startsWith(this.searchTerm));
    });
  }

  ngOnInit() {
  }

  results: Customer[];

  search(event) {
    this.searchTerm = event.query;
    this.store.dispatch(new CustomerActions.SearchAction(event.query));
  }
  customerSelected(selectedCustomer) {
    this.store.dispatch(new CustomerActions.SelectAction(selectedCustomer ? selectedCustomer.CustomerID : ''));
  }
}
