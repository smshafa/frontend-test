import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCardDirective } from './directives/highlight-card.directive';
import {SpinnerComponent} from "./components/spinner/spinner.component";

@NgModule({
  declarations: [
    HighlightCardDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightCardDirective,
    SpinnerComponent
  ]
})
export class SharedModule { }
