import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRecipe} from "../shared-module/models/IRecipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  public recipes: IRecipe[] = [];
  constructor(private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.http.get('assets/data/recipe.json').subscribe((data: any) => {
      this.recipes = data;
    });
  }

}


