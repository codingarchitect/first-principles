import { Component } from '@angular/core';

import { CustomerDataService } from './customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private customerService: CustomerDataService) {
    this.customerService.getAllCustomers()
      .subscribe(customers => console.log(customers));
  }
}
