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
  editing: number;

  constructor(private mealService: MealServiceService) {
    this.selected = 0;
    this.editing = 0;
  }

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
    this.editing = 0;
    console.log("selected = " + this.selected);
  }

  onEdit(foodItem: FoodItem): void {
    this.editing = foodItem.id;
  }

  onSave(foodItem: FoodItem): void {
    console.log("on save clicked");
    this.mealService.put(foodItem).subscribe(fi => this.clearSelection());
    
  }

  clearSelection(): void {
    this.getFoodItems();
    this.selected = 0;
    this.editing = 0;
  }
}
