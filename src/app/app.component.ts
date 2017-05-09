import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private store: Store<AppState>) {
    this.store
      .select('customers', 'selectedCustomerId')
      .subscribe(selectedCustomerId => console.log(`Customer with id: '${selectedCustomerId}' was selected.`));
    this.store
      .select('employees', 'selectedEmployeeId')
      .subscribe(selectedEmployeeId => console.log(`Employee with id: '${selectedEmployeeId}' was selected.`));
    this.store
      .select('suppliers', 'selectedSupplierId')
      .subscribe(selectedSupplierId => console.log(`Supplier with id: '${selectedSupplierId}' was selected.`));
    this.store
      .select('products', 'selectedProductId')
      .subscribe(selectedProductId => console.log(`Product with id: '${selectedProductId}' was selected.`));
  }
}
