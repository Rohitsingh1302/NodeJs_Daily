// app.js
const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
// Use cookie-session middleware
app.use(
  cookieSession({
    name: 'session',
    keys: ['secret1', 'secret2'], // used to sign the cookies
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.get('/', (req, res) => {
  // Initialize counter
  req.session.views = (req.session.views || 0) + 1; //on each visit, increment by 5 ,change krlo
  res.send(`You have visited this page ${req.session.views} times.`);
});
app.get('/logout', (req, res) => {
  req.session = null; // clear session
  res.send('Session cleared!');
});
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
// output way:
// 1. http://localhost:3000/ to visit and increment counter
// 2. http://localhost:3000/logout to clear the session
// 3. http://localhost:3000/ to verify counter is reset

