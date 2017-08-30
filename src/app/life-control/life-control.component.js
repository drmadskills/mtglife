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
var LifeControlComponent = (function () {
    function LifeControlComponent() {
    }
    LifeControlComponent.prototype.lifeDown = function (player) {
        player.life -= 1;
    };
    LifeControlComponent.prototype.lifeUp = function (player) {
        player.life += 1;
    };
    return LifeControlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", player_1.Player)
], LifeControlComponent.prototype, "player", void 0);
LifeControlComponent = __decorate([
    core_1.Component({
        selector: 'life-control',
        template: "\n    <div class=\"life-control-container\" *ngIf=\"player\">\n        <div class=\"life-control\" (click)=\"lifeDown(player)\">&lt;</div>\n        <div>\n            <h2>{{ player.name }}</h2>\n            <h1>{{ player.life }}</h1>\n        </div>\n        <div class=\"life-control\" (click)=\"lifeUp(player)\">&gt;</div>\n    </div>",
    })
], LifeControlComponent);
exports.LifeControlComponent = LifeControlComponent;
//# sourceMappingURL=life-control.component.js.map