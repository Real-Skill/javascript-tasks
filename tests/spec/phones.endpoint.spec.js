describe('phones,endpoint', function ()
{
    'use strict';

    var superTest = require('supertest')(require('../../app/index.js'));
    var testHelper = require('../testHelper');
    var phones = [{
        model: 'Nokia',
        brand: 'Test Phone',
        stan: 'New'
    },
        {
            model: 'Mock',
            brand: 'Super Phone',
            stan: 'Used'
        },
        {
            model: 'Time Phone',
            brand: 'Test Phone',
            stan: 'New'
        }];
    beforeEach(function (done)
    {
        testHelper.openDBConnection();
        testHelper.seedPhones(phones).then(function ()
        {
            done();
        });
    });
    afterEach(function (done)
    {
        testHelper.closeDBConnection(done);
    });
    describe('GET /api/phones', function ()
    {
        describe('when seed 3 phones', function ()
        {
            it('should response 200 and response have 3 elements', function (done)
            {
                superTest.get('/api/phones').expect(200).end(function (error, response)
                {
                    if (testHelper.isEquals(phones, response.body.results, ['_id', '__v'])) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
            });
        });

        describe('when url have query params', function ()
        {
            it('should filter response results', function (done)
            {
                superTest.get('/api/phones?query=Test').expect(200).end(function (error, response)
                {
                    if (error) {
                        done('Some gone wrong' + error);
                    }
                    if (response.body.results && 2 === response.body.results.length &&
                            testHelper.isEquals(phones[0], response.body.results[0], ['_id', '__v']) &&
                            testHelper.isEquals(phones[2], response.body.results[1], ['_id', '__v'])) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
                superTest.get('/api/phones?query=sed').expect(200).end(function (error, response)
                {
                    if (error) {
                        done('Some gone wrong' + error);
                    }
                    if (response.body.results && 1 === response.body.results.length &&
                            testHelper.isEquals(phones[1], response.body.results[0], ['_id', '__v'])) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
                superTest.get('/api/phones?query=Nok').expect(200).end(function (error, response)
                {
                    if (error) {
                        done('Some gone wrong' + error);
                    }
                    if (response.body.results && 1 === response.body.results.length &&
                            testHelper.isEquals(phones[0], response.body.results[0], ['_id', '__v'])) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
            });
        });
    });
    describe('POST /api/phones', function ()
    {
        describe('when we add one element without _id', function ()
        {
            var phone = {model: 'New phones', brand: 'new brand mock'};
            it('should response 201 and this element', function (done)
            {
                superTest.post('/api/phones').send(phone).expect(201).end(function (error, response)
                {
                    if (testHelper.isEquals(phone, response.body.results, ['_id', '__v'])) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
            });
            beforeEach(function (done)
            {
                superTest.post('/api/phones').set({}).send(phone).end(done);
            });
            it('should response array with 4 element', function (done)
            {
                superTest.get('/api/phones').expect(200).end(function (error, response)
                {
                    phones.push(phone);
                    if (4 === response.body.results.length && testHelper.isEquals(phones, response.body.results, ['_id', '__v'])) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
            });
        });
        describe('when we update element in db', function ()
        {
            var phone;
            beforeEach(function (done)
            {
                superTest.get('/api/phones').expect(200).end(function (error, response)
                {
                    phone = response.body.results[2];
                    done();
                });
            });
            it('should update this element in db', function (done)
            {
                phone.model = 'Test test';
                phone.brand = 'mock mock';
                superTest.post('/api/phones').send(phone).end(function ()
                {
                    superTest.get('/api/phones/' + phone._id).expect(200).end(function (error, response)
                    {
                        if (testHelper.isEquals(phone, response.body.results)) {
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
        describe('when we get id first element in the array', function ()
        {
            var phoneId, phone;
            beforeEach(function (done)
            {
                superTest.get('/api/phones').end(function (error, response)
                {
                    phone = response.body.results[0];
                    phoneId = response.body.results[0]._id;
                    done();
                });
            });
            it('should response 200 and details first phone', function (done)
            {
                superTest.get('/api/phones/' + phoneId).expect(200).end(function (error, response)
                {
                    if (testHelper.isEquals(phone, response.body.results)) {
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
                superTest.get('/api/phones').end(function (error, response)
                {
                    phone = response.body.results[2];
                    phoneId = response.body.results[2]._id;
                    done();
                });
            });
            it('should response 200 and details first phone', function (done)
            {
                superTest.get('/api/phones/' + phoneId).expect(200).end(function (error, response)
                {
                    if (testHelper.isEquals(phone, response.body.results)) {
                        done();
                    } else {
                        done('Results is NOT equals');
                    }
                });
            });
        });
    });
    describe('DELETE /api/phones/:id', function ()
    {
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
                superTest.delete('/api/phones/' + phoneId).expect(200).end(function (error, response)
                {
                    if (testHelper.isEquals({}, response.body)) {
                        superTest.get('/api/phones').end(function (error, response)
                        {
                            if (3 === response.body.results.length && 4 === respond.body.results.length) {
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
});