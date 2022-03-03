import { Injectable } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeModel } from 'src/app/models/recipe.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes : RecipeModel[] = [];
  selectedRecipe:RecipeModel;

  constructor(private dataStorageService:DataStorageService, private router: Router) { }

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
      this.router.navigate(['/recipes/' + recipeId]);
    },
    error=> {
      console.error(error);
    })
  }

  deleteRecipe(recipeId:any)
  {
    this.dataStorageService.sendDeleteRequest("recipes/" + recipeId)
    .subscribe(data=>{
      alert("Recipe Deleted!");
      this.getRecipes();
      this.router.navigate(['/recipes']);
    },
    error=> {
      console.error(error);
    })
  }
}
