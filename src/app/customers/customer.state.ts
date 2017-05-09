import { Customer } from './customer.model';

export interface CustomerState {
    ids: string[];
    entities: { [id: string]: Customer };
    selectedCustomerId: string | null;
  }

export const customerInitialState : CustomerState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
}