const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'youtube';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('videos');
    let data = await collection.find({}).toArray();
    console.log(data);
}
getData();
//node UNIT1/Mongofirst.js
//npm install mongodb
//make sure mongodb server is running
//mongod
//mongo