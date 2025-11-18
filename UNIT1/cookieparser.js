// app.js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser('mysecret')); // optional secret for signed cookies

app.get('/', (req, res) => {
  // Set a cookie
  res.cookie('username', 'ROHIT SINGH', { maxAge: 60000 }); // expires in 1 min
  res.send('Cookie has been set!');
});
app.get('/read-cookie', (req, res) => {
  // Access cookies
  console.log(req.cookies);
  res.send(`Hello ${req.cookies.username}`);
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie cleared!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

// output way:
// 1. http://localhost:3000/ to set the cookie
// 2. http://localhost:3000/read-cookie to read the cookie
// 3. http://localhost:3000/clear-cookie to clear the cookie

