import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AutoCompleteModule, SharedModule } from 'primeng/primeng';

import { CustomerDataService } from './customer.data-service';
import { CustomerLookupComponent } from './customer-lookup/customer-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AutoCompleteModule
  ],
  declarations: [CustomerLookupComponent],
  providers: [CustomerDataService],
  exports: [CustomerLookupComponent]
})
export class CustomersModule { }