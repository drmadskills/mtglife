"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.players = [
            { id: 0, life: 40, theme: 'dragons', commanderDamage: [0, 0, 0] },
            { id: 1, life: 40, theme: 'wizards', commanderDamage: [0, 0, 0] },
            { id: 2, life: 40, theme: 'cats', commanderDamage: [0, 0, 0] },
            { id: 3, life: 40, theme: 'vampires', commanderDamage: [0, 0, 0] }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"player-control-container\"\n         [class.rotate]=\"player.id < players.length / 2\" \n         *ngFor=\"let player of players\">\n        \n        <player-control [player]=\"player\"></player-control>\n    </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map