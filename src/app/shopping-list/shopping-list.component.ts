import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingerdient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridents: Ingrident[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridents = this.slService.getIngredients();
    this.slService.ingridentsChanged.subscribe((ingridents: Ingrident[]) => {
      this.ingridents = ingridents;
    });
  }
}
