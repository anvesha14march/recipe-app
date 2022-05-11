import { Ingrident } from '../shared/ingerdient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingridentsChanged = new EventEmitter<Ingrident[]>();
  private  ingridents:Ingrident[] = [
  new Ingrident('apples',5),
  new Ingrident('tomatoes',10)
    ];
    
    getIngredients()
    {
        return this.ingridents.slice();

    }

    addIngrident(ingrident: Ingrident) {
        this.ingridents.push(ingrident);
        this.ingridentsChanged.emit(this.ingridents.slice());
    }

    addIngridents(ingerdients:Ingrident[]) {
        // for (let ingerdient of ingerdients)
        // {
        //     this.addIngrident(ingerdient);
        //     }
        this.ingridents.push(...ingerdients);
        this.ingridentsChanged.emit(this.ingridents.slice());
    }
}