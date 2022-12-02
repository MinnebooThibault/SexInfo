import Database from './Database';

(async () => {
    await Database.connectDb();
    
    console.log(await Database.getUserById(1));
})();