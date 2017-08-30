import { Component, Input } from '@angular/core';
import { Player } from '../player/player';

@Component({
  selector: 'life-control',
  template: `
    <div class="life-control-container" *ngIf="player">
        <div class="life-control" (click)="lifeDown(player)">&#x276E;</div>
        <div>
            <h2>{{ player.name }}</h2>
            <h1>{{ player.life }}</h1>
        </div>
        <div class="life-control" (click)="lifeUp(player)">&#x276F;</div>
    </div>`,
})
export class LifeControlComponent  {
    @Input() player: Player
    
    lifeDown(player: Player): void {
        player.life -= 1;
    }
    
    lifeUp(player: Player): void {
        player.life += 1;
    }
}
