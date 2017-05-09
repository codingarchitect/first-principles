import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AutoCompleteModule, SharedModule } from 'primeng/primeng';

import { EmployeeDataService } from './employee.data-service';
import { EmployeeLookupComponent } from './employee-lookup/employee-lookup.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AutoCompleteModule
  ],
  declarations: [EmployeeLookupComponent],
  providers: [EmployeeDataService],
  exports: [EmployeeLookupComponent]
})
export class EmployeesModule { }