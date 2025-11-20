const http = require("http");

const server = http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type':'text/html'});

    if(req.url==='/' && req.method==='GET') {
        res.write('<h1>Home Page</h1>');
    }
    else if(req.url==='/about' && req.method==='GET') {
        res.write('<h1>About Page</h1>');
    }
    else if(req.url==='/contact' && req.method==='GET') {
        res.write('<h1>Contact Page</h1>');
    }
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write('<h1>404 Page Not Found</h1>')
    }

    res.end();

});

const PORT = 3000;
server.listen(PORT,()=> {
    console.log(`Server running at http://localhost:${PORT}`)
})
// To test the routing, start the server and navigate to the following URLs in your browser:
// http://localhost:3000/       -> Home Page
// http://localhost:3000/about  -> About Page

// http://localhost:3000/contact -> Contact Page
// http://localhost:3000/unknown -> 404 Page Not Found

// Output way:
// 1. Start the server: node routing.js
// 2. Open a web browser and visit the URLs mentioned above to see the respective pages.
// 3. Observe the output in the browser for each route.
// 4. Check the terminal for the server running message.
