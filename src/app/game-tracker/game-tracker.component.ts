import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player';
import { PlayerControlComponent } from '../player-control/player-control.component';
import { FourPlayerLayoutComponent } from './layouts/four-player.component';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-tracker',
  template: `
    <four-player-layout [players]="players">
    </four-player-layout>`,
    providers: [
        GameService
    ]
})
export class GameTrackerComponent implements OnInit  {

    players: Player[];

    constructor (private gameService: GameService) { }

    ngOnInit(): void {
        this.gameService.getPlayers().then(
            players => this.players = players
        );
    }
}
