const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";

const dbname="e-store"
const collectionName = "mobiles";

const client = new MongoClient(url)


async function dbConnect(){
    let result = await client.connect();
    let database = result.db(dbname);
    return database.collection(collectionName);
}

module.exports  = dbConnect;