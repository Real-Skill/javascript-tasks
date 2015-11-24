'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var progress = 0;

module.exports = function createApp()
{
    var app = express();

    app.use(bodyParser.json());

    app.get('/', function (req, res)
    {
        res.send(200, progress);
    });
    app.post('/', function (req, res)
    {
        progress = req.body.progress;
        res.sendStatus(200);
    });
    return app;
};
