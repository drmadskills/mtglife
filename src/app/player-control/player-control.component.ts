import { Component, Input } from '@angular/core';
import { Player } from '../player/player';
import { CommanderDamageComponent } from '../commander-damage/commander-damage.component';

@Component({
  selector: 'player-control',
  template: `
    <div class="player-control theme_{{ player.theme }}"  
         *ngIf="player">
        <div *ngIf="player.id == 1 || player.id == 2" class="commander-damage-container">
            <commander-damage [player]="player"></commander-damage>
        </div>
        <div class="life-control-container">
            <div class="life-control up" (click)="lifeUp(player)"></div>
            <h1 class="unselectable">{{ player.life }}</h1>
            <div class="life-control down" (click)="lifeDown(player)"></div>
        </div>
        <div *ngIf="player.id == 0 || player.id == 3" class="commander-damage-container">
            <commander-damage [player]="player"></commander-damage>
        </div>
    </div>`,
})
export class PlayerControlComponent  {
    @Input() player: Player;
    
    lifeDown(player: Player): void {
        player.life -= 1;
    }
    
    lifeUp(player: Player): void {
        player.life += 1;
    }
    
    commanderDamageUp(player: Player, index: number): void {
        player.commanderDamage[index] += 1;
    }
    
    commanderDamageDown(player: Player, index: number): void {
        player.commanderDamage[index] -= 1;
    }
}
