import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {SuiPopupModule} from "@angular-ex/semantic-ui";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    SuiPopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
