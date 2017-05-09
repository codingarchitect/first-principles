import { Address } from '../shared'
export class Customer {
  CustomerID: string;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: Address;
  Phone: string;
  Fax: string;

  constructor(
    fields?: {
      CustomerID?: string,
      CompanyName?: string,
      ContactName?: string,
      ContactTitle?: string,
      Address?: any,
      Phone?: string,
      Fax?: string,
    }) {
    if (fields) Object.assign(this, fields);
    if (fields && fields.Address) fields.Address = new Address({...fields.Address});
  }
}