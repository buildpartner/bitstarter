var express = require('express');

var app = express.createServer(express.logger());

// HW3.1
var fs = require('fs');
var index = fs.readFileSync('./index.html'); // read "index.html" from disk which should return buffer
buffer.write(index); // assign index to buffer 
var showIndex = buf.toString(); // read from buffer

// original web.js function define showIndex
app.get('/', function(request, response) {
  response.send(showIndex);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
