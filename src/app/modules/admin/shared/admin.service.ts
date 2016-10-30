import { Injectable } from '@angular/core';
import {Product, Category, UserProfile} from "./models";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AdminService {

  baseUrl: string = "http://localhost:9000/api/";
  categoriesApi : string = "";
  productsApi : string = "";
  userProfilesApi : string = "";

  constructor(private http: Http) {
    this.categoriesApi = `${this.baseUrl}/categories`;
    this.productsApi = `${this.baseUrl}/products`;
    this.userProfilesApi = `${this.baseUrl}/userprofiles`;

  }

  private HandelError(error: any)
  {
    console.log(error);
    return Observable.throw(error); //.json().error || 'Server Error');
  }

  //-------Get methods
  getProducts(categoryName: string): Observable<Product[]> {
    return this.http.get(`${this.productsApi}/${categoryName}`)
      .map(data => data.json())
      .do(data => console.log('products : ' + data))
      .catch(this.HandelError);
  }

  getCategories(): Observable<Category[]> {

    return this.http.get(this.categoriesApi)
      .map(data => data.json())
      .do(data => console.log('categories : ' + data))
      .catch(this.HandelError);


  }

  getUserProfiles(): Observable<UserProfile[]> {

    return this.http.get(this.userProfilesApi)
      .map(data => data.json())
      .do(data => console.log('User Profiles : ' + data))
      .catch(this.HandelError);


  }
}
