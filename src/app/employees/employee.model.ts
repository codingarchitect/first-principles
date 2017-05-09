export class Employee {
  EmployeeID: number;
  LastName: string;
  FirstName: string;
  Title: string;
  TitleOfCourtesy: string;
  BirthDate: string;
  HireDate: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  HomePhone: string;
  Extension: string;
  Photo: string;
  Notes: string;
  ReportsTo: number;
  PhotoPath: string;

  constructor(
    fields?: {
      EmployeeID?: number,
      LastName?: string,
      FirstName?: string,
      Title?: string,
      TitleOfCourtesy?: string,
      BirthDate?: string,
      HireDate?: string,
      Address?: string,
      City?: string,
      Region?: string,
      PostalCode?: string,
      Country?: string,
      HomePhone?: string,
      Extension?: string,
      Photo?: string,
      Notes?: string,
      ReportsTo?: number,
      PhotoPath?: string,
    }) {
    if (fields) Object.assign(this, fields);
  }
}