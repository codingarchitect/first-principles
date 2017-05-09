import { Employee } from './employee.model';

export interface EmployeeState {
    ids: string[];
    entities: { [id: string]: Employee };
    selectedEmployeeId: number;
  }

export const employeeInitialState : EmployeeState = {
  ids: [],
  entities: {},
  selectedEmployeeId: -1,
}