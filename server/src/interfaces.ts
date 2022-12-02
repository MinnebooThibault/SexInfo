import Player from "./Player";

export interface IQuestion {
    id: number;
    label: string;
    niveauDifficulte: number;
    reponse1: string;
    reponse2: string;
    reponse3: string;
    reponse4: string;
    explication: string;
};

export interface IHistorique {
    id: number;
    date: string;
    position: number;
};

export interface IObjet {
    id: number;
    type: number;
    label: string;
    description: string;
    prix: number;
};

export interface ISkin {
    id: number;
    label: string;
};

export interface IAchievement {
    id: number;
    label: string;
    description: string;
};

export interface IPlayer {
    id: number;
    xp: number;
    pieces: number;
    skinCourant: ISkin;
    skinsPossedes: ISkin[];
    objetsPossedes: IObjet[];
    achievement: IAchievement[];
};

export enum GameState {
    INIT,
    ASKING,
    AWNSERING,
    AWNSER,
    CLOSE
}

export interface GameStateInit {}

export interface GameStateAsking {
    question: IQuestion;
}

export interface GameStateAwnsering {
    question: IQuestion;
}

export interface GameStateAwnser {
    question: IQuestion;
    result: boolean;
    players: Player[];
}

export interface GameStateClose {
    players: Player[];
}

export interface ServerToClientEvents {
    gameStateChangeToInit: (
        GameStateData: GameStateInit
    ) => void;
    gameStateChangeToAsking: (
        GameStateData: GameStateAsking
    ) => void;
    gameStateChangeToAwnsering: (
        GameStateData: GameStateAwnsering
    ) => void;
    gameStateChangeToAwnser: (
        GameStateData: GameStateAwnser
    ) => void;
    gameStateChangeToClose: (
        GameStateData: GameStateClose
    ) => void;

    timer: (timer: number) => void;
}

export interface ClientToServerEvents {
    getGameState: (
        callback: (
          gameState: GameState,
          gameStateData:
            | GameStateInit
            | GameStateAsking
            | GameStateAwnsering
            | GameStateAwnser
            | GameStateClose
        ) => void
    ) => void;

    answerQuestion: (
        answersId: number,
        callback: (error: false | string) => void
    ) => void;
}

export interface InterServerEvents {}

export interface SocketData {}
