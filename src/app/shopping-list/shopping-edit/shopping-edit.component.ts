import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingrident } from 'src/app/shared/ingerdient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('nameInput') nameInputref:ElementRef;
@ViewChild('amountInput') amountInputref:ElementRef;
  constructor(private slservice:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem()
  {
    const ingName= this.nameInputref.nativeElement.value;
    const ingAmount =this.amountInputref.nativeElement.value;
    const newIngedient = new Ingrident(ingName, ingAmount);
    this.slservice.addIngrident(newIngedient);
  }
}
