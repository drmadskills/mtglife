import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PlayerControlComponent }  from './player-control/player-control.component';
import { CommanderDamageComponent }  from './commander-damage/commander-damage.component';
import { GameTrackerComponent } from './game-tracker/game-tracker.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  PlayerControlComponent, 
                  CommanderDamageComponent, 
                  GameTrackerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
