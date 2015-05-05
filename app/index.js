(function ()
{
  'use strict';
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  var mongoose = require('mongoose');
  var configDB = require('./config/database.config');
  app.use(express.static(__dirname + '/'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  mongoose.connect(configDB.url, function (error)
  {
    if (error) {
      console.log(error);
    }
  });
  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', function ()
  {
    mongoose.connection.close(function ()
    {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

  require('./REST/routes.js')(app);
  app.listen(process.env.PORT || 3000);
  module.exports = app;
})();
