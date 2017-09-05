import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h2>Dashboard</h2>
        <input type="text" placeholder="Number of Players" [(ngModel)]="playerCount" />

        <select [(ngModel)]="selectedTheme">
            <option *ngFor="let theme of themes" [value]="theme.name">{{ theme.label }}</option>
        </select>

        <a routerLink="/game">Start Game</a>
    `
})
export class DashboardComponent {
    playerCount: number;
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
    ]
}