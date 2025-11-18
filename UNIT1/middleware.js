const express = require('express');
const app = express();

// Middleware function for age filtering
const reqFilter = (req, res, next) => {
    // Check if the 'age' query parameter is present and valid
    if (!req.query.age) {
        res.send("Please provide the correct age in the query parameter (e.g., ?age=20)");
    } else if (req.query.age < 18) {
        res.send("You cannot access this page. Must be 18 or older.");
    } else {
        // If age is valid and >= 18, proceed to the next route handler
        next();
    }
};

// Apply the middleware globally to all routes below this line
app.use(reqFilter);

// Define routes
app.get("/home", (req, res) => {
    res.send("<h1>Welcome to home page</h1>");
});

app.get("/user", (req, res) => {
    res.send("<h1>Welcome to user page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Welcome to about page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Welcome to contact page</h1>");
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});


// output way:
// To test the middleware, you can make GET requests to the routes with the 'age' query parameter.
// Example: http://localhost:5000/home?age=20