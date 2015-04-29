describe('phones,endpoint', function ()
{
    'use strict';

    var superTest = require('supertest')(require('../../app/index.js'));
    var testHelper = require('../testHelper');
    var sha1 = require('sha1');
    describe('POST /api/phones', function ()
    {
        var phone = {model: 'New phones', brand: 'new brand mock'};
        describe('when user is authenticated', function ()
        {
            var token;
            beforeEach(function (done)
            {
                superTest.post('/api/user/auth').set('Content-type', 'application/json').send({email: 'mock@email.com', password: 'simplePassword'})
                        .end(function (error,
                                       response)
                        {
                            if (error) {
                                done(error);
                            }
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                            done();
                        });
            });
            describe('when we add one element without _id', function ()
            {
                beforeEach(function (done)
                {
                    superTest.post('/api/phones').set('Authorization', token).send(phone).end(done);
                });

                it('should response 201 and this element', function (done)
                {
                    superTest.post('/api/phones').set('Authorization', token).send(phone).expect(201).end(function (error, response)
                    {
                        if (response.body.results && testHelper.isEquals(phone, response.body.results, ['_id'])) {
                            done();
                        } else {
                            done('Results is NOT equals');
                        }
                    });
                });

                it('should response array with 1 element', function (done)
                {
                    superTest.get('/api/phones').set('Authorization', token).expect(200).end(function (error, response)
                    {
                        var phones = [{_id: 1, model: 'New phones', brand: 'new brand mock'},
                            {_id: 2, model: 'New phones', brand: 'new brand mock'},
                            {_id: 3, model: 'New phones', brand: 'new brand mock'}];
                        if (3 === response.body.results.length && testHelper.isEquals(phones, response.body.results)) {
                            done();
                        } else {
                            done('Results is NOT equals');
                        }
                    });
                });
            });
            describe('when we update element in db', function ()
            {
                beforeEach(function (done)
                {
                    superTest.get('/api/phones').set('Authorization', token).expect(200).end(function (error, response)
                    {
                        phone = response.body.results[0];
                        done();
                    });
                });
                it('should update this element in db', function (done)
                {
                    phone.model = 'Test test';
                    phone.brand = 'mock mock';
                    superTest.post('/api/phones').set('Authorization', token).send(phone).end(function ()
                    {
                        superTest.get('/api/phones/' + phone._id).set('Authorization', token).expect(200).end(function (error, response)
                        {
                            if (response.body.results && testHelper.isEquals(phone, response.body.results)) {
                                done();
                            } else {
                                done('Results is NOT equals');
                            }
                        });
                    });
                });
            });
        });
        describe('when user is NOT authorized', function ()
        {
            it('should response 401 and NOT add element to DB', function (done)
            {
                superTest.post('/api/phones').send(phone).expect(401).end(function ()
                {
                    superTest.get('/api/phones').expect(200).end(function (error, response)
                    {
                        var phones = [{_id: 1, model: 'Test test', brand: 'mock mock' },
                            {_id: 2, model: 'New phones', brand: 'new brand mock'},
                            {_id: 3, model: 'New phones', brand: 'new brand mock'}];
                        if (response.body.results && testHelper.isEquals(phones, response.body.results)) {
                            done();
                        } else {
                            done('Results is NOT equals');
                        }
                    });
                });
            });
        });
    });
    describe('GET /api/phones/:id', function ()
    {
        describe('when user is authorized', function ()
        {
            var token;
            beforeEach(function (done)
            {
                superTest.post('/api/user/auth').set('Content-type', 'application/json').send({email: 'mock@email.com', password: 'simplePassword'})
                        .end(function (error,
                                       response)
                        {
                            if (error) {
                                done(error);
                            }
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                            done();
                        });
            });
            describe('when we get id first element in the array', function ()
            {
                var phoneId, phone;
                beforeEach(function (done)
                {
                    superTest.get('/api/phones').set('Authorization', token).end(function (error, response)
                    {
                        phone = response.body.results[0];
                        phoneId = response.body.results[0]._id;
                        done();
                    });
                });
                it('should response 200 and details first phone', function (done)
                {
                    superTest.get('/api/phones/' + phoneId).set('Authorization', token).expect(200).end(function (error, response)
                    {
                        if (response.body.results && testHelper.isEquals(phone, response.body.results)) {
                            done();
                        } else {
                            done('Results is NOT equals');
                        }
                    });
                });
            });
            describe('when we get id third element in array', function ()
            {
                var phoneId, phone;
                beforeEach(function (done)
                {
                    superTest.get('/api/phones').set('Authorization', token).end(function (error, response)
                    {
                        phone = response.body.results[2];
                        phoneId = response.body.results[2]._id;
                        done();
                    });
                });
                it('should response 200 and details first phone', function (done)
                {
                    superTest.get('/api/phones/' + phoneId).set('Authorization', token).expect(200).end(function (error, response)
                    {
                        if (response.body.results && testHelper.isEquals(phone, response.body.results)) {
                            done();
                        } else {
                            done('Results is NOT equals');
                        }
                    });
                });
            });
        });
        describe('when user is NOT authorized', function ()
        {
            it('should response 401', function (done)
            {
                var phoneId;
                superTest.get('/api/phones').expect(200).end(function (error, response)
                {
                    phoneId = response.body.results[0]._id;
                    superTest.get('/api/phones/' + phoneId).expect(401).end(done);
                });
            });
        });
    });
    describe('DELETE /api/phones/:id', function ()
    {
        describe('when user is authorized', function ()
        {
            var token;
            beforeEach(function (done)
            {
                superTest.post('/api/user/auth').set('Content-type', 'application/json').send({email: 'mock@email.com', password: 'simplePassword'})
                        .end(function (error,
                                       response)
                        {
                            if (error) {
                                done(error);
                            }
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                            done();
                        });
            });
            var phoneId;
            beforeEach(function (done)
            {
                superTest.get('/api/phones').end(function (error, response)
                {
                    phoneId = response.body.results[0]._id;
                    done();
                });
            });
            it('should response 200 and remove this element in db', function (done)
            {
                superTest.get('/api/phones').end(function (error, respond)
                {
                    superTest.delete('/api/phones/' + phoneId).set('Authorization', token).expect(200).end(function (error, response)
                    {

                        if (testHelper.isEquals({}, response.body)) {
                            superTest.get('/api/phones').end(function (error, response)
                            {
                                if (2 === response.body.results.length && 3 === respond.body.results.length) {
                                    done();
                                } else {
                                    done('Length results is NOT correct');
                                }
                            });
                        } else {
                            done('Results is NOT equals');
                        }
                    });
                });
            });
        });
        describe('when user is NOT authorized', function ()
        {
            var token;
            beforeEach(function (done)
            {
                superTest.post('/api/user/auth').set('Content-type', 'application/json').send({email: 'mock@email.com', password: 'simplePassword'})
                        .end(function (error,
                                       response)
                        {
                            if (error) {
                                done(error);
                            }
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                            done();
                        });
            });
            it('should response 401 and NOT remove data', function (done)
            {
                var phoneId;
                superTest.get('/api/phones').expect(200).end(function (error, response)
                {
                    phoneId = response.body.results[0]._id;
                    superTest.delete('/api/phones/' + phoneId).expect(401).end(function ()
                    {
                        superTest.get('/api/phones/' + phoneId).set('Authorization', token).expect(200).end(function (error, respond)
                        {
                            var expect = { _id: 2, model: 'New phones', brand: 'new brand mock' };
                            if (respond.body.results && testHelper.isEquals(expect, respond.body.results)) {
                                done();
                            } else {
                                done('Remove data.');
                            }
                        });
                    });
                });
            });
        });
    });
});