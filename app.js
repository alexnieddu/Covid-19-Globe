var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
var path = require('path');

var port = 8000;

app.use(express.static("./"));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

var server = http.createServer( app).listen(port, function(){
  console.log("Express server listening on port " + port);
});