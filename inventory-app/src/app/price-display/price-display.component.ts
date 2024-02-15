import {Component, Input} from '@angular/core';

@Component({
  selector: 'price-display',
  styleUrls: ['./price-display.component.css'],
  template : `
    <div class="price-display">\\$</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;

}
