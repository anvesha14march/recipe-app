import { Recipe } from './recipe.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingerdient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
        new Recipe('Creamy Dill Cucumber Toasties', 'It looks great on the platter, and it is super easy!',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8507529.jpg&w=595&h=595&c=sc&poi=face&q=60', [
                new Ingrident('cucumber',1),new Ingrident('Cream cheese',1)
            ]
        ),
        new Recipe('Creamy Cheesy Spinach Dip', ' it\'s very cheesy and very delicious',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8911615.jpg&w=595&h=595&c=sc&poi=face&q=60',
            [new Ingrident('onion',1), new Ingrident('Frozen Spanich',2)]
        )
    ];
    constructor(private slService:ShoppingListService){}
    getRecipes()
    {
     return   this.recipes.slice();
    }

    getRecipe(index:number)
    {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingerdients:Ingrident[])
    {
        this.slService.addIngridents(ingerdients);
    }
}