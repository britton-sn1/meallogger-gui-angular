import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooditempickerComponent } from './fooditempicker/fooditempicker.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FooditemEditorComponent } from './fooditem-editor/fooditem-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FooditempickerComponent,
    FooditemEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
