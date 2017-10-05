import { Injectable } from '@angular/core';
import { Player } from '../player/player';

@Injectable()
export class GameService {

    players: Player[];

    getPlayers(): Promise<Player[]> {
        let players: Player[] = [
            new Player(0, 40, 'dragons', [0, 0, 0]),
            new Player(1, 40, 'wizards', [0, 0, 0]),
            new Player(2, 40, 'cats', [0, 0, 0]),
            new Player(3, 40, 'scarab_god', [0, 0, 0])
        ];

        return Promise.resolve(players);
    }

    setPlayers(players: Player[]): void {
        this.players = players;
    }

}