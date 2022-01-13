import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.models';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: IngredientModel[] = [];

  constructor(private dataStorageService:DataStorageService) { }

  getIngredients(){
    this.dataStorageService.getRequest('shopping-list')
    .subscribe(data=>{
      this.ingredients = data as IngredientModel[];
    },
    error=> {
      console.error(error);
    })
  }

  addIngredient(ingredient:IngredientModel){
    let data =
      this.ingredients.find(
        (aus) => aus.name.toUpperCase() === ingredient.name.toUpperCase()
      ) ?? null;
    if (!data) {
      this.ingredients.push(ingredient);
      this.postIngredient(ingredient);
    } else {
      this.ingredients.map((aus) => {
        if (aus.name.toUpperCase() === ingredient.name.toUpperCase()) {
          aus.amount += ingredient.amount;

          this.patchIngredient({ amount: aus.amount }, aus._id);
        }
      });
    }
  }

  addIngredients(ingredients:IngredientModel[]){
    // this.ingredients.push(...ingredients);
    for (const ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }

  postIngredient(ingredient:IngredientModel){
    this.dataStorageService.sendPostRequest('shopping-list',ingredient)
    .subscribe(data=>{
      console.log(data);
      this.getIngredients();
    },
    error=> {
      console.error(error);
    });
  }

  patchIngredient(data:object,id:number){
    this.dataStorageService.sendPatchRequest('shopping-list/' + id,data)
    .subscribe(data=>{
      console.log(data);
    },
    error=> {
      console.error(error);
    });
  }
}
