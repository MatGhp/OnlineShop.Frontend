import {Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Product, Category} from "../shared/models";

@Component({
  selector: 'os-product-edit',
  templateUrl: './product-edit.component.html',
  styles: [`
.form-control{
max-width: 300px;
}
.invalid-message{
color:red;
}
`]
})
export class ProductEditComponent implements OnInit  {


  @Input() product = <Product>{};
  @Input() categories = <Category[]>{};
  @Output() editedProduct = new EventEmitter<Product>();
  selectedCategoryId: number;
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.myForm);
  }


  ngOnInit () {
    this.myForm = this.formBuilder.group({
      name: [this.product.name, [Validators.required, Validators.minLength(1)]],
      price: [this.product.price, Validators.required],
      color: [this.product.color, Validators.required],
      size: [this.product.size, Validators.required],
      imageUrl: [this.product.imageUrl, Validators.required],
      description: [this.product.description],
      details: [this.product.details]

    });
  }
}

