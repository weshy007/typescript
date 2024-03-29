import {Component, Input} from '@angular/core';
import {Product} from "../product.model";

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  @Input() product: Product;
}
