import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})
export class DemoFormNgModelComponent {
  productName: string;

  constructor() {
    this.productName = "ng Book: The Complete Guide to Angular"
  }

  onSubmit(value: string): void {
    console.log("You submitted value: ", value);
  }

}
