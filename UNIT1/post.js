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

// To test the POST route, you can use a tool like Postman or curl to send a POST request to http://localhost:3000/submit with a JSON body.
//output way:= yeh  code ko run krke ..link jo aya jese http://localhost:3000/submit ko postman mai paste krke POST krdena hai,and body--raw mai jake 
// //{"name":"rohit","age":21} ,paste krdena hai|| output aayega:- hello rohit, you are 21 years old!