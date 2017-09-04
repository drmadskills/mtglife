import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h1>Dashboard</h1>
        <a routerLink="/game">Start Game</a>
    `
})
export class DashboardComponent {

}