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

// Define port 
const port = 3000;

// server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', (req,res) => {
    res.render('index');    
});
// Index route

app.post('/', (req,res) => {
    res.send(req.body);
    console.log(req.body)
})

// Init Nexmo
 const nexmo = new Nexmo({
     apiKey: '',
     apiSecret: ''
 }, {debug: true});
