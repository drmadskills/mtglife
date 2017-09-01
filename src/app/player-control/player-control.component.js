"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var player_1 = require("../player/player");
var PlayerControlComponent = (function () {
    function PlayerControlComponent() {
    }
    PlayerControlComponent.prototype.lifeDown = function (player) {
        player.life -= 1;
    };
    PlayerControlComponent.prototype.lifeUp = function (player) {
        player.life += 1;
    };
    PlayerControlComponent.prototype.commanderDamageUp = function (player, index) {
        player.commanderDamage[index] += 1;
    };
    PlayerControlComponent.prototype.commanderDamageDown = function (player, index) {
        player.commanderDamage[index] -= 1;
    };
    return PlayerControlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", player_1.Player)
], PlayerControlComponent.prototype, "player", void 0);
PlayerControlComponent = __decorate([
    core_1.Component({
        selector: 'player-control',
        template: "\n    <div class=\"player-control theme_{{ player.theme }}\"  \n         *ngIf=\"player\">\n        <div *ngIf=\"player.id == 1 || player.id == 2\" class=\"commander-damage-container\">\n            <div class=\"unselectable\" *ngFor=\"let damage of player.commanderDamage; index as i\">\n                 \n                <div class=\"up\" (click)=\"commanderDamageUp(player, i)\"></div>\n                <span>{{ damage }}</span>\n                <div class=\"down\" (click)=\"commanderDamageDown(player, i)\"></div>\n                \n            </div>\n        </div>\n        <div class=\"life-control-container\">\n            <div class=\"life-control up\" (click)=\"lifeUp(player)\"></div>\n            <h1 class=\"unselectable\">{{ player.life }}</h1>\n            <div class=\"life-control down\" (click)=\"lifeDown(player)\"></div>\n        </div>\n        <div *ngIf=\"player.id == 0 || player.id == 3\" class=\"commander-damage-container\">\n            <div class=\"unselectable\" *ngFor=\"let damage of player.commanderDamage; index as i\">\n                 \n                <div class=\"up\" (click)=\"commanderDamageUp(player, i)\"></div>\n                <span>{{ damage }}</span>\n                <div class=\"down\" (click)=\"commanderDamageDown(player, i)\"></div>\n                \n            </div>\n        </div>\n    </div>",
    })
], PlayerControlComponent);
exports.PlayerControlComponent = PlayerControlComponent;
//# sourceMappingURL=player-control.component.js.map