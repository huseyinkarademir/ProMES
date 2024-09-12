import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HttpService } from './http.service'
import * as ɵngcc0 from '@angular/core'

export declare class BaseDataService {
    httpService: HttpService
    private api
    private controller
    private version
    private rancher
    private readonly headers;
    /**
     *
     */
    constructor(httpService: HttpService, api: string, controller: string, version?: string, rancher?: boolean)
    /** 
     * Get base url of the api
    */

    getUrl(): any
    private buildUrl
    private optionBuilder
    protected toPromise<T = any>(observable: Observable<T>): Promise<T>
    protected post<T = any>(method: string, data: any, responseType?: any, headers?: any, useFormData?: any): Promise<T>
    protected put<T = any>(method: string, data: any, responseType?: any, headers?: any, useFormData?: any): Promise<T>
    protected get<T = any>(method: string, data?: any, responseType?: any, headers?: HttpHeaders | {
        [header: string]: string | string[]
    }): Promise<T>
    protected delete<T = any>(method: string, data: any, querystring?: boolean): Promise<T>
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseDataService, never>;
}    