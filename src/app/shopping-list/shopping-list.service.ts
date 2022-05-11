import { Ingrident } from '../shared/ingerdient.model';

import { Subject } from 'rxjs';

export class ShoppingListService{
    ingridentsChanged = new Subject<Ingrident[]>();
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
}