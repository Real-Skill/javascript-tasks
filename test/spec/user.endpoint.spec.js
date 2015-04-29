describe('user.endpoint', function ()
{
    'use strict';

    var superTest = require('supertest')(require('../../app/index.js'));
    var testHelper = require('../testHelper');
    var sha1 = require('sha1');

    describe('POST /api/user', function ()
    {
        var user = {email: 'new@user.com', password: 'password'};
        it('should create user and response 201 and user', function (done)
        {
            superTest.post('/api/user').send(user).expect(201).end(function (error, response)
            {
                delete  user.password;
                if (testHelper.isEquals(user, response.body, ['_id', '__v'])) {
                    done();
                } else {
                    done('Results is NOT equal');
                }
            });
        });
    });

    describe('POST /api/user/auth', function ()
    {
        describe('when user exist in db', function ()
        {
            describe('and password is correct', function ()
            {
                var user = {email: 'mock@email.com', password: 'simplePassword'};
                it('should response status 200 and create token', function (done)
                {
                    superTest.post('/api/user/auth').send(user).expect(200).end(function (error, response)
                    {
                        if (response.body.token && 'number' === typeof response.body.token) {
                            done();
                        } else {
                            done('Results NOT have token');
                        }
                    });
                });
            });
            describe('and password is NOT correct', function ()
            {
                var user = {email: 'mock@email.com', password: 'simplePassword1'};
                it('should response status 401 and NOT create token', function (done)
                {
                    superTest.post('/api/user/auth').send(user).expect(401).end(function (error, response)
                    {
                        if (!response.body.token) {
                            done();
                        } else {
                            done('Results have NOT token');
                        }
                    });
                });
            });
        });
        describe('when user NOT exist in DB', function ()
        {
            it('should get response 404', function (done)
            {
                superTest.post('/api/user/auth').set('Content-type', 'application/json').send({
                    email: 'simple', password: 'digest'
                }).expect(404).expect({}).end(done);
            });
        });


    });

});