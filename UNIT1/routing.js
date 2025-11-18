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