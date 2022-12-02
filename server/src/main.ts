import Database from './Database';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

(async () => {
    const PORT = 80;
    const app = express();

    app.use(cors({credentials: true, origin: true}));

    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

    app.get('/miaou', async(req, res) => {
        res.send("miaou");
    })

    app.get('/auth/discord',async(req,res)=>{
        const code=req.query.code as string;
        const params = new URLSearchParams();
        let user;
        params.append('client_id', process.env.DISCORD_CLIENT_ID as string);
        params.append('client_secret', process.env.DISCORD_CLIENT_SECRET as string);
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        params.append('redirect_uri', "http://localhost:8123/auth/discord");
        try{
            const response=await axios.post('https://discord.com/api/oauth2/token',params)
            const { access_token,token_type}=response.data;
            
        }catch(error){
            console.log('Error',error)
            return res.send('Some error occurred! ')
        }
    })


    

    await Database.connectDb();
    
    
})();