describe('phones.endpoint', function ()
{
    'use strict';

    var superTest = require('supertest-as-promised')(require('../../app/index.js'));
    var chai = require('chai');
    var expect = chai.expect;
    chai.use(require('../mochaHelper.js'));

    describe('POST /api/phones', function ()
    {
        var phone = {model: 'New phones', brand: 'new brand mock'};
        describe('when user is authenticated', function ()
        {
            var token;
            beforeEach(function ()
            {
                return superTest.post('/api/user/auth').set('Content-type',
                                'application/json').send({email: 'mock@email.com', password: 'simplePassword'}).then(function (response)
                        {
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                        });
            });
            describe('when we add one element without _id', function ()
            {
                beforeEach(function ()
                {
                    return superTest.post('/api/phones').set('Authorization', token).send(phone);
                });

                it('should respond with 201 and newly created element', function ()
                {
                    return superTest.post('/api/phones').set('Authorization', token).send(phone).expect(201).then(function (response)
                    {
                        expect(response.body.results).to.softEqual(phone, ['_id']);
                    });
                });

                describe('and GET /api/phones request is made', function ()
                {
                    it('should response array with 1 element that just has been added', function ()
                    {
                        return superTest.get('/api/phones').set('Authorization', token).expect(200).then(function (response)
                        {
                            var phones = [
                                {_id: 1, model: 'New phones', brand: 'new brand mock'},
                                {_id: 2, model: 'New phones', brand: 'new brand mock'},
                                {_id: 3, model: 'New phones', brand: 'new brand mock'}
                            ];

                            expect(response.body.results).to.softEqual(phones);
                        });
                    });
                });
            });
            describe('when updating existing element', function ()
            {
                beforeEach(function ()
                {
                    return superTest.get('/api/phones').set('Authorization', token).expect(200).then(function (response)
                    {
                        phone = response.body.results[0];
                    });
                });
                it('should return updated element on subsequent get request', function ()
                {
                    phone.model = 'Test test';
                    phone.brand = 'mock mock';
                    return superTest.post('/api/phones').set('Authorization', token).send(phone).then(function ()
                    {
                        return superTest.get('/api/phones/' + phone._id).set('Authorization', token).expect(200).then(function (response)
                        {
                            expect(response.body).to.softEqual(phone);
                        });
                    });
                });
            });
        });
        describe('when user is NOT authenticated', function ()
        {
            it('should respond with 401 and NOT add element to DB', function ()
            {
                return superTest.post('/api/phones').send(phone).expect(401).then(function ()
                {
                    return superTest.get('/api/phones').expect(200);
                }).then(function (response)
                        {
                            var phones = [
                                {_id: 1, model: 'Test test', brand: 'mock mock' },
                                {_id: 2, model: 'New phones', brand: 'new brand mock'},
                                {_id: 3, model: 'New phones', brand: 'new brand mock'}
                            ];
                            expect(response.body.results).to.softEqual(phones);
                        });
            });
        });
    });
    describe('GET /api/phones/:id', function ()
    {
        describe('when user is authenticated', function ()
        {
            var token;
            beforeEach(function ()
            {
                return superTest.post('/api/user/auth').set('Content-type',
                                'application/json').send({email: 'mock@email.com', password: 'simplePassword'}).expect(200).then(function (response)
                        {
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                        });
            });
            describe('when we get id first element in the array', function ()
            {
                var phoneId, phone;
                beforeEach(function ()
                {
                    return superTest.get('/api/phones').set('Authorization', token).expect(200).then(function (response)
                    {
                        phone = response.body.results[0];
                        phoneId = response.body.results[0]._id;
                    });
                });
                it('should response 200 and details first phone', function ()
                {
                    return  superTest.get('/api/phones/' + phoneId).set('Authorization', token).expect(200).then(function (response)
                    {
                        expect(response.body).to.softEqual(phone);
                    });
                });
            });
            describe('when we get id third element in array', function ()
            {
                var phoneId, phone;
                beforeEach(function ()
                {
                    return superTest.get('/api/phones').set('Authorization', token).then(function (response)
                    {
                        phone = response.body.results[2];
                        phoneId = response.body.results[2]._id;
                    });
                });
                it('should response 200 and details first phone', function ()
                {
                    return superTest.get('/api/phones/' + phoneId).set('Authorization', token).expect(200).then(function (response)
                    {
                        expect(response.body).to.softEqual(phone);
                    });
                });
            });
        });
        describe('when user is NOT authenticated', function ()
        {
            it('should response 401', function ()
            {
                var phoneId;
                return superTest.get('/api/phones').expect(200).then(function (response)
                {
                    phoneId = response.body.results[0]._id;
                    return superTest.get('/api/phones/' + phoneId).expect(401);
                });
            });
        });
    });
    describe('DELETE /api/phones/:id', function ()
    {
        describe('when user is authenticated', function ()
        {
            var token;
            beforeEach(function ()
            {
                return superTest.post('/api/user/auth').set('Content-type',
                                'application/json').send({email: 'mock@email.com', password: 'simplePassword'}).expect(200).then(function (response)
                        {
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                        });
            });
            var phoneId;
            beforeEach(function ()
            {
                return superTest.get('/api/phones').then(function (response)
                {
                    phoneId = response.body.results[0]._id;
                });
            });
            it('should response 200 and remove this element in db', function ()
            {
                return superTest.get('/api/phones').then(function (initialGetResponse)
                {
                    expect(initialGetResponse.body.results).to.have.length(3);
                    return superTest.delete('/api/phones/' + phoneId).set('Authorization', token).expect(200).then(function (response)
                    {
                        expect(response.body).to.eql({});
                        return superTest.get('/api/phones').then(function (response)
                        {
                            expect(response.body.results).to.have.length(2);
                        });
                    });
                });
            });
        });
        describe('when user is NOT authenticated', function ()
        {
            var token;
            beforeEach(function ()
            {
                return superTest.post('/api/user/auth').set('Content-type',
                                'application/json').send({email: 'mock@email.com', password: 'simplePassword'}).then(function (response)
                        {
                            token = 'Token ' + new Buffer(response.body.token.toString()).toString('base64');
                        });
            });
            it('should response 401 and NOT remove data', function ()
            {
                var phoneId;
                return  superTest.get('/api/phones').expect(200).then(function (response)
                {
                    phoneId = response.body.results[0]._id;
                    return superTest.delete('/api/phones/' + phoneId).expect(401).then(function ()
                    {
                        return superTest.get('/api/phones/' + phoneId).set('Authorization', token).expect(200).then(function (response)
                        {
                            var expectedResult = { _id: 2, model: 'New phones', brand: 'new brand mock' };
                            expect(response.body).to.softEqual(expectedResult);
                        });
                    });
                });
            });
        });
    });
});
