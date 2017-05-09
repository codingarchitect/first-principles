import { OpaqueToken } from "@angular/core";

export interface IAppConfig {
    customersUrl: string;
}

export const AppConfig: IAppConfig = {    
    customersUrl: "api/customers"    
};

export let APP_CONFIG = new OpaqueToken("app.config");