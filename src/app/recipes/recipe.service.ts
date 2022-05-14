import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingerdient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Creamy Dill Cucumber Toasties',
  //     'It looks great on the platter, and it is super easy!',
  //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8507529.jpg&w=595&h=595&c=sc&poi=face&q=60',
  //     [new Ingrident('cucumber', 1), new Ingrident('Cream cheese', 1)]
  //   ),
  //   new Recipe(
  //     'Creamy Cheesy Spinach Dip',
  //     " it's very cheesy and very delicious",
  //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8911615.jpg&w=595&h=595&c=sc&poi=face&q=60',
  //     [new Ingrident('onion', 1), new Ingrident('Frozen Spanich', 2)]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingerdients: Ingrident[]) {
    this.slService.addIngridents(ingerdients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
