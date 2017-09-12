import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h2>Dashboard</h2>
        <input type="number" placeholder="Number of Players" [(ngModel)]="playerCount" (change)="playerCountChanged($event)" />
        <a routerLink="/game">Start Game</a>

        <div *ngFor="let playerConfig of playerList">
            <select [(ngModel)]="selectedTheme">
                <option *ngFor="let theme of themes" [value]="theme.name">{{ theme.label }}</option>
            </select>
        <div>
    `
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