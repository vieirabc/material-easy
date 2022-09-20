import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexModule } from '@vieirabc/me/flex';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
