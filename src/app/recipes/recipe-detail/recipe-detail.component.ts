import { Component, OnInit} from '@angular/core';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(public recipeService:RecipesService, private shoppingList:ShoppingListService) { }

  ngOnInit(): void {}

  sendToShoppingList()
  {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

}
