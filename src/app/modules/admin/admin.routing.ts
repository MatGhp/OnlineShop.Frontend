import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {AdminAppComponent} from "./admin-app.component";
import {AdminAppHomeComponent} from "./admin-app-home.component";
import {ProductEditComponent} from "./product-management/product-edit.component";
import {ProductDetailsComponent} from "./product-management/product-details.component";
import {ProductAddComponent} from "./product-management/product-add.component";


const ADMIN_ROUTES: Routes = [
  {
    path: '', component: AdminAppComponent,
    children: [
      {path: 'products', component: ProductManagementComponent},
      {path: 'products/add', component: ProductAddComponent},
      {path: 'products/:id/details', component: ProductDetailsComponent},
      {path: 'products/:id/edit', component: ProductEditComponent},
      {path: '', component: AdminAppHomeComponent}
    ]
  }
];


// @NgModule({
//   imports: [RouterModule.forChild(ADMIN_ROUTES)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule {
// }

//export const adminRoutedComponents = [ProductEditComponent, ProductAddComponent, ProductDetailsComponent, ProductManagementComponent, AdminAppComponent, AdminAppHomeComponent];

export const adminRouting = RouterModule.forChild(ADMIN_ROUTES);
