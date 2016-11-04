import {Component, OnInit} from '@angular/core';
import {Product, Category} from "../shared/models";
import {AdminService} from "../shared/admin.service";


@Component({
  selector: 'os-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory: Category;
  errorMessage: string = "";

  id: number;

  constructor(private service: AdminService) {
  }


  // onEditInline(id: string) {
  //   console.log(document.getElementById(id));
  //   document.getElementById(id).hidden = !document.getElementById(id).hidden;
  // }

  ngOnInit() {
    this.service.getCategories()
      .subscribe(
        data => this.categories = <Category[]>data,
        error => {
          this.errorMessage = <any>error;
          console.log(error);
        });
  }

  getProducts(categoryId) {
    console.log("categoryId : " + categoryId);
    this.service.getProducts(categoryId)
      .subscribe(data => this.products = <Product[]>data,
        error => {
          this.errorMessage = <any>error;
          console.log(error);
        });
  }

  get diagnostic() {
    return JSON.stringify(this.products);
  }

}
