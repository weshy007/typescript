import {Component, HostBinding, Input} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product-image',
  styleUrls: ['./product-image.component.css'],
  template: `
    <img class="product-image" [src]="product.imageUrl" alt="">
    `
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image'

}
