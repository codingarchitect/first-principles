import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import * as Config from '../app.config';
import { Supplier } from './supplier.model';

@Injectable()
export class SupplierDataService {
  private serviceUrl: string;
  constructor(
    @Inject(Config.APP_CONFIG) private config: Config.IAppConfig,
    private http: Http
  ) {
    this.serviceUrl = this.config.suppliersUrl;
  }
  public getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get(this.serviceUrl)
      .map(response => response.json().data);
  }

  public search(searchTerm: string): Observable<Supplier[]> {
    return this.http
      .get(`${this.serviceUrl}?CompanyName=${searchTerm}`)
      .map(response => response.json().data as Supplier[]);
  }
}