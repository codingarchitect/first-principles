export class Customer {
  CustomerID: string;
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

  constructor(
    fields?: {
      CustomerID?: string,
      CompanyName?: string,
      ContactName?: string,
      ContactTitle?: string,
      City?: string,
      Region?: string,
      PostalCode?: string,
      Country?: string,
      Phone?: string,
      Fax?: string,
    }) {
    if (fields) Object.assign(this, fields);
  }
}