'use strict';

var hapi = require('hapi');
var authenticator = require('./authenticator');
var db = require('./db');

module.exports = function createApp()
{
    var HapiServer = hapi.Server;
    var app = new HapiServer();
    app.connection({port: 9000, host: 'localhost'});

    return app;
};
