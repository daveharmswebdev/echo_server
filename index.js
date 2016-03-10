var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req,res) {
	res.json({
		name: 'Kim Gordon',
		instrument: 'Bass'
	});
});

app.get('/headers', function(req,res) {
	res.json(req.headers);
});

app.get('/headers/:header_name', function(req,res) {
	res.json(req.headers[req.params.header_name]);
	console.log(req.headers[req.params.header_name]);
});

app.get('/version', function(req,res) {
	res.json(req.httpVersion);
});

app.listen(8080);