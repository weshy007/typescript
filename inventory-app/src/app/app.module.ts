import { BrowserModule } from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductImageComponent } from "./product-image/product-image.component";
import { ProductDepartmentComponent } from "./product-department/product-department.component";
import { PriceDisplayComponent } from "./price-display/price-display.component";
import { ProductRowComponent } from "./product-row/product-row.component";
import { ProductsListComponent } from "./products-list/products-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
