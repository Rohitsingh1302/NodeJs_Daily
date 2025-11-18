var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.write("<h1>HAPPY DIWALI❤️</h1>");
    res.end();
}).listen(3001);
