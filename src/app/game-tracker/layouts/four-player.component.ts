import { Component, Input } from '@angular/core';
import { Player } from '../../player/player';
// import { PlayerControlComponent } from '../../player-control/player-control.component';

@Component({
  selector: 'four-player-layout',
  template: `
    <div *ngFor="let player of players"
         class="four-player-layout-player-container"
         [class.rotate180]="player.id < players.length / 2">
        
        <player-control [player]="player"></player-control>
    </div>
    `,
    styleUrls: ['./four-player.css']
})
export class FourPlayerLayoutComponent  {
    @Input() players: Player[];
}
