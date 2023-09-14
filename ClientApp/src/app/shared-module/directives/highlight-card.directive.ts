import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {

  @Input() appHighlight: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.highlight();
  }

  @HostListener('mouseout') onMouseOut() {
    this.highlight(false);
  }

  private highlight(isHighlighted: boolean = true) {
    this.el.nativeElement.style.borderColor = isHighlighted? 'yellow' : '';
    this.el.nativeElement.style.borderWidth = isHighlighted? '5px' : '1px';
  }

}
