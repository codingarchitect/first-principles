import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AutoCompleteModule, SharedModule } from 'primeng/primeng';

import { ProductDataService } from './product.data-service';
import { ProductLookupComponent } from './product-lookup/product-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AutoCompleteModule
  ],
  declarations: [ProductLookupComponent],
  providers: [ProductDataService],
  exports: [ProductLookupComponent]
})
export class ProductsModule { }