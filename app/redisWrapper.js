'use strict';

var redis = require('then-redis');

module.exports = function (connectionUrl)
{
    return redis.createClient(connectionUrl);
};
