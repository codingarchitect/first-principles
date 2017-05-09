export class Supplier {
  SupplierID: number;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string;
  HomePage: string;

  constructor(
    fields?: {
      SupplierID?: number;
      CompanyName?: string;
      ContactName?: string;
      ContactTitle?: string;
      Address?: string;
      City?: string;
      Region?: string;
      PostalCode?: string;
      Country?: string;
      Phone?: string;
      Fax?: string;
      HomePage?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}