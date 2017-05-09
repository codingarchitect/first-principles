import { OpaqueToken } from "@angular/core";

export interface IAppConfig {
    customersUrl: string;
    employeesUrl: string;
    suppliersUrl: string;
    productsUrl: string;
}

export const AppConfig: IAppConfig = {    
    customersUrl: "api/customers",    
    employeesUrl: "api/employees",
    suppliersUrl: "api/suppliers",
    productsUrl: "api/products"
};

export let APP_CONFIG = new OpaqueToken("app.config");