import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import {AuthenticationService} from "../service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {TextAreaComponent} from "../text-area/text-area.component";
import {InputFieldComponent} from "../input-field/input-field.component";
import {ButtonComponent} from "../buttonComponent/button.component";
import { LoginComponent } from '../login/login.component';
 import {UserDetailsComponent} from "../user/user-details.component";
 import {UserService} from "../service/user.service";
 import { JwtInterceptor } from '../helper/jwt.interceptor';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        TextAreaComponent,
        InputFieldComponent,
        ButtonComponent,
        LoginComponent,
        UserDetailsComponent
    ],
    entryComponents: [AppComponent, TextAreaComponent, InputFieldComponent, ButtonComponent, LoginComponent, UserDetailsComponent],
    providers: [
        appRoutingProviders,
        AuthenticationService, 
        UserService, 
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    ngDoBootstrap() {}
}