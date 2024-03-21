// Create web server
// To run this server, you need to install express and body-parser modules
// npm install express body-parser
// To run the server, type node comments.js
// This server is running at http://localhost:3000
// You can test it with postman or a web browser

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var comments = [];