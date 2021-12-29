import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:RecipeModel

  constructor(public recipeService:RecipesService) { }

  ngOnInit(): void {}

  onSelected(){
    this.recipeService.selectedRecipe = this.recipe;
  }
}
