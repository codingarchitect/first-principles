import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import * as Config from '../app.config';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeDataService {
  private serviceUrl: string;
  constructor(
    @Inject(Config.APP_CONFIG) private config: Config.IAppConfig,
    private http: Http
  ) {
    this.serviceUrl = this.config.employeesUrl;
  }
  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get(this.serviceUrl)
      .map(response => response.json().data);
  }

  public search(searchTerm: string): Observable<Employee[]> {
    return this.http
      .get(`${this.serviceUrl}?FirstName=${searchTerm}`)
      .map(response => response.json().data as Employee[]);
  }
}