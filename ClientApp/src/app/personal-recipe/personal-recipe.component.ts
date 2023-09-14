import {Component, OnDestroy, OnInit} from '@angular/core';
import {IRecipe} from "../shared-module/models/IRecipe";
import {UserService} from "../shared-module/services/user.service";
import {IUser} from "../shared-module/models/IUser";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-personal-recipe',
  templateUrl: './personal-recipe.component.html',
  styleUrls: ['./personal-recipe.component.scss']
})
export class PersonalRecipeComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  private currentUser: IUser;
  public recipes: IRecipe[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const recipe = this.userService.findUser(params.userId)?.recipe;
      if (recipe) {
        this.recipes = recipe;
      }
    });
  }

  public ngOnInit(): void {
    // this.userSubscription = this.userService.currentUser$.subscribe((user: IUser) => {
    //   this.currentUser = user;
    //   this.recipes = user.recipe;
    // });
  }

  public removeRecipeCallBack(recipe: IRecipe): void {

  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
