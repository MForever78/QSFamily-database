/**
 * Created by MForever78 on 15/4/27.
 */

var models = require('node-require-directory')(__dirname);
var config = require('config');

var db = {};

Object.keys(models).forEach(function(key) {
  if (key === 'index') return;
  var modelName = capitaliseFirstLetter(key);
  db[modelName] = models[key];
});

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = db;
