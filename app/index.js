(function ()
{
  'use strict';
  var express = require('express');
  var cors = require('cors');
  var mongoose = require('mongoose');
  var bodyParser = require('body-parser');
  var configDB = require('./config/database.config');
  var logger = require('morgan');
  var app = express();
  app.use(logger('dev'));
  app.use(express.static(__dirname + '/'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  app.use(cors());
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
