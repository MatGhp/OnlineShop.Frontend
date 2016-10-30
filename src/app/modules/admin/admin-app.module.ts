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

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports:[CommonModule, FormsModule, AdminAppComponent, AddProductComponent,ProductManagementComponent],
  declarations: [
    AdminAppComponent,
    ProductManagementComponent,
    AddProductComponent,
    adminRoutedComponents

  ],
  providers: [AdminService]
})
export class AdminAppModule { }
