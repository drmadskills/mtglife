import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PlayerControlComponent }  from './player-control/player-control.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PlayerControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
