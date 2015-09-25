describe('user.endpoint', function ()
{
    'use strict';

    var superTest = require('supertest-as-promised')(require('../../app/index.js'));
    var sha1 = require('sha1');

    describe('POST /api/user/auth', function ()
    {
        describe('when user exist in db', function ()
        {
            describe('and password is correct', function ()
            {
                var user = {email: 'mock@email.com', password: 'simplePassword'};
                it('should response status 200 and create token', function ()
                {
                    return superTest.post('/api/user/auth').send(user).expect(200).then(function (response)
                    {
                        if (!(response.body.token)) {
                            throw new Error('Results NOT have token');
                        }
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
                        if (response.body.token) {
                            throw new Error('Results have NOT token');
                        }
                    });
                });
            });
        });
        describe('when user NOT exist in DB', function ()
        {
            it('should get response 404', function ()
            {
                return superTest.post('/api/user/auth').set('Content-type', 'application/json').send({
                    email: 'simple', password: 'digest'
                }).expect(404).expect({});
            });
        });
    });
});
