import { Component } from '@angular/core';

export class Player {
    id: number;
    name: string;
    life: number;
}

@Component({
  selector: 'my-app',
  template: `
    <div class="player" [class.rotate]="player.id < players.length / 2" *ngFor="let player of players">
        <div class="life-control" (click)="lifeDown(player)">&lt;</div>
        <div>
            <h2>{{ player.name }}</h2>
            <h1>{{ player.life }}</h1>
        </div>
        <div class="life-control" (click)="lifeUp(player)">&gt;</div>
    </div>`,
})
export class AppComponent  {
    
    players: Player[] = [
        { id: 0, name: 'Philip', life: 40 },
        { id: 1, name: 'Rick', life: 40 },
        { id: 2, name: 'Shayler', life: 40 },
        { id: 3, name: 'Reid', life: 40 }
    ]
    
    lifeDown(player: Player): void {
        player.life -= 1;
    }
    
    lifeUp(player: Player): void {
        player.life += 1;
    }
}
