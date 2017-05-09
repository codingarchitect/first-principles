export class Product {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: string;
  UnitsInStock: number;
  UnitsOnOrder: 0;
  ReorderLevel: 10;
  Discontinued: false;

  constructor(
    fields?: {
      ProductID?: number,
      ProductName?: string,
      SupplierID?: number,
      CategoryID?: number,
      QuantityPerUnit?: string,
      UnitPrice?: string,
      UnitsInStock?: number,
      UnitsOnOrder?: 0,
      ReorderLevel?: 10,
      Discontinued?: false,
    }) {
    if (fields) Object.assign(this, fields);
  }
}