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
//show dbs
//use youtube
//show collections
//db.videos.find().pretty()
//to insert data
//db.videos.insertMany([{name:"video1",views:1000,likes:200},{name:"video2",views:2000,likes:500}])
//db.videos.find().pretty() 