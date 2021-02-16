import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooditempickerComponent } from './fooditempicker/fooditempicker.component';

@NgModule({
  declarations: [
    AppComponent,
    FooditempickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
