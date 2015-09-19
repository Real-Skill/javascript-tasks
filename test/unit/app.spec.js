'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var chai = require('chai');
var expect = chai.expect;
var supertestFactory = require('supertest-as-promised');
var fs = require('fs');
var uuid = require('node-uuid');
var authenticator = require('../../app/authenticator');
var db = require('../../app/db');

chai.should();
Promise.longStackTraces();

describe('Express app', function ()
{
    var server;
    var supertest;
    var validToken;
    var validHeader;
    before(function ()
    {
        validToken = new Date().getTime().toString();
        validHeader = 'Bearer ' + validToken;
        authenticator.setValidToken(validToken);
        server = require('../../app/app');
        server().start();
        supertest = supertestFactory('http://localhost:9000');
        db.connect();
    });

    after(function ()
    {
        if (server) {
            server().stop();
        }
    });

    function authTests(request)
    {
        describe('when authentication token is invalid', function ()
        {
            it('should respond with 401', function ()
            {
                return request().set('authorization', 'Bearer abc').expect(401);
            });
        });

        describe('when authorization header is invalid', function ()
        {
            it('should respond with 401', function ()
            {
                return request().set('authorization', validToken).expect(401);
            });
        });

        describe('when authorization header is missing', function ()
        {
            it('should respond with 401', function ()
            {
                return request().expect(401);
            });
        });
    }

    function connectionTests(request)
    {
        describe('when not connected to DB', function ()
        {
            before(function ()
            {
                db.disconnect();
            });
            after(function ()
            {
                db.connect();
            });
            it('should respond with 500', function ()
            {
                return request().set('authorization', validHeader).expect(500);
            });
        });
    }

    describe('POST /dog', function ()
    {
        var postedDog;
        var response;

        before(function ()
        {
            postedDog = {
                name: 'Reksio',
                owner: 'Bozydar',
                createDate: new Date().getTime()
            };
        });

        describe('when request is ok', function ()
        {
            before(function ()
            {
                return supertest.post('/dog').send(postedDog).set('authorization', validHeader).expect(200).then(function (result)
                {
                    response = result.body;
                });
            });

            it('should respond with posted entity including generated id', function ()
            {
                expect(_.omit(response, 'id')).to.eql(postedDog);
                expect(response).to.have.property('id');
            });

            it('should be possible to retrieve that dog by id', function ()
            {
                return supertest.get('/dog/' + response.id).set('authorization', validHeader).expect(200).then(function (result)
                {
                    expect(result.body).to.eql(response);
                });
            });
        });

        describe('when payload is too large', function ()
        {
            function isMessageValid(res)
            {
                res.body.should.have.property('message', 'Payload content length greater than maximum allowed: 70');
            }

            it('should respond with 400 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                payload.name = new Array(16).toString();
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(400).expect(isMessageValid);
            });
        });

        describe('when name is missing', function ()
        {
            it('should respond with 400 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                delete payload.name;
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(400);
            });
        });

        describe('when name is empty string', function ()
        {
            it('should respond with 400 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                payload.name = '';
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(400);
            });
        });

        describe('when name is 11 characters long', function ()
        {
            it('should respond with 400 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                payload.name = '12345678901';
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(400);
            });
        });

        describe('when owner is a number', function ()
        {
            it('should respond with 400 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                payload.owner = 1;
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(400);
            });
        });

        describe('when createDate is negative number', function ()
        {
            it('should respond with 400 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                payload.owner = -1;
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(400);
            });
        });

        describe('when owner is missing', function ()
        {
            it('should respond with 200 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                delete payload.owner;
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(200);
            });
        });

        describe('when posting dog with id not found in db', function ()
        {
            it('should respond 404 status code', function ()
            {
                var payload = _.cloneDeep(postedDog);
                payload.id = -1;
                return supertest.post('/dog').set('authorization', validHeader).send(payload).expect(404);
            });
        });

        function requestFactory()
        {
            return supertest.post('/dog').send(postedDog);
        }

        authTests(requestFactory);
        connectionTests(requestFactory);
    });

    describe('GET /dog/:id', function ()
    {
        describe('when asking for non-existing id', function ()
        {
            it('should respond with 404 status code', function ()
            {
                return supertest.get('/dog/-1').set('authorization', validHeader).expect(404);
            });
        });

        function requestFactory()
        {
            return supertest.get('/dog/1');
        }

        authTests(requestFactory);
        connectionTests(requestFactory);
    });


    describe('GET /hound/:id', function ()
    {
        it('should redirect to /dog/:id', function ()
        {
            var id = uuid.v4();
            return supertest.get('/hound/' + id).set('authorization', validHeader).expect(302).then(function (response)
            {
                expect(response.headers.location).to.equal('/dog/' + id);
            });
        });
    });

    describe('static content', function () {
        var staticContentDirectory = __dirname + '/../../public/';
        after(function () {
            var filesToRemove = fs.readdirSync(staticContentDirectory).filter(function (file) {
                return '.keep' !== file;
            });
            _.forEach(filesToRemove, function (file) {
                fs.unlinkSync(staticContentDirectory + file);
            });
        });
        it('should be served from public directory', function () {
            return Promise.map(new Array(100), function () {
                var filename = uuid.v4() + '.json';
                var object = {};
                _.times(Math.random() * 10, function () {
                    object[uuid.v4()] = uuid.v4();
                });
                var content = JSON.stringify(object, null, 2);

                fs.writeFileSync(staticContentDirectory + filename, content);
                return supertest.get('/' + filename).then(function (response) {
                    expect(response.body).to.eql(object);
                });
            });
        });
    });
});

