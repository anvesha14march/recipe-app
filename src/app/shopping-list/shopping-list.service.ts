import { Ingrident } from '../shared/ingerdient.model';

import { Subject } from 'rxjs';

export class ShoppingListService{
    ingridentsChanged = new Subject<Ingrident[]>();
    startedEditing = new Subject<number>();
  private  ingridents:Ingrident[] = [
  new Ingrident('apples',5),
  new Ingrident('tomatoes',10)
    ];
    
    getIngredients()
    {
        return this.ingridents.slice();

    }
 getIngredient(index:number)
    {
        return this.ingridents[index];

    }
    addIngrident(ingrident: Ingrident) {
        this.ingridents.push(ingrident);
        this.ingridentsChanged.next(this.ingridents.slice());
    }

    addIngridents(ingerdients:Ingrident[]) {
        // for (let ingerdient of ingerdients)
        // {
        //     this.addIngrident(ingerdient);
        //     }
        this.ingridents.push(...ingerdients);
        this.ingridentsChanged.next(this.ingridents.slice());
    }
    updateIngredient(index: number, newIngedient: Ingrident) {
        this.ingridents[index] = newIngedient;
        this.ingridentsChanged.next(this.ingridents.slice()); 
    }

    deleteIngredient(index:number)
    {
        this.ingridents.splice(index, 1);
        this.ingridentsChanged.next(this.ingridents.slice());
    }
}