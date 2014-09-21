var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure body parser to parse data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds063439.mongolab.com:63439/dbtime');

// allow api access to localhost:8080
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); // allow localhost:8080 to connect
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // allow only these methods
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // allow only these headers
    next();
});

// register router
var router = require('./router')(express);
app.use('/', router);

app.listen(8081);
console.log('listening on port 8081');