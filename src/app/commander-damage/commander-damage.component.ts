import { Component, Input } from '@angular/core';
import { Player } from '../player/player';

@Component({
  selector: 'commander-damage',
  template: `
    <div class="unselectable" *ngFor="let damage of player.commanderDamage; index as i">
                 
        <div class="up" (click)="commanderDamageUp(player, i)"></div>
        <span>{{ damage }}</span>
        <div class="down" (click)="commanderDamageDown(player, i)"></div>
        
    </div>
    `,
})
export class CommanderDamageComponent  {
    @Input() player: Player;
    
    commanderDamageUp(player: Player, index: number): void {
        player.commanderDamage[index] += 1;

        player.checkLoseCondition();
    }
    
    commanderDamageDown(player: Player, index: number): void {
        player.commanderDamage[index] -= 1;

        player.checkLoseCondition();
    }
}
