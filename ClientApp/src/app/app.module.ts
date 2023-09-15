import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {PersonalRecipeComponent} from "./personal-recipe/personal-recipe.component";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeCardViewComponent} from "./recipe-card-view/recipe-card-view.component";
import {SharedModule} from "./shared-module/shared.module";
import {SpinnerInterceptor} from "./shared-module/interceptors/spinner.interceptor";
import {CoreModule} from "./core/core.module";

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'my-recipe/:userId', component: PersonalRecipeComponent},
    ]),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
