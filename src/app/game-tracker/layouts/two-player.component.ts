import { Component, Input } from '@angular/core';
import { Player } from '../../player/player';

@Component({
  selector: 'two-player-layout',
  template: `
    <div *ngFor="let player of players"
         class="player-control-container"
         [class.rotate180]="player.id < players.length / 2">
        
        <player-control [player]="player"></player-control>
    </div>
    `,
})
export class TwoPlayerLayoutComponent  {
    @Input() players: Player[];
}
