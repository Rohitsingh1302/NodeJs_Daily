var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.write("<h1>HAPPY DIWALI❤️</h1>");
    res.end();
}).listen(3001);
// Output:  
// HAPPY DIWALI❤️
// To test, run the server and navigate to http://localhost:3001 in your web browser.
// The browser will display "HAPPY DIWALI❤️" as an H1 heading.
// Note: Make sure to stop any other server running on port 3001 before testing this code.
// --- IGNORE ---
