'use strict';

var _ = require('underscore');
var PERSONS = require('./data/persons').persons;


exports.listAll = function (req, res) {
  console.log('List all persons');
  return res.status(200).json(PERSONS);
};


exports.filterByName = function (req, res) {
  var name = getParam(req, 'name');
  console.log('List by name : name=' + name);

  var persons = _.union(
    _.where(PERSONS, {lastname: name}),
    _.where(PERSONS, {firstname: name})
  );

  return res.status(200).json(persons);
};

exports.filterBySkill = function (req, res) {
  var skill = getParam(req, 'skill');
  console.log('List by skill : skill=' + skill);

  var persons = _.filter(PERSONS, function (person) {
    return _.contains(person.skills, skill);
  });

  return res.status(200).json(persons);
};


exports.filterByWeapon = function (req, res) {
  var weapon = getParam(req, 'weapon');
  console.log('List by weapon : weapon=' + weapon);

  var persons = _.where(PERSONS, {weapon: weapon});

  return res.status(200).json(persons);
};


exports.get = function (req, res) {
  var id = getId(req);
  console.log('Get person : id=' + id);

  var person = _.findWhere(PERSONS, {id: id});

  if (!person) {
    return res.status(404).json({error: 'La personne avec l\'id "' + id + '" n\'existe pas.'});
  }

  return res.status(200).json(person);
};


exports.create = function (req, res) {
  var person = req.body;
  var lastname = person.lastname;
  var firstname = person.firstname;
  console.log('Create person : lastname=' + lastname + ', firstname=' + firstname);

  var found = _.findWhere(PERSONS, {lastname: lastname, firstname: firstname});
  if (found) {
    return res.status(409).json({error: 'La personne "' + lastname + ' ' + firstname + '" existe déjà.'});
  }

  console.log(found);

  delete person.id;
  person.id = createId();
  PERSONS.push(person);
  return res.status(200).json(person);
};


exports.update = function (req, res) {
  var id = getId(req);
  console.log('Update person : id=' + id);

  var person = req.body;

  var index = _.findIndex(PERSONS, function (p) {
    return p.id === id;
  });

  if (index === -1) {
    return res.status(404).json({error: 'La personne avec l\'id "' + id + '" n\'existe pas.'});
  }

  PERSONS.splice(index, 1);
  PERSONS.push(person);

  return res.status(200).json(person);
};


exports.delete = function (req, res) {
  var id = getId(req);
  console.log('Delete person : id=' + id);

  var index = _.findIndex(PERSONS, function (p) {
    return p.id === id;
  });

  if (index === -1) {
    return res.status(404).json({error: 'La personne avec l\'id "' + id + '" n\'existe pas.'});
  }

  PERSONS.splice(index, 1);

  return res.status(200).json(PERSONS);
};


function getParam(req, param) {
  return req.params[param];
}

function getId(req) {
  var param = getParam(req, 'id');
  return parseInt(param);
}

function createId() {
  return new Date().getTime();
}
