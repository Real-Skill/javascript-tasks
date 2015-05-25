(function ()
{
  'use strict';
  var mongoose = require('mongoose');
  var configDB = require('./config/database.config');
  var DAO = require('./DAO/phoneDAO');

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

  module.exports = DAO;
})();
