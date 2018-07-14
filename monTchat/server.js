var express = require('express');
var app = express();
var server = require('http').Server(app);
// Chargement de socket.io
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    });


// Quand un client se connecte, on le note dans la console
io.on('connection', function (socket) {
    console.log('Un client est connecté !');
});

server.listen(3000, function(){
    console.log('listening on : 3000');
});

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
