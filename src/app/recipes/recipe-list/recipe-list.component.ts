import { Component, OnInit} from '@angular/core';
import { RecipesService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService:RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }

}
