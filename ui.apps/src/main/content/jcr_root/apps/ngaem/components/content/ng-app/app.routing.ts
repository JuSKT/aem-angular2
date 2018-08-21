import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {LoginComponent} from "../login/login.component";
import {UserDetailsComponent} from "../user/user-details.component";

const appRoutes: Routes = [
    {path : '', component : LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'user-details', component: UserDetailsComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
