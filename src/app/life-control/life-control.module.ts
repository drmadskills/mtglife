import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LifeControlComponent }  from './life-control.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ LifeControlComponent ],
  bootstrap:    [ LifeControlComponent ]
})
export class LifeControlModule { }
