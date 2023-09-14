import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRecipe} from "../shared-module/models/IRecipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe?: IRecipe;
  @Input() public canRemove: boolean;
  @Output() public selectedRecipeEvent = new EventEmitter<IRecipe>();
  @Output() public removeRecipeEvent = new EventEmitter<IRecipe>();
  constructor() {
  }

  public ngOnInit(): void {

  }

  public addToCart(): void {
    this.selectedRecipeEvent.emit(this.recipe);
  }

  public removeFromCart(): void {
    this.removeRecipeEvent.emit(this.recipe);
  }

}
