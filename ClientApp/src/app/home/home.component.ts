import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRecipe} from "../shared-module/models/IRecipe";
import {IUser} from "../shared-module/models/IUser";
import {UserService} from "../shared-module/services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  public recipes: IRecipe[] = [];
  public users: IUser[] = [];
  public currentUser?: IUser;

  constructor(private http: HttpClient, private userService: UserService) {
    this.users = this.userService.users;
    this.userSubscription = userService.getCurrentUser().subscribe((user: IUser) => {
      this.currentUser = user;
    });
  }

  public ngOnInit(): void {
    this.http.get('assets/data/recipe.json').subscribe((data: any) => {
      this.recipes = data;
    });
    this.userService.setCurrentUser(this.userService.users[0]);
  }

  public onUserChanged(event: any): void {
    if (event && event.selectedOptions.length > 0) {
      // this.currentUser = this.users.find((u: IUser) => u.id == event.selectedOptions[0].value);
      const userFound = this.userService.findUser(event.selectedOptions[0].value);
      if (userFound) {
        this.userService.setCurrentUser(userFound);
      }
    }
  }

  public selectedRecipeCallBack(recipe: IRecipe): void {
    this.currentUser?.recipe.push(recipe);
    console.log(recipe);
  }

  public removeRecipeCallBack(recipe: IRecipe): void {
    const recipeIndex = this.currentUser?.recipe.findIndex((r: IRecipe) => r.name === recipe.name);
    if (recipeIndex && recipeIndex >= 0) {
      this.currentUser?.recipe.splice(recipeIndex, 1);
      console.log(recipe);
    }
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}


