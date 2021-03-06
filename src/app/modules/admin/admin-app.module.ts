import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAppComponent } from './admin-app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import 'rxjs';

//import {AdminRoutingModule, adminRoutedComponents} from "./admin.routing";
import {AdminService} from "./shared/admin.service";
import {AdminAppHomeComponent} from "./admin-app-home.component";
import { AdminSidebarComponent } from './shared/admin-sidebar.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import { ProductAddComponent } from './product-management/product-add.component';
import { ProductEditComponent } from './product-management/product-edit.component';
import { ProductDetailsComponent } from './product-management/product-details.component';
import { ImageUploadComponent } from './shared/atomic-components/image-upload.component';
import {adminRouting} from "./admin.routing";
import {AdminAuthGuard} from "./shared/adminAuth.guard";
import {AuthService} from "../userprofile/shared/auth.service";
import { ListUsersComponent } from './user-management/list-users.component';
import {AdminProductService} from "./shared/admin-product.service";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
    adminRouting
],

  declarations: [
    AdminAppComponent,
    ProductManagementComponent,
    AdminAppHomeComponent,
    AdminSidebarComponent,
    DropdownDirective,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ImageUploadComponent,
    ListUsersComponent
  ],
  providers: [AdminService, AdminProductService ,AuthService, AdminAuthGuard]

})
export class AdminAppModule { }
