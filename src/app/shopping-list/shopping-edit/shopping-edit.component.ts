import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrident } from 'src/app/shared/ingerdient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingrident;
  constructor(private slservice:ShoppingListService) { }
  
  ngOnInit(): void {
    this.subscription = this.slservice.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slservice.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
         })
    }
  );
  }
  onSubmit(form:NgForm)
  {
    const value = form.value;
    const newIngedient = new Ingrident(value.name, value.amount);
    if (this.editMode) {
      this.slservice.updateIngredient(this.editedItemIndex, newIngedient);
    }
    else {
      this.slservice.addIngrident(newIngedient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slservice.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
