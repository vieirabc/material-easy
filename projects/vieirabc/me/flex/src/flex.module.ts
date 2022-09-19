import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexComponent } from './flex.component';
import { FlexDirective } from './flex.directive';

const ALL = [
  FlexComponent,
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
