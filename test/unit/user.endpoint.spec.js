describe('user.endpoint', function ()
{
    'use strict';

    var superTest = require('supertest-as-promised')(require('../../app/index.js'));
    var chai = require('chai');
    var expect = chai.expect;

    describe('POST /api/user/auth', function ()
    {
        describe('when user exist in db', function ()
        {
            describe('and password is correct', function ()
            {
                var user = {email: 'mock@email.com', password: 'simplePassword'};
                it('should response status 200 and token', function ()
                {
                    return superTest.post('/api/user/auth').send(user).expect(200).then(function (response)
                    {
                        expect(response.body).to.have.property('token');
                    });
                });
            });
            describe('and password is NOT correct', function ()
            {
                var user = {email: 'mock@email.com', password: 'simplePassword1'};
                it('should response status 401 and NOT create token', function ()
                {
                    return superTest.post('/api/user/auth').send(user).expect(401).then(function (response)
                    {
                        expect(response.body).to.not.have.property('token');
                    });
                });
            });
        });
        describe('when user NOT exist in DB', function ()
        {
            it('should get response 401', function ()
            {
                return superTest.post('/api/user/auth').set('Content-type', 'application/json').send({
                    email: 'simple', password: 'digest'
                }).expect(401).expect({});
            });
        });
    });
});
