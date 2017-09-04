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

    checkLoseCondition(): void {
        if (this.isLoseCondition()) {
            this.theme = "dead";
        }
    }

    isLoseCondition(): boolean {
        if (this.life <= 0) {
            return true;
        }
        else {
            for (let cmdr of this.commanderDamage) {
                if (cmdr >= 21) {
                    return true;
                }
            }
        }

        return false;
    }
}