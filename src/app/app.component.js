"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Player = (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
var AppComponent = (function () {
    function AppComponent() {
        this.players = [
            { id: 0, name: 'Philip', life: 40 },
            { id: 1, name: 'Rick', life: 40 },
            { id: 2, name: 'Shayler', life: 40 },
            { id: 3, name: 'Reid', life: 40 }
        ];
    }
    AppComponent.prototype.lifeDown = function (player) {
        player.life -= 1;
    };
    AppComponent.prototype.lifeUp = function (player) {
        player.life += 1;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"player\" [class.rotate]=\"player.id < players.length / 2\" *ngFor=\"let player of players\">\n        <div class=\"life-control\" (click)=\"lifeDown(player)\">&lt;</div>\n        <div>\n            <h2>{{ player.name }}</h2>\n            <h1>{{ player.life }}</h1>\n        </div>\n        <div class=\"life-control\" (click)=\"lifeUp(player)\">&gt;</div>\n    </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map