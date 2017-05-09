import { Supplier } from './supplier.model';

export interface SupplierState {
    ids: string[];
    entities: { [id: string]: Supplier };
    selectedSupplierId: number;
  }

export const supplierInitialState : SupplierState = {
  ids: [],
  entities: {},
  selectedSupplierId: -1,
}