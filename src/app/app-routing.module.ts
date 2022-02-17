import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes : Routes = [
  {
    path:'',
    redirectTo:'/recipes',
    pathMatch:'full' // solo se c'è '' e non su tutte le routes
  },
  {
    path:'recipes',
    component:RecipesComponent
  },
  {
    path:'shopping-list',
    component:ShoppingListComponent
  },
  {
    path:':id',
    component:RecipeDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}
