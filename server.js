'use strict';

//require('colors');

var express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  serveStatic = require('serve-static'),
  api = require('./routes/api');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3001);
app.use(serveStatic(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('index');
});

// JSON API
app.get('/api/person', api.listAll);
app.get('/api/person/:id', api.get);
app.get('/api/person/name/:name', api.filterByName);
app.get('/api/person/skill/:skill', api.filterBySkill);
app.get('/api/person/weapon/:weapon', api.filterByWeapon);
app.post('/api/person', api.create);
app.put('/api/person/:id', api.update);
app.delete('/api/person/:id', api.delete);


server.listen(app.get('port'), function () {
  console.log('✔︎︎ Express server listening on http://localhost:%d/'.green, app.get('port'));
});
