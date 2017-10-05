import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PlayerControlComponent }  from './player-control/player-control.component';
import { CommanderDamageComponent }  from './commander-damage/commander-damage.component';
import { PlayerCountersComponent }  from './player-counters/player-counters.component';
import { GameTrackerComponent } from './game-tracker/game-tracker.component';
import { FourPlayerLayoutComponent } from './game-tracker/layouts/four-player.component';
import { ThreePlayerLayoutComponent } from './game-tracker/layouts/three-player.component';
import { TwoPlayerLayoutComponent } from './game-tracker/layouts/two-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'game',
        component: GameTrackerComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]) 
  ],
  declarations: [
    AppComponent,
    PlayerControlComponent,
    CommanderDamageComponent,
    PlayerCountersComponent,
    GameTrackerComponent,
    FourPlayerLayoutComponent,
    ThreePlayerLayoutComponent,
    TwoPlayerLayoutComponent,
    DashboardComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
