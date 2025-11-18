const express = require('express');
const app = express();

app.use(express.json());

// Middleware for all methods on /user route
app.all('/user', (req, res, next) => {
  console.log('Accessing the /user route');
  next(); // pass control to next handler
}); // ye sabse pehle chalega regardless of method

app.get('/user', (req, res) => {
  res.send('GET request to /user');
});    //postman me get krke check krna h ye

app.post('/user', (req, res) => {
  res.send('POST request to /user');
}); //postman me post krke check krna h ye

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
// To test, you can use tools like Postman or curl to send GET and POST requests to http://localhost:3000/user
