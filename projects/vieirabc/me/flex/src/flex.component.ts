import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'me-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    renderer.addClass( element.nativeElement, 'me-flex' );
  }

  ngOnInit(): void {
  }
}
