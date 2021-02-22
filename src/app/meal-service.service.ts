import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FoodItem } from './fooditem';


@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  private mealloggerUrl = 'api/meallogger';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<FoodItem[]> {
    let fooditemsUrl = this.mealloggerUrl + "/fooditems";

    return this.http.get<FoodItem[]>(fooditemsUrl).pipe(
      catchError(this.handleError<FoodItem[]>(`get food items`)));
  }

  getFoodItem(id: number): Observable<FoodItem>  {
    let fooditemsUrl = this.mealloggerUrl + "/fooditems/" + id;

    return this.http.get<FoodItem>(fooditemsUrl).pipe(
      catchError(this.handleError<FoodItem>(`get food items`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  put(foodItem: FoodItem): Observable<FoodItem>  {
    console.log("putting food item " + foodItem.id);
    let fooditemsUrl = this.mealloggerUrl + "/fooditems";
    return this.http.put<FoodItem>(fooditemsUrl, foodItem, this.httpOptions).pipe(catchError(this.handleError<FoodItem>(`put food items`)));
  }

  post(foodItem: FoodItem): Observable<FoodItem[]> {
    let fooditemsUrl = this.mealloggerUrl + "/fooditems";
    var foodItems: FoodItem[];
    foodItems = [ foodItem ];
    return this.http.post<FoodItem[]>(fooditemsUrl, foodItems, this.httpOptions).pipe(catchError(this.handleError<FoodItem[]>(`put food items`)));
  }

}

