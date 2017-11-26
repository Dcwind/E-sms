const express = require('express'),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
      Nexmo = require('nexmo'),
      socketio = require('socket.io');

// init app
const app = express();

// set template engine
app.set('view engine','html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/public'));

// use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
