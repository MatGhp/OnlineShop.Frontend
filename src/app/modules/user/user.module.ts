///<reference path="../../../../node_modules/@angular/common/src/common_module.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserService} from "./shared/user.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {UserRoutingModule, UserRoutedComponents} from "./user.routing";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import { UserHeaderComponent } from './shared/user-header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports:[UserComponent, UserRoutedComponents],
  declarations: [UserComponent,UserRoutedComponents, UserHeaderComponent],
  providers:[UserService, AuthService, AuthGuard]
})
export class UserModule { }
