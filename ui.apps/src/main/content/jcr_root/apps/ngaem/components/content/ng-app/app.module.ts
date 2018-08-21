import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import {AuthenticationService} from "../service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {TaskListComponent} from "../task-list/task-list.component";
import {AboutComponent} from "../about/about.component";
import {TaskComponent} from "../task/task.component";
import {TextAreaComponent} from "../text-area/text-area.component";
import {SearchComponent} from "../ng-search/search.component";
import {IpLocationComponent} from "../ip-location/ip-location.component";
import {LocationService} from '../services/location-service';
import {InputFieldComponent} from "../input-field/input-field.component";
import {ButtonComponent} from "../buttonComponent/button.component";
import { LoginComponent } from '../login/login.component';
 import {UserDetailsComponent} from "../user/user-details.component";
 import {UserService} from "../service/user.service";
 import { JwtInterceptor } from '../helper/jwt.interceptor';
import { Ng2CompleterModule } from "ng2-completer";




@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        Ng2CompleterModule
    ],
    declarations: [
        AppComponent,
        TaskComponent,
        TaskListComponent,
        AboutComponent,
        TextAreaComponent,
        SearchComponent,
        IpLocationComponent,
        InputFieldComponent,
        ButtonComponent,
        LoginComponent,
        UserDetailsComponent
    ],
    entryComponents: [AppComponent, TextAreaComponent, SearchComponent, IpLocationComponent, InputFieldComponent, ButtonComponent, LoginComponent, UserDetailsComponent],
    providers: [
        LocationService,
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