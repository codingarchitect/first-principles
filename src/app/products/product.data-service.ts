import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import * as Config from '../app.config';
import { Product } from './product.model';

@Injectable()
export class ProductDataService {
  private serviceUrl: string;
  constructor(
    @Inject(Config.APP_CONFIG) private config: Config.IAppConfig,
    private http: Http
  ) {
    this.serviceUrl = this.config.productsUrl;
  }
  public getAllProducts(): Observable<Product[]> {
    return this.http.get(this.serviceUrl)
      .map(response => response.json().data);
  }

  public search(searchTerm: string): Observable<Product[]> {
    return this.http
      .get(`${this.serviceUrl}?ProductName=${searchTerm}`)
      .map(response => response.json().data as Product[]);
  }
}