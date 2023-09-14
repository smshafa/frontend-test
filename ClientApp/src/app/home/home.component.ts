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

  public ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}


