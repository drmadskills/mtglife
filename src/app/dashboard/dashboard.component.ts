import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h2>Dashboard</h2>
        <div class="padded-container">
            <input type="number" placeholder="Number of Players" [(ngModel)]="playerCount" (change)="playerCountChanged($event)" />
        </div>

        <div class="padded-container" *ngFor="let playerConfig of playerList">
            <select [(ngModel)]="selectedTheme">
                <option *ngFor="let theme of themes" [value]="theme.name">{{ theme.label }}</option>
            </select>
        </div>

        <a [hidden]="playerCount <= 0" routerLink="/game">Start Game</a>
    `,
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
    playerCount: number = 0;
    playerList: number[];
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

    playerCountChanged(event: any): void {
        this.playerCount = this.playerCount || 0;
        this.playerList = new Array(this.playerCount);
    }
}