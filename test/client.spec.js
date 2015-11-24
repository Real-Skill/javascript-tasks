'use strict';

var Promise = require('bluebird');
var chai = require('chai');
var expect = chai.expect;
var client = require('../app/client');
var supertestFactory = require('supertest-as-promised');
Promise.longStackTraces();

describe('Client', function ()
{
    var server;
    var supertest;

    before(function ()
    {
        server = require('./app')().listen(9000);
        supertest = supertestFactory('http://localhost:9000');
    });

    after(function ()
    {
        if (server) {
            server.close();
        }
    });

    describe('isReady', function ()
    {
        describe('when initially progress is 0', function ()
        {
            it('should resolve to false', function ()
            {
                return client('http://localhost:9000').isReady().then(function (result)
                {
                    expect(result).to.equal(false);
                });
            });
        });
        describe('when progress is 100', function ()
        {
            before(function ()
            {
                return supertest.post('/').send({progress: 100}).expect(200);
            });
            it('should resolve to true', function ()
            {
                return client('http://localhost:9000').isReady().then(function (result)
                {
                    expect(result).to.equal(true);
                });
            });
        });
    });

});

