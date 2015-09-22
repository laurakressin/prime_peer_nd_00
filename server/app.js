var http = require('http');
//var one = require("./module1");
//var two = require("./module2");
var three = require("./module3");

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write('hello world');
    //response.write(one());
    //response.write(two());
    response.write(three.calldollars);
    response.write(three.callstatement);
    response.end();
}).listen(3000);

console.log('Listening on port 3000');