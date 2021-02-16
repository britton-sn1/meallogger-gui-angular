import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../fooditem';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-fooditempicker',
  templateUrl: './fooditempicker.component.html',
  styleUrls: ['./fooditempicker.component.css']
})
export class FooditempickerComponent implements OnInit {

  foodItems: FoodItem[];

  constructor(private mealService: MealServiceService) { }

  ngOnInit() {
    this.getFoodItems();
  }

  getFoodItems(): void {
    this.foodItems = this.mealService.getFoodItems();
  }
}
