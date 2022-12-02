import { IAchievement, IObjet, IPlayer, ISkin } from './interfaces';

export default class Player implements IPlayer {
    static readonly INITIAL_HEARTS = 3;

    id: number;
    xp: number;
    pieces: number;
    skinCourant: ISkin;
    skinsPossedes: ISkin[];
    objetsPossedes: IObjet[];
    achievement: IAchievement[];
    hearts: number;

    constructor(player: IPlayer) {
        this.id = player.id;
        this.xp = player.xp;
        this.pieces = player.pieces;
        this.skinCourant = player.skinCourant;
        this.skinsPossedes = player.skinsPossedes;
        this.objetsPossedes = player.objetsPossedes;
        this.achievement = player.achievement;
        this.hearts = Player.INITIAL_HEARTS;
    }

    public isAlive(): boolean {
        return this.hearts > 0;
    }
}