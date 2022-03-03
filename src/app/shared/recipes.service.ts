import { Injectable } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeModel } from 'src/app/models/recipe.models';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes : RecipeModel[] = [];
  selectedRecipe:RecipeModel;

  constructor(private dataStorageService:DataStorageService) { }

  getRecipes(){
    this.dataStorageService.getRequest("recipes")
    .subscribe(data=>{
      // console.log(data);
      this.recipes = data as RecipeModel[];
      // this.selectedRecipe = this.recipes[0];
    },
    error=> {
      console.error(error);
    })
  }

  getRecipe(index:any)
  {
    this.dataStorageService.getRequest("recipes/" + index)
    .subscribe(data=>{
      this.selectedRecipe = data as RecipeModel;
    },
    error=> {
      console.error(error);
    })
  }

  postRecipe(recipe:RecipeModel)
  {
    this.dataStorageService.sendPostRequest("recipes",recipe)
    .subscribe(data=>{
      alert("Recipe Saved!");
      this.getRecipes();
    },
    error=> {
      console.error(error);
    })
  }

  patchRecipe(recipeId:any,recipe:RecipeModel)
  {
    this.dataStorageService.sendPatchRequest("recipes/" + recipeId,recipe)
    .subscribe(data=>{
      alert("Recipe Modified!");
      this.getRecipes();
    },
    error=> {
      console.error(error);
    })
  }
}
