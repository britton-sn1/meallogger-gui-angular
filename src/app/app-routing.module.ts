import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditempickerComponent } from './fooditempicker/fooditempicker.component';
import { FooditemEditorComponent } from './fooditem-editor/fooditem-editor.component';

const routes: Routes = [
  { path: '', component: FooditempickerComponent },
  { path: 'fooditempicker', component: FooditempickerComponent },
  { path: 'fooditemeditor/:id', component: FooditemEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
