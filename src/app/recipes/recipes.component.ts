import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(public recipeService:RecipesService) { }

  ngOnInit(): void {}


}
