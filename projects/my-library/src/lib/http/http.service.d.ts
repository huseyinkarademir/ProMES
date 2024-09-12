import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../configuration/app/app.config";
import * as ɵngcc0 from '@angular/core'

export declare class HttpService {
    readonly httpClient: HttpClient;
    readonly appConfig: AppConfig;
    
    constructor(httpClient: HttpClient, appConfig: AppConfig);
    readonly apiTemplate: string;
    readonly apiTemplateVersion: string;
    /**
    * Get url with given parameters
    * @param api API Name
    * @param controller Controller Name
    * @param method Method Name
    */

    getUrl(api: string, controller: string, method: string, version?: string, rancher?: boolean): string;
    private getTemplate;
    baseUrl(api: string, rancher?: boolean): any;
    /**
    * Get url with given parameters and querystring
    * @param api API Name
    * @param controller Controller Name
    * @param method Method Name
    * @param data Query string data
    * @example get
    */

    getUrlWithQueryString(api: string, controller: string, method: string, data: any): string;
    /** 
    * 
    * @param param object dictionary
    * @example buildQueryString({id: 1, name: 'Jonathan' })
    */
   private buildQueryString;
   static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpService, never>;

}