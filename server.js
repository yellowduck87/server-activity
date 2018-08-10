const http = require("http");

const PORT = 7000;
const PORT2 = 7500;

function handleRequest7000(req, res){
    res.end("You are amazing!", req.url)
};

function handleRequest7500(req, res){
    res.end("Your feet smell...", req.url)
};

var server7000 = http.createServer(handleRequest7000);

var server7500 = http.createServer(handleRequest7500);



server7000.listen(PORT, function(){
    console.log("Server listening on http://localhost:", PORT);
})

server7500.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:", PORT2)
})