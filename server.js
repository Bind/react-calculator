var express = require('express');
var app = express();
var http = require('http').Server(app);

var gutil = require("gulp-util")

gutil.log = require('./bin/log');
var colors = require('colors')



var port = process.env.PORT || 8080;

var router  = express.Router();

router.get('/', function(req, res){
    res.json({message: 'Right Now.'})
});


/* ROUTES */

app.use('/', express.static(__dirname + '/dist'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html')
})
  
http.listen(port, function(){
    gutil.log('Magic happens on port', port.toString().magenta);
});





