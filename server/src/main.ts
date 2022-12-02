import Database from './Database';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

(async () => {
    const PORT = 80;
    const app = express();

    //app.use(cors({credentials: true, origin: true}));

    await Database.connectDb();
    
    
})();