import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientModel } from 'src/app/models/ingredient.models';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(public recipeService:RecipesService, private activatedRouter:ActivatedRoute, private router:Router) { }
  
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
            if(this.recipeService.selectedRecipe.ingredients.length>0)
            {
              this.recipeIngredients = this.recipeIngredients.substring(0,this.recipeIngredients.length-1);
            }
          }
          this.editMode = "edit";
          this.buttonText = "Save Changes"
        }
        else{
          // add mode
          this.editMode = "add";
          this.buttonText = "Add New Recipe"
        }
      }
    )
  }

  onSave()
  {
    let ingredients = this.manageIngredients(this.recipeIngredients);
    let recipe:RecipeModel = new RecipeModel(this.recipeName,this.recipeDescription,this.recipeImagePath,ingredients);
    if(this.editMode == "add"){
      this.recipeService.postRecipe(recipe);
    }
    else{
      this.recipeService.patchRecipe(this.recipeService.selectedRecipe.id,recipe);
    }
    this.router.navigate(['/recipes']);
  }

  manageIngredients(ingredients:string)
  {
    let retVal = [];
    let items = ingredients.split('\n');
    for (const item of items) {
      let aus = item.split(":");
      let ingredient = new IngredientModel(aus[0],parseInt(aus[1]));
      retVal.push(ingredient);
    }
    return retVal;
  }

}
