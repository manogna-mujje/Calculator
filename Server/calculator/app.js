const express = require('express');
var bodyParser = require('body-parser')
var http = require('http');
var path = require('path');
var index = require('./routes/index')
var app = express();

app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, '.../Client/calculator/src'));
//app.engine('jsx', require('express-react-views').createEngine);


app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(index);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server is up and running at port ' + app.get('port'));
});
