import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexComponent } from './flex.component';
import { FlexDirective } from './flex.directive';



@NgModule({
  declarations: [
    FlexDirective,
    FlexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexDirective,
    FlexComponent
  ]
})
export class FlexModule { }
