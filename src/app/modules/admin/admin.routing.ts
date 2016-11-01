import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";
import {AddProductComponent} from "./product-management/add-product.component";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {AdminAppComponent} from "./admin-app.component";
import {AdminAppHomeComponent} from "./admin-app-home.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminAppComponent,
    children: [
      {path: 'product-management', component:ProductManagementComponent},
      {path:'',component: AdminAppHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

export const adminRoutedComponents = [AddProductComponent, ProductManagementComponent, AdminAppComponent ,AdminAppHomeComponent ];
