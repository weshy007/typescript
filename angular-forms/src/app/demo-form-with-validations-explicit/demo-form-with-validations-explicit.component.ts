import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-with-validations-explicit.component.css']
})
export class DemoFormWithValidationsExplicitComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log("You have submitted value: ", value)
  }

}
