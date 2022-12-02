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
    CLOSE
}