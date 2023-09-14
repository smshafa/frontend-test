import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from "../models/IRecipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe?: IRecipe;
  @Input() public canRemove: boolean;
  constructor() {
  }

  public ngOnInit(): void {

  }

}
