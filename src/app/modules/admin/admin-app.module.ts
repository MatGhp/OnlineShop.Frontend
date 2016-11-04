import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAppComponent } from './admin-app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import 'rxjs';
import {AdminRoutingModule, adminRoutedComponents} from "./admin.routing";
import {AdminService} from "./shared/admin.service";
import {AdminAppHomeComponent} from "./admin-app-home.component";
import { AdminSidebarComponent } from './shared/admin-sidebar.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import { ProductAddComponent } from './product-management/product-add.component';
import { ProductEditComponent } from './product-management/product-edit.component';
import { ProductDetailsComponent } from './product-management/product-details.component';
import { ImageUploadComponent } from './shared/atomic-components/image-upload.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule


  ],
  exports:[CommonModule, FormsModule,
    AdminAppComponent,
    ProductManagementComponent,
    AdminSidebarComponent
    ],
  declarations: [
    AdminAppComponent,
    ProductManagementComponent,
    adminRoutedComponents,
    AdminAppHomeComponent,
    AdminSidebarComponent,
    DropdownDirective,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ImageUploadComponent
  ],
  providers: [AdminService]
})
export class AdminAppModule { }
