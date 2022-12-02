import mysql from 'mysql2/promise';
import { IAchievement, IHistorique, IObjet, IQuestion, ISkin, IPlayer } from './interfaces';

export default class Database {
    private static connection: mysql.Connection;

    public static async connectDb(): Promise<void> {
        this.connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
    }

    public static async getAllQuestions() : Promise<IQuestion[]> {
        const [rows, fields] = await this.connection.execute(`SELECT * FROM question;`);

        return rows as IQuestion[];
    }

    public static async getHistoriquesByUserId(userId: number) : Promise<IHistorique[]> {
        const [rows, fields] = await this.connection.execute(`
            SELECT *
            FROM historique
            WHERE userId = ?;
        `, [userId]);

        return rows as IHistorique[];
    }

    public static async getObjetsByUserId(userId: number) : Promise<IObjet[]> {
        const [rows, fields] = await this.connection.execute(`
            SELECT o.id, o.type, o.label, o.description, o.prix
            FROM objet o
            INNER JOIN user_posseder_objet uo ON (o.id = uo.objetId)
            INNER JOIN user u ON (uo.userId = u.id)
            WHERE u.id = ?;
        `, [userId]);

        return rows as IObjet[];
    }

    public static async getSkinById(skinId: number): Promise<ISkin | null> {
        const [rows, fields] = await this.connection.execute(`
            SELECT *
            FROM skin
            WHERE id = ?;
        `, [skinId]);

        if(!Array.isArray(rows)) {
            return null;
        }

        return rows[0] as ISkin;
    }

    public static async getSkinsOwnedByUserId(userId: number) : Promise<ISkin[]> {
        const [rows, fields] = await this.connection.execute(`
            SELECT s.id, s.label
            FROM skin s
            INNER JOIN user_posseder_skin us ON (s.id = us.skinId)
            INNER JOIN user u ON (us.userId = u.id)
            WHERE u.id = ?;
        `, [userId]);

        return rows as ISkin[];
    }

    public static async getAchievementByUserId(userId: number) : Promise<IAchievement[]> {
        const [rows, fields] = await this.connection.execute(`
            SELECT a.id, a.label, a.description
            FROM achievement a
            INNER JOIN user_posseder_achievement ua ON (a.id = ua.achievementId)
            INNER JOIN user u ON (ua.userId = u.id)
            WHERE u.id = ?;
        `, [userId]);

        return rows as IAchievement[];
    }

    public static async getUserById(userId: number) : Promise<IPlayer | null> {
        const [rows, fields] = await this.connection.execute(`
            SELECT *
            FROM user
            WHERE id = ?;
        `, [userId]);

        if(!Array.isArray(rows)) {
            return null;
        }

        return {
            id: (rows[0] as IPlayer).id,
            xp: (rows[0] as IPlayer).xp,
            pieces: (rows[0] as IPlayer).pieces,
            skinCourant: await this.getSkinById(userId),
            skinsPossedes: await this.getSkinsOwnedByUserId(userId),
            objetsPossedes: await this.getObjetsByUserId(userId),
            achievement: await this.getAchievementByUserId(userId)
        } as IPlayer;
    }
}