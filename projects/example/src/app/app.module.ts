import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MeModule } from '@vieirabc/me';
import { FlexModule } from '@vieirabc/me/flex';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexModule,
    BrowserModule,
    MeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
