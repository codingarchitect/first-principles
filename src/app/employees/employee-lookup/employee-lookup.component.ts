import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoCompleteModule, SharedModule, AutoComplete } from 'primeng/primeng';

import { Employee } from '../employee.model';
import * as EmployeeActions from '../employee.actions';
import { AppState } from '../../store';

@Component({
  selector: 'ca-employee-lookup',
  templateUrl: './employee-lookup.component.html',
  styleUrls: ['./employee-lookup.component.css']
})
export class EmployeeLookupComponent implements OnInit {
  private searchTerm: string = '';

  constructor(private store: Store<AppState>) { 
    this.store.select('employees', 'entities').subscribe(employeesMap => {
      this.results = Object.keys(employeesMap)
        .map(key => employeesMap[key])
        .filter(employee => employee.FirstName.startsWith(this.searchTerm));
    });
  }

  ngOnInit() {
  }

  results: Employee[];

  search(event) {
    this.searchTerm = event.query;
    this.store.dispatch(new EmployeeActions.SearchAction(event.query));
  }
  employeeSelected(selectedEmployee) {
    this.store.dispatch(new EmployeeActions.SelectAction(selectedEmployee ? selectedEmployee.EmployeeID : -1));
  }
}