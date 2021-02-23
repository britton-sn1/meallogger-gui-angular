import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../fooditem';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-fooditempicker',
  templateUrl: './fooditempicker.component.html',
  styleUrls: ['./fooditempicker.component.css']
})
export class FooditempickerComponent implements OnInit {
  pageSize: number = 2;
  pageNo: number = 0;
  numberOfPages: number = 0;
  filter: string = "";

  foodItems: FoodItem[];

  constructor(private mealService: MealServiceService) {
  }

  ngOnInit() {
    this.getFoodItems();
    this.getNumberOfPages();
  }

  getFoodItems(): void {
    this.mealService.getFoodItems(this.pageNo, this.pageSize, this.filter).subscribe(fooditems => this.foodItems = fooditems);
  }

  getNumberOfPages(): void {
    this.mealService.getFoodItemCount(this.filter).subscribe(foodItemsCount => this.setNumOfPages(foodItemsCount));
  }

  onPrevPage() {
    if (this.pageNo > 0) {
      this.pageNo = this.pageNo - 1;
    }
    this.getFoodItems();
  }

  onNextPage() {
    if (this.pageNo < this.numberOfPages-1) {
      this.pageNo = this.pageNo + 1;
    }
    this.getFoodItems();
  }

  private setNumOfPages(foodItemsCount: number): void {
    this.numberOfPages = foodItemsCount / this.pageSize;
    if (this.numberOfPages > Math.trunc(foodItemsCount / this.pageSize)) {
      this.numberOfPages = Math.trunc(this.numberOfPages) + 1;
    }
  }

  onFilter() {
    this.getFoodItems();
    this.getNumberOfPages();
  }

  onClearFilter() {
    this.filter = "";
    this.onFilter();
  }
}
