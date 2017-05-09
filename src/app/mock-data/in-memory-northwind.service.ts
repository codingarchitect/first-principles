import { InMemoryDbService } from 'angular-in-memory-web-api';

import { customers as customerData } from './customers';
import { employees as employeeData } from './employees';
import { suppliers as supplierData } from './suppliers';
import { products as productData } from './products';

export class InMemoryNorthwindService implements InMemoryDbService {
  createDb() {
    let customers = customerData;
    let employees = employeeData;
    let suppliers = supplierData;
    let products = productData;
    return { customers, employees, suppliers, products };
  }
}