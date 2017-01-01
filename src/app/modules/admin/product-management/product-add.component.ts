import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {Product, Category} from "../shared/models";
import {AdminService} from "../shared/admin.service";
import {NgForm, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminProductService} from "../shared/admin-product.service";

@Component({
  selector: 'os-product-add',
  templateUrl: './product-add.component.html',
  styles: [``]
})
export class ProductAddComponent implements OnInit {

form : FormGroup;

  @Input()
  initialValue:any;

  constructor(private fb: FormBuilder) {

  }

  // addProduct() {
  //   this._productService.addProduct(this.product)
  // }

  ngOnInit() {
    this.form = this.fb.group({
      name : ['',Validators.required],
      price : ['',Validators.required],
      color : ['',Validators.required],
      size : ['',Validators.required],
      imageUrl : ['',Validators.required],
      description : ['',Validators.required],
      details : ['',Validators.required]
    });
  }

  // ngOnChanges(changes: SimpleChanges){
  //   if(changes['initialValue']){
  //     this.form.patchValue(changes['initialValue'].currentValue);
  //   }
  // }

  isErrorVisible(field:string, error: string)
  {
    return this.form.controls[field].dirty
      && this.form.controls[field].errors
    && this.form.controls[field].errors[error];
  }

  reset(){
    this.form.reset();
  }

  get valid(){
    return this.form.valid;
  }

  // get value(){
  //   return this.form.value;
  // }





}
