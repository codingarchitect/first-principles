export class Address {
  Street: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;

  constructor(
    fields?: {
      Street?: string,
      City?: string,
      Region?: string,
      PostalCode?: string,
      Country?: string,
    }) {
    if (fields) Object.assign(this, fields);
  }
}