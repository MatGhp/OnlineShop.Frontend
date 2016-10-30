import { Component, OnInit } from '@angular/core';
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
  errorMessage: string = "";

  constructor(private service: AdminService) {
    service.getCategories()
      .subscribe(
        data => this.categories = <Category[]>data,
        error => {
          this.errorMessage = <any>error;
          console.log(error);
        });

  }

  ngOnInit() {
  }

  get diagnostic(){
    return JSON.stringify(this.categories);
  }

}
