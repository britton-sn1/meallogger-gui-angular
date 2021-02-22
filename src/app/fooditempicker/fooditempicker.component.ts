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
  selected: number;

  constructor(private mealService: MealServiceService) { this.selected = 0;}

  ngOnInit() {
    this.getFoodItems();
  }

  getFoodItems(): void {
    this.mealService.getFoodItems().subscribe(fooditems => this.foodItems = fooditems);
  }

  onSelect(foodItem: FoodItem): void {
    if (this.selected === foodItem.id) {
      return;
    }
    this.selected = foodItem.id;
    console.log("selected = " + this.selected);
  }

  onEdit(foodItem: FoodItem): void {
    console.log("Edit " + foodItem.id);
  }
}
