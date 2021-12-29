import { Component, OnInit} from '@angular/core';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(public recipeService:RecipesService) { }

  ngOnInit(): void {}

}
