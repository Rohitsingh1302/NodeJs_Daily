const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;

// Configure session middleware
app.use(session({
  secret: 'mysecretkey', // change this to a strong secret key
  resave: false,          // don’t save session if unmodified
  saveUninitialized: true, // save new sessions
  cookie: { secure: false } // set true if using https
}));
// Route to set a session variable
app.get('/set-session', (req, res) => {
  req.session.username = 'ROHIT SINGH';
  res.send('Session data set!');
});
// Route to get session variable
app.get('/get-session', (req, res) => {
  if (req.session.username) {
    res.send(`Hello ${req.session.username}`);
  } else {
    res.send('No session found');
  }
});
// Route to destroy the session
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error destroying session');
    }
    res.send('Session destroyed!');
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Output way:
// 1. http://localhost:3000/set-session to set session data 
// 2. http://localhost:3000/get-session to retrieve session data
// 3. http://localhost:3000/logout to destroy the session
// 4. http://localhost:3000/get-session to verify session is destroyed

