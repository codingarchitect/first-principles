import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoCompleteModule, SharedModule, AutoComplete } from 'primeng/primeng';

import { Product } from '../product.model';
import * as ProductActions from '../product.actions';
import { AppState } from '../../store';

@Component({
  selector: 'ca-product-lookup',
  templateUrl: './product-lookup.component.html',
  styleUrls: ['./product-lookup.component.css']
})
export class ProductLookupComponent implements OnInit {
  private searchTerm: string = '';

  constructor(private store: Store<AppState>) { 
    this.store.select('products', 'entities').subscribe(productssMap => {
      this.results = Object.keys(productssMap)
        .map(key => productssMap[key])
        .filter(product => product.ProductName.startsWith(this.searchTerm));
    });
  }

  ngOnInit() {
  }

  results: Product[];

  search(event) {
    this.searchTerm = event.query;
    this.store.dispatch(new ProductActions.SearchAction(event.query));
  }
  productSelected(selectedProduct) {
    this.store.dispatch(new ProductActions.SelectAction(selectedProduct ? selectedProduct.ProductID : -1));
  }
}