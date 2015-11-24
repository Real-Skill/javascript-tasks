'use strict';

var express = require('express');
var authenticator = require('./authenticator');
var db = require('./db');

module.exports = function createApp() {

    var app = express();

    return app;
};
