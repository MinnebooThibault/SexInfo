import Database from "./Database";
import { IQuestion, GameState, IPlayer } from "./interfaces";
import Player from "./Player";

export default class Game {
    static readonly NB_PLAYER_MAX = 100;
    
    private players: Player[];
    private questions: IQuestion[];
    private currentRound: number;
    private state: GameState;

    constructor(questions: IQuestion[]) {
        this.players = [];
        this.questions = this.questions.sort((a, b) => 0.5 - Math.random());
        this.currentRound = 0;
        this.state = GameState.INIT;
    }

    public addPlayer(player: IPlayer): boolean {
        if (this.state != GameState.INIT) return false;

        let newPlayer = new Player(player);

        this.players.push(newPlayer);

        return true;

    }
}