import { TestBed, async } from '@angular/core/testing';
import { ProductAddComponent } from './product-add.component';
import {FormBuilder} from "@angular/forms";

describe('Component: ProductAddComponent', () => {
  it('should create an instance', () => {
    let component = new ProductAddComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
