import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-me',
  template: `
    <p>
      me works!
    </p>
  `,
  styles: [
  ]
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
