'use strict';

//require('colors');

var express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  api = require('./routes/api');

var app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// JSON API
app.get('/api/peoples', api.listAll);
app.get('/api/person/:id', api.get);
app.get('/api/person/name/:name', api.filterByName);
app.get('/api/person/skill/:skill', api.filterBySkill);
app.post('/api/person', api.create);
app.put('/api/person/:id', api.update);
app.delete('/api/person/:id', api.delete);


app.listen(app.get('port'), function () {
  console.log('✔︎︎ Express server listening on http://localhost:%d/', app.get('port'));
});
