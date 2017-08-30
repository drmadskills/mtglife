import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LifeControlComponent }  from './life-control/life-control.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LifeControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
