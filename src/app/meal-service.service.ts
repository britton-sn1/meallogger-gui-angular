import { Injectable } from '@angular/core';
import { FoodItem } from './fooditem';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  constructor() { }
  foodItems: FoodItem[] = [
    { id: 1, name: "FI1", carbs: 87339, sugars: 76383, protien: 78282, fats: 7383, saturates: 7383, fibre: 7383, sodium: 8292, units: "100g" },
    { id: 2, name: "FI2", carbs: 4839, sugars: 233, protien: 82, fats: 73, saturates: 83, fibre: 283, sodium: 82, units: "100g" } 
  ];

  getFoodItems(): FoodItem[] {

    return this.foodItems;
  }
}
