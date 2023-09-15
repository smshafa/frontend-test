import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SpinnerComponent} from "./spinner/spinner.component";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [SpinnerComponent]
})
export class CoreModule {
}
