'use strict';

var chai = require('chai');
var expect = chai.expect;
var wrapper = require('../../app/redisWrapper');
var config = require('../../config');
var thenRedis = require('then-redis');
var Promise = require('bluebird');
var sinon = require('sinon');

chai.use(require('sinon-chai'));

describe('Redis Wrapper', function ()
{

    it('should not log ERR invalid DB index', function ()
    {
        sinon.spy(thenRedis.Client.prototype, 'select');
        wrapper(config.redis.connectionUrl);
        return Promise.delay(500).then(function ()
        {
            expect(thenRedis.Client.prototype.select).to.callCount(0);
        });
    });
    it('should be able to store and retrieve data from thenRedis', function ()
    {
        var client = wrapper(config.redis.connectionUrl);
        var now = new Date().getTime().toString();
        return client.set('abc', now).then(function ()
        {
            client = thenRedis.createClient({host: config.redis.host, port: config.redis.port});
            return client.get('abc');
        }).then(function (result)
        {
            expect(result).to.eql(now);
        });
    });
});
