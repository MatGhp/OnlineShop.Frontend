import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "./models";
import {Response} from "@angular/http";
import {AngularFireDatabase, AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class AdminProductService {

  private products$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.products$ = this.db.list("products");
  }

  getProducts(): Observable<Product[]> {
    return this.products$.map(Product.fromJsonArray);
  }

  addProduct(product: Product) {
    this.products$.push(product);
  }

}
