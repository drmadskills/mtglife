import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerControlComponent }  from './player-control.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PlayerControlComponent ],
  bootstrap:    [ PlayerControlComponent ]
})
export class PlayerControlModule { }
