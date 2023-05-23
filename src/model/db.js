const {MongoClient, objectId} = require("mongodb"); 

let singleton;

 async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    sigleton = client.db(process.env.DB_DATABASE);
    return singleton;
 }
 
async function findAll(collection) {
    const db = await connect();
    return db.collection(collection).findAll().toArray();
}

module.exports = {findAll}