import {Component, Input, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
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

  public ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
}
