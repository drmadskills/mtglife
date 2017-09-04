import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerControlComponent }  from './player-control.component';
import { CommanderDamageComponent }  from '../commander-damage/commander-damage.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PlayerControlComponent, CommanderDamageComponent ],
  bootstrap:    [ ]
})
export class PlayerControlModule { }
