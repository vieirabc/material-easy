import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexDirective } from './flex.directive';

const ALL = [
  FlexDirective,
];

@NgModule({
  declarations: [ ALL ],
  imports: [
    CommonModule
  ],
  exports: [ ALL ]
})
export class FlexModule { }
