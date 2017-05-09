import { InMemoryDbService } from 'angular-in-memory-web-api';

import { customers as customerData } from './customers';

export class InMemoryNorthwindService implements InMemoryDbService {
  createDb() {
    let customers = customerData
    return { customers };
  }
}