(function ()
{
  'use strict';
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  app.use(express.static(__dirname + '/'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  require('./REST/routes.js')(app);
  app.listen(process.env.PORT || 3000);
  module.exports = app;
})();
