import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { Client, AuthService } from '@angular/common'
// import { Client, AuthService } from '@sahk/common'



@Injectable()
export class AuthGuard implements CanActivate {
    public isLoggedIn: Observable<boolean>

    constructor(private authService: AuthService) {}

    async canActivate(next: ActivatedRouteSnapshot) {

        const res = await this.authService.getAccessToken();

        if (res == null) {
            await this.authService.login({ path: next.routeConfig?.path, queryParams: next.queryParams})
            return false
        }

        Client.getInstance().token = res
        return true
    }


}