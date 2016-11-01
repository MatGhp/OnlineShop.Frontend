import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminAppComponent } from './admin-app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { AddProductComponent } from './product-management/add-product.component';
import 'rxjs';
import {AdminRoutingModule, adminRoutedComponents} from "./admin.routing";
import {AdminService} from "./shared/admin.service";
import {AdminAppHomeComponent} from "./admin-app-home.component";
import { AdminSidebarComponent } from './shared/admin-sidebar.component';
import {DropdownDirective} from "./shared/dropdown.directive";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    AdminRoutingModule


  ],
  exports:[CommonModule, FormsModule,
    AdminAppComponent,
    AddProductComponent,
    ProductManagementComponent,
    AdminSidebarComponent
    ],
  declarations: [
    AdminAppComponent,
    ProductManagementComponent,
    AddProductComponent,
    adminRoutedComponents,
    AdminAppHomeComponent,
    AdminSidebarComponent,
    DropdownDirective
  ],
  providers: [AdminService]
})
export class AdminAppModule { }
