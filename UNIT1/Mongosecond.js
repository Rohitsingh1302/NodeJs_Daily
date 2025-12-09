const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function run(){
    try{
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db('LPU');
        const users = db.collection('CLASS');

        // //CREATE 
        // await users.insertOne({name: "John Deol", age: 22, course: "Computer Science"});

        //READ
        const allUsers = await users.find({}).toArray();
        console.log("All Users:", allUsers);

        //UPDATE
        await users.updateOne({name: "Booby Deol" }, {$set: {age: 23}});

        // //DELETE
        // await users.deleteOne({name: "John Doe"});


    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}
run();
