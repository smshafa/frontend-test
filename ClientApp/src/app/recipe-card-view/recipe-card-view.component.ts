import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {IRecipe} from "../shared-module/models/IRecipe";

@Component({
  selector: 'app-recipe-card-view',
  templateUrl: './recipe-card-view.component.html',
  styleUrls: ['./recipe-card-view.component.scss']
})
export class RecipeCardViewComponent implements OnInit, OnDestroy {
  private searchSubscription: Subscription | undefined;
  private tempRecipes: IRecipe[] = [];
  public formGroup: FormGroup = this.fb.group({});
  @Input() public recipes: IRecipe[] = [];
  @Input() public removableRecipes: boolean;
  @Output() public selectedRecipeEvent= new EventEmitter<IRecipe>();
  @Output() public removeRecipeEvent = new EventEmitter<IRecipe>();

  constructor(private fb: FormBuilder) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.recipes && changes.recipes.currentValue) {
      this.tempRecipes = [...changes.recipes.currentValue];
    }
  }

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
      searchExpression: [''],
    });

    this.searchSubscription = this.formGroup.get('searchExpression')?.valueChanges.subscribe(values => {
      if (values) {
        this.recipes = this.tempRecipes.filter((r) => r.name.toLowerCase().startsWith(values.toLowerCase()))
      } else {
        this.recipes = this.tempRecipes;
      }
    });
  }

  public selectedRecipeCallBack(recipe: IRecipe): void {
    this.selectedRecipeEvent.emit(recipe);
  }

  public removeRecipeCallBack(recipe: IRecipe): void {
    this.removeRecipeEvent.emit(recipe);
  }

  public ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
}
