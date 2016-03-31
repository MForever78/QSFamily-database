var mongoose = require('mongoose');
var config = require('config');

/* Connect database */
mongoose.connect('mongodb://localhost/qsfamily', {
    user: config.get('db.username'),
    pass: config.get('db.password')
});

/* Acquire models */
var db = require('./models');

module.exports = db;
