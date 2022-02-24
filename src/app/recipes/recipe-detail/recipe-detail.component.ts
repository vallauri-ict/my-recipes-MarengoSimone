import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    public recipeService:RecipesService, 
    private shoppingList:ShoppingListService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
          //console.log(params);
          let recipeId = params['id'];
          this.recipeService.getRecipe(recipeId);
      }
    )
  }

  sendToShoppingList()
  {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

  onEditRecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
  }

}
