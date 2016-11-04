import { Injectable } from '@angular/core';
import {Product, Category, UserProfile} from "./models";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AdminService {

  baseUrl: string = "http://localhost:9000/api";
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
  getProducts(categoryId: number): Observable<Product[]> {
    return this.http.get(`${this.categoriesApi}/${categoryId}/products`)
      .map(data => data.json())
      //.do(data => console.log('products : ' + JSON.stringify( data)))
      .catch(this.HandelError);
  }
  addProduct(product : Product) : Observable<Product>
  {
    let bodyString = JSON.stringify(product);
    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({headers : headers});

    return this.http.post(this.productsApi,  product, options)
      .map((res:Response) =>{
        let data = res.json();
        console.log(data);
        return data; })
      .catch((error: any)=> {
        console.log(error);
        return  Observable.throw(error.json().error || 'server error');});
  }

  updateProduct(product : Product) : Observable<Product>
  {
    let bodyString = JSON.stringify(product);
    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({headers : headers});

    return this.http.put(`${this.productsApi}/${product.id}`,  product, options)
      .map((res:Response) => res.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'server error'));
  }

  deleteProduct(id : number) : Observable<string>
  {
    return this.http.delete(`${this.productsApi}/${id}`)
      .map((res:Response) => res.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'server error'));
  }

  getCategories(): Observable<Category[]> {

    return this.http.get(this.categoriesApi)
      .map(data => data.json())
     // .do(data => console.log('categories : ' + data))
      .catch(this.HandelError);


  }

  getUserProfiles(): Observable<UserProfile[]> {

    return this.http.get(this.userProfilesApi)
      .map(data => data.json())
      .do(data => console.log('User Profiles : ' + data))
      .catch(this.HandelError);
  }


}
