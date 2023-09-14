import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCardDirective } from './directives/highlight-card.directive';

@NgModule({
  declarations: [
    HighlightCardDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightCardDirective
  ]
})
export class SharedModuleModule { }
