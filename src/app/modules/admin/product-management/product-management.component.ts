import {Component, OnInit} from '@angular/core';
import {Product, Category} from "../shared/models";
import {AdminService} from "../shared/admin.service";
import {AdminProductService} from "../shared/admin-product.service";


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

  constructor(private service: AdminProductService) {
  }


  // onEditInline(id: string) {
  //   console.log(document.getElementById(id));
  //   document.getElementById(id).hidden = !document.getElementById(id).hidden;
  // }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(p => {
            this.products = p;
      });
    // this.service.getProducts()
    //   .subscribe(p => {
    //     this.products = p;
    //     console.log(this.products);
    //     console.log(p);
    //
    //   });
    // this.service.getCategories()
    //   .subscribe(
    //     data => this.categories = <Category[]>data,
    //     error => {
    //       this.errorMessage = <any>error;
    //       console.log(error);
    //     });
  }

  getProducts() {
    //console.log("categoryId : " + categoryId);
    this.service.getProducts()
      .subscribe(p => this.products = <Product[]>p);
    // .subscribe(data => this.products = <Product[]>data,
    //   error => {
    //     this.errorMessage = <any>error;
    //     console.log(error);
    //   });
  }

  get diagnostic() {
    return JSON.stringify(this.products);
  }

}
