import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditempickerComponent } from './fooditempicker/fooditempicker.component';

const routes: Routes = [
  { path: 'fooditempicker', component: FooditempickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
