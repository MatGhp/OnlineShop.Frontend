import {Component, OnInit} from '@angular/core';
import {Product, Category} from "../shared/models";
import {AdminService} from "../shared/admin.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'os-product-add',
  templateUrl: 'product-add.component.html',
  styles: [`
.form-control{
max-width: 300px;
}
.invalid-message{
color:red;
}
`]
})
export class ProductAddComponent implements OnInit {

  product = <Product>{};

  categories: Category[] = [];

  constructor(private adminService: AdminService) {
    adminService.getCategories()
      .subscribe(data => this.categories = <Category[]>data);
  }

  addProduct() {
    this.adminService.addProduct(this.product)
      .subscribe(data=> console.log(data));

  }

  ngOnInit() {
  }

}
