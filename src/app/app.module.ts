import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AutoCompleteModule, SharedModule } from 'primeng/primeng';

import { APP_CONFIG, AppConfig } from './app.config';
import { InMemoryNorthwindService } from './mock-data/in-memory-northwind.service';
import { CustomersModule, CustomerEffects } from './customers';
import { EmployeesModule, EmployeeEffects } from './employees';
import { SuppliersModule, SupplierEffects } from './suppliers';
import { ProductsModule, ProductEffects } from './products';
import { appReducer, appInitialState } from './store';
import { AppComponent } from './app.component';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryNorthwindService),
    CustomersModule,
    EmployeesModule,
    SuppliersModule,
    ProductsModule,
    SharedModule,
    AutoCompleteModule,
    StoreModule.provideStore(appReducer, appInitialState),
    EffectsModule.run(CustomerEffects),
    EffectsModule.run(EmployeeEffects),
    EffectsModule.run(SupplierEffects),
    EffectsModule.run(ProductEffects),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }