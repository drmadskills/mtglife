import { Component } from '@angular/core';
import { Player } from './player/player';
import { PlayerControlComponent } from './player-control/player-control.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="player-control-container"
         [class.rotate]="player.id < players.length / 2" 
         *ngFor="let player of players">
        
        <player-control [player]="player"></player-control>
    </div>`,
})
export class AppComponent  {
    
    players: Player[] = [
        { id: 0, life: 40, theme: 'dragons', commanderDamage: [0, 0, 0] },
        { id: 1, life: 40, theme: 'wizards', commanderDamage: [0, 0, 0] },
        { id: 2, life: 40, theme: 'cats', commanderDamage: [0, 0, 0] },
        { id: 3, life: 40, theme: 'vampires', commanderDamage: [0, 0, 0] }
    ]
}
