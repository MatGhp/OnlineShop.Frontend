
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./product-management/add-product.component";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {AdminAppComponent} from "./admin-app.component";

const routes: Routes = [
  { path: 'admin/dashboard', component: AdminAppComponent },
  { path: 'admin/addproduct', component: AddProductComponent },
  { path: 'admin/productmanagement', component: ProductManagementComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRoutedComponents = [AddProductComponent, ProductManagementComponent, AdminAppComponent];
