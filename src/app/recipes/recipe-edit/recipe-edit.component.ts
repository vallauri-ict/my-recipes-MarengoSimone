import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(public recipeService:RecipesService, private activatedRouter:ActivatedRoute) { }
  
  recipeName:string="";
  recipeDescription:string="";
  recipeImagePath:string="";
  recipeIngredients:string="";
  buttonText:string="";

  editMode:string=""; // serve per il salvataggio


  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (params:Params) => {
        if(params['id']){
          // edit mode
          if(this.recipeService.selectedRecipe){
            this.recipeName = this.recipeService.selectedRecipe.name;
            this.recipeDescription = this.recipeService.selectedRecipe.description;
            this.recipeIngredients = "";
            for(let ingredient of this.recipeService.selectedRecipe.ingredients){
              this.recipeIngredients += ingredient.name + ":" + ingredient.amount + "\n";
            }
          }
        }
        else{
          // add mode
        }
      }
    )
  }

}
