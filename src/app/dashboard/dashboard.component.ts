import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h2>Dashboard</h2>
        <div class="padded-container">
            Players? 
            <button (click)="adjustPlayerCount(-1)" [disabled]="playerCount <= 2">-</button>
            {{ playerCount }}
            <button (click)="adjustPlayerCount(1)" [disabled]="playerCount >= 4">+</button>
        </div>

        <div class="padded-container" *ngFor="let playerConfig of playerList; index as i">
            Player {{ i+1 }} theme: 
            <select [(ngModel)]="selectedTheme">
                <option *ngFor="let theme of themes" [value]="theme.name">{{ theme.label }}</option>
            </select>
        </div>

        <div class="padded-container" [hidden]="playerCount < 2">
            <a routerLink="/game">Start Game</a>
        </div>
    `,
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
    playerCount: number = 2;
    playerList: number[] = [0, 0];
    selectedTheme: 'wizards';

    themes: any[] = [
        {
            name: 'wizards',
            label: 'Nakusar'
        },
        {
            name: 'vampires',
            label: 'Kaalia'
        },
        {
            name: 'dragons',
            label: 'Ur-Dragon'
        },
        {
            name: 'cats',
            label: 'Arabho'
        }
    ];

    adjustPlayerCount(amount: number): void {
        this.playerCount += amount;

        this.playerCountChanged();
    }

    playerCountChanged(): void {
        this.playerCount = this.playerCount || 0;
        this.playerList = new Array(this.playerCount);
    }
}