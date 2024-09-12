import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from ".core/authentication/AuthGuard"
import { WelcomeComponent } from "./pages/common/welcome.component"
import { StsLoginComponent } from "./pages/common/sts-login.component"
import { StsLogoutComponent } from "./pages/common/sts-logout.component"

import { routes } from "./app.routes";

let routes: Routes = [
    {
        path: "",
        canActivate: [AuthGuard],
        component: WelcomeComponent,
    },
    {
        path: "signin-oidc",
        component: StsLoginComponent,
    },
    {
        path: "signout-callback-oidc",
        component: StsLogoutComponent,
    },
    {
        path: "token-exchange",
        loadChildren: () =>
            import("./pages/common/token-exchange/token-exchange.module").then(
                (m) => m.TokenExchangeModule
            ),
    },
    {
        path: "screen-name-1",
        canActivate: [AuthGuard],
        loadChildren: () =>
            import("./pages/team1/screen-name-1/screen-name-1.module").then(
                (m) => m.
            ),
    }
    
];

routes.push({
    path: "**",
    canActivate: [AuthGuard],
    component: WelcomeComponent,
})
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}