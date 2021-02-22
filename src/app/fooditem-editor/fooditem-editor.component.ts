import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../fooditem';
import { MealServiceService } from '../meal-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-fooditem-editor',
  templateUrl: './fooditem-editor.component.html',
  styleUrls: ['./fooditem-editor.component.css']
})
export class FooditemEditorComponent implements OnInit {

  foodItem: FoodItem;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealServiceService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.getFoodItem();
  }

  getFoodItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("Getting food item id = " + id);
    this.mealService.getFoodItem(id).subscribe(fooditem => this.foodItem = fooditem);
  }

  onSave(foodItem: FoodItem): void {
    console.log("on save clicked");
    this.mealService.put(foodItem).subscribe(fi => this.showPicker());
  }

  showPicker(): void {
    console.log("Redirecting to picker");
    this.router.navigate(['fooditempicker']);
  }
}
