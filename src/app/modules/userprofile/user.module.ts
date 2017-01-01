import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserService} from "./shared/user.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {UserRoutingModule, UserRoutedComponents} from "./user.routing";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import {HeaderComponent} from "./shared/header.component";
import { SettingsComponent } from './shared/settings.component';

@NgModule({
  imports: [
    CommonModule,

    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  entryComponents: [SettingsComponent,HeaderComponent],
  exports: [UserComponent, HeaderComponent, UserRoutedComponents],
  declarations: [UserComponent, UserRoutedComponents, UserRoutedComponents, SettingsComponent],
  providers: [UserService, AuthService, AuthGuard]
})
export class UserModule {
}
