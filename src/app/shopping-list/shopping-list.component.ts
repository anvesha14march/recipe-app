import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrident } from '../shared/ingerdient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy {
  ingridents: Ingrident[];
  private igChangeSub: Subscription;
  constructor(private slService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.ingridents = this.slService.getIngredients();
   this.igChangeSub= this.slService.ingridentsChanged.subscribe((ingridents: Ingrident[]) => {
      this.ingridents = ingridents;
   });
    
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
