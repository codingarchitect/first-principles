import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import * as Config from '../app.config';
import { Customer } from './customer.model';

@Injectable()
export class CustomerDataService {
  private serviceUrl: string;
  constructor(
    @Inject(Config.APP_CONFIG) private config: Config.IAppConfig,
    private http: Http
  ) {
    this.serviceUrl = this.config.customersUrl;
  }
  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get(this.serviceUrl)
      .map(response => response.json().data);
  }

  public search(searchTerm: string): Observable<Customer[]> {
    return this.http
      .get(`${this.serviceUrl}?CustomerID=${searchTerm}`)
      .map(response => response.json().data as Customer[]);
  }
}