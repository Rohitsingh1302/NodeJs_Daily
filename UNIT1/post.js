//POST METHOD
const express = require('express');
const app=express();
const port =3000;

//Middleware to parse JSON data from POST requests
app.use(express.json());

//POST route example
app.post('/submit', (req, res) => {
    const {name, age} = req.body;
    res.send(`Hello ${name}, you are ${age} years old!`);
});

//Starting the server
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});
// Output way:
// 1. Start the server by running this file with Node.js.
// 2. Use a tool like Postman or curl to send a POST request to http://localhost:3000/submit
//    with a JSON body like: {"name": "John", "age": 30}
// 3. You will receive a response: "Hello John, you are 30 years old!"