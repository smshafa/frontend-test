import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PersonalRecipeComponent } from "./personal-recipe/personal-recipe.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import {RecipeCardViewComponent} from "./recipe-card-view/recipe-card-view.component";
import {SharedModuleModule} from "./shared-module/shared-module.module";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PersonalRecipeComponent,
    RecipeItemComponent,
    RecipeCardViewComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'my-recipe/:userId', component: PersonalRecipeComponent},
    ]),
    ReactiveFormsModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
