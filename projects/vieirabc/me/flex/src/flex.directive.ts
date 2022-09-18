import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[meFlex]'
})
export class FlexDirective {

  @Input() meFlex: undefined | 'column' | 'column/centred' | 'column/centred/auto' | 'centred' | 'centred/auto' | 'auto';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.init();
  }

  style(newStyle: string) {
    const aux = newStyle.split(':');
    this.renderer.setStyle(this.elementRef.nativeElement, aux[0], [1]);
  }

  column() { this.style('flex-direction:column'); }
  centred() {
    this.style('align-items:center');
    this.style('justify-content:center');
  }
  auto() { this.style('flex:1 1 auto'); }

  init() {
    switch(this.meFlex) {
      case 'column': return this.column();
      case 'column/centred': return () => {
        this.column();
        this.centred()
      }
      case 'column/centred/auto': return () => {
        this.column();
        this.centred();
        this.auto();
      };
      case 'centred': return this.centred();
      case 'centred/auto': return () => {
        this.centred();
        this.auto();
      };
      case 'auto': return this.auto();
    }
  }

}
