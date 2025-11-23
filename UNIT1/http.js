var http=require("http");
http.createServer(function(req,res){
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(3000);
// Output:
// When you run this code, it creates an HTTP server that listens on port 3000.
// You can access it by navigating to http://localhost:3000 in your web browser,
// and you will see "Hello World" displayed on the page.