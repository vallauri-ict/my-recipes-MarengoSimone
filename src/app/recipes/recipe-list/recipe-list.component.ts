import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService:RecipesService, private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }

  onNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.activatedRoute});
  }

}
