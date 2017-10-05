import { Component, Input } from '@angular/core';
import { Player } from '../player/player';

@Component({
  selector: 'player-counters',
  template: `
    <div class="player-counters unselectable">

        <div class="energy-counter-container">
            <div class="up energy-icon" (click)="energyUp(player)"></div>
            <span class="counter-value">{{ player.energy }}</span>
            <div class="down" (click)="energyDown(player)"></div>
        </div>

        <div class="poison-counter-container">
            <div class="up" (click)="poisonCounterUp(player)"></div>
            <span class="counter-value poison-counter">{{ player.poison }}</span>
            <div class="down" (click)="poisonCounterDown(player)"></div>
        </div>

    </div>
    `,
    styleUrls: ['./player-counters.css']
})
export class PlayerCountersComponent  {
    @Input() player: Player;

    energyUp(player: Player): void {
        player.energy += 1;
    }

    energyDown(player: Player): void {
        player.energy -= 1;
    }

    poisonCounterUp(player: Player): void {
        player.poison += 1;
    }

    poisonCounterDown(player: Player): void {
        player.poison -= 1;
    }

}
