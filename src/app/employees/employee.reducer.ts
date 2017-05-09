import { Action } from '@ngrx/store';

import * as EmployeeActions from './employee.actions';
import { Employee } from './employee.model';
import { EmployeeState, employeeInitialState } from './employee.state';

export function employeeReducer(state: EmployeeState = employeeInitialState, action: any) : EmployeeState {
  switch(action.type) {
    case EmployeeActions.ActionTypes.SEARCH_COMPLETE: {
      const employees = action.results;
      const newEmployees = employees.filter(employee => !state.entities[employee.EmployeeID]);

      const newEmployeeIds = newEmployees.map(employee => employee.EmployeeID);
      const newEmployeeEntities = newEmployees.reduce((entities: { [id: number]: Employee }, employee: Employee) => {
        return Object.assign(entities, {
          [employee.EmployeeID]: employee
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newEmployeeIds ],
        entities: Object.assign({}, state.entities, newEmployeeEntities),
        selectedEmployeeId: state.selectedEmployeeId
      };
    }
    case EmployeeActions.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedEmployeeId: action.employeeId
      };
    }
    default:
      return state;
  }
}