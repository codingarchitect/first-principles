import { CustomerState, customerInitialState } from '../customers';
import { EmployeeState, employeeInitialState } from '../employees';
import { SupplierState, supplierInitialState } from '../suppliers';
import { ProductState, productInitialState } from '../products';

export interface AppState {
  customers: CustomerState;
  employees: EmployeeState;
  suppliers: SupplierState;
  productss: ProductState;
}

export const appInitialState = {
  customers: customerInitialState,
  employees: employeeInitialState,
  suppliers: supplierInitialState,
  products: productInitialState,
}