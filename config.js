'use strict';

var redisHost = process.env.REDIS_HOST || 'localhost';
var redisPort = process.env.REDIS_PORT || 6379;
module.exports = {
    redis: {
        host: redisHost,
        port: redisPort,
        connectionUrl: 'http://a:@' + redisHost + ':' + redisPort
    }
};
