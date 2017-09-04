import { Component } from '@angular/core';
import { Player } from '../player/player';
import { PlayerControlComponent } from '../player-control/player-control.component';

@Component({
  selector: 'game-tracker',
  template: `
    <div class="player-control-container"
         [class.rotate180]="player.id < players.length / 2" 
         *ngFor="let player of players">
        
        <player-control [player]="player"></player-control>
    </div>`,
})
export class GameTrackerComponent  {
    
    players: Player[] = [
        new Player(0, 40, 'dragons', [0, 0, 0]),
        new Player(1, 40, 'wizards', [0, 0, 0]),
        new Player(2, 40, 'cats', [0, 0, 0]),
        new Player(3, 40, 'vampires', [0, 0, 0])
    ];
}
