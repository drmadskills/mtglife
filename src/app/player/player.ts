export class Player {
    id: number;
    life: number;
    theme: string;
    commanderDamage: number[];
    poison: number;
    energy: number;

    constructor (id: number, life: number, theme: string, commanderDamage: number[], poison = 0, energy = 0) {
        this.id = id;
        this.life = life;
        this.theme = theme;
        this.commanderDamage = commanderDamage;
        this.poison = poison;
        this.energy = energy;
    }
}