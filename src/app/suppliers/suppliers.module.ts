import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { AutoCompleteModule, SharedModule } from 'primeng/primeng';

import { SupplierDataService } from './supplier.data-service';
import { SupplierLookupComponent } from './supplier-lookup/supplier-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AutoCompleteModule
  ],
  declarations: [SupplierLookupComponent],
  providers: [SupplierDataService],
  exports: [SupplierLookupComponent]
})
export class SuppliersModule { }