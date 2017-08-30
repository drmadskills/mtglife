import { Component } from '@angular/core';
import { Player } from './player/player';
import { LifeControlComponent } from './life-control/life-control.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="player" 
        [class.rotate]="player.id < players.length / 2" 
        *ngFor="let player of players">
         
        <life-control [player]="player"></life-control>
    </div>`,
})
export class AppComponent  {
    
    players: Player[] = [
        { id: 0, name: 'Philip', life: 26 },
        { id: 1, name: 'Rick', life: 27 },
        { id: 2, name: 'Shayler', life: 28 },
        { id: 3, name: 'Reid', life: 29 }
    ]
}
