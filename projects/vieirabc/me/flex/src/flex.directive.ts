import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[flex]'
})
export class FlexDirective implements OnInit {

  @Input() flex?: '' |
    'column' |
    'column/centred' |
    'column/auto' |
    'column/centred/auto' |
    'centred' |
    'centred/auto' |
    'auto';

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'me-flex');
  }

  ngOnInit(): void {
    if (this.flex)
      this.renderer.addClass(this.element.nativeElement, this.flex );
  }
}
