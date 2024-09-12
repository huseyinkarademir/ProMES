import * as ɵngcc0 from '@angular/core'

export declare class AppConfig {
    production: boolean;
    apiUrl: string;
    localRoute: boolean;
    apiLocal: string;
    rancher: string;
    rancherLocal: any | undefined;
    api: any
    version: string
    environment: string
    imgHref: string
    signalRHubURL: string
    applicationName: string
    logLevel: string
    auth?: {
        stsUrl: string
        clientId: string
        redirectPath: string
        logoutPath: string
    }
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AppConfig, never>
}    