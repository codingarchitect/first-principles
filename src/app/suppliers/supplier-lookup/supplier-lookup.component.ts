import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoCompleteModule, SharedModule, AutoComplete } from 'primeng/primeng';

import { Supplier } from '../supplier.model';
import * as SupplierActions from '../supplier.actions';
import { AppState } from '../../store';

@Component({
  selector: 'ca-supplier-lookup',
  templateUrl: './supplier-lookup.component.html',
  styleUrls: ['./supplier-lookup.component.css']
})
export class SupplierLookupComponent implements OnInit {
  private searchTerm: string = '';

  constructor(private store: Store<AppState>) { 
    this.store.select('suppliers', 'entities').subscribe(suppliersMap => {
      this.results = Object.keys(suppliersMap)
        .map(key => suppliersMap[key])
        .filter(supplier => supplier.CompanyName.startsWith(this.searchTerm));
    });
  }

  ngOnInit() {
  }

  results: Supplier[];

  search(event) {
    this.searchTerm = event.query;
    this.store.dispatch(new SupplierActions.SearchAction(event.query));
  }
  supplierSelected(selectedSupplier) {
    this.store.dispatch(new SupplierActions.SelectAction(selectedSupplier ? selectedSupplier.SupplierID : -1));
  }
}