import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CustomerDataService } from './customer.data-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CustomerDataService]
})
export class CustomersModule { }