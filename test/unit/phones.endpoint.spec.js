describe('phonesDAO', function ()
{
    'use strict';

    var DAO = require('../../app/index.js');

    var testHelper = require('../testHelper');
    var phones = [
        {
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
        }
    ];
    before(function ()
    {
        testHelper.openDBConnection();
    });
    after(function (done)
    {
        testHelper.closeDBConnection(done);
    });
    beforeEach(function ()
    {
        return testHelper.seedPhones(phones);
    });
    describe('DAO\'s search method', function ()
    {
        it('should return promise', function ()
        {
            if (!testHelper.isPromise(DAO.search({}))) {
                throw new Error('Return is NOT promise');
            }
        });

        describe('when don\'t provide query params', function ()
        {
            it('should respond with 3 elements', function ()
            {
                return DAO.search({}).then(function (data)
                {
                    if (!testHelper.isEquals(phones, testHelper.convertFromMongo(data), ['_id', '__v'])) {
                        throw new Error('Results is NOT equals');
                    }
                });
            });
        });

        describe('when provided string to search for', function ()
        {
            it('should respond with 3 elements', function ()
            {
                return DAO.search({ query: 'Pho' }).then(function (data)
                {
                    if (!testHelper.isEquals(phones, testHelper.convertFromMongo(data), ['_id', '__v'])) {
                        throw new Error('Results is NOT equals')
                    }
                });
            });

            it('should respond with 1 elements', function ()
            {
                return DAO.search({ query: 'oki' }).then(function (data)
                {
                    if (!testHelper.isEquals([ phones[ 0 ] ], testHelper.convertFromMongo(data), ['_id', '__v'])) {
                        throw new Error('Results is NOT equals')
                    }
                });
            });
        });
    });

    describe('DAO\'s getDetails method', function ()
    {
        it('should return promise', function ()
        {
            if (!testHelper.isPromise(DAO.getDetails(0))) {
                throw new Error('Return is NOT promise');
            }
        });

        describe('when we are getting first row from database', function ()
        {
            var phoneId, phone;
            beforeEach(function ()
            {
                return DAO.search({}).then(function (data)
                {
                    phone = testHelper.convertFromMongo(data)[0];
                    phoneId = phone._id;
                });
            });

            it('should respond with first element', function ()
            {
                return DAO.getDetails(phoneId).then(function (data)
                {
                    if (!testHelper.isEquals(phone, testHelper.convertFromMongo(data))) {
                        throw new Error('Results is NOT equals');
                    }
                });
            });
        });

        describe('when we are trying to get not existing row', function ()
        {
            it('should respond with error', function ()
            {
                return DAO.getDetails(0).then(function ()
                {
                    throw new Error('Returns something');
                }).catch(function (error)
                        {
                            if (error.name !== 'CastError') {
                                throw new Error('Different error than CastError')
                            }
                        });
            });
        });
    });

    describe('DAO\'s createNewOrUpdate method', function ()
    {
        it('should return promise', function ()
        {
            if (!testHelper.isPromise(DAO.createNewOrUpdate({}))) {
                throw new Error('Return is NOT promise');
            }
        });

        describe('when provided element has no _id', function ()
        {
            var phone = {model: 'New phones', brand: 'new brand mock'};
            it('should respond with this element', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function (data)
                {
                    if (!testHelper.isEquals(phone, testHelper.convertFromMongo(data), ['_id', '__v'])) {
                        throw new Error('Results is NOT equals');
                    }
                });
            });

            it('should database contain 4 rows', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        if (4 !== data.length) {
                            throw new Error('Result has no 4 elements');
                        }
                    });
                });
            });
        });

        describe('when provided element has _id', function ()
        {
            var phone;
            beforeEach(function ()
            {
                return DAO.search({}).then(function (data)
                {
                    phone = testHelper.convertFromMongo(data)[2];
                });
            });
            it('should respond with this element', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function (data)
                {
                    if (!testHelper.isEquals(phone, testHelper.convertFromMongo(data))) {
                        throw new Error('Results is NOT equals');
                    }
                });
            });

            it('should database contain 3 rows', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        if (3 !== data.length) {
                            throw new Error('Result has no 4 elements');
                        }
                    });
                });
            });
        });
    });
    describe('DAO\'s removePhone method', function ()
    {
        it('should return promise', function ()
        {
            if (!testHelper.isPromise(DAO.removePhone(0))) {
                throw new Error('Return is NOT promise');
            }
        });

        describe('when in database exist row with provided id', function ()
        {
            var phoneId, phone;
            beforeEach(function ()
            {
                return DAO.search({}).then(function (data)
                {
                    phone = testHelper.convertFromMongo(data)[1];
                    phoneId = phone._id;
                });
            });

            it('should respond with deleted element', function ()
            {
                return DAO.removePhone(phoneId).then(function (data)
                {
                    if (!testHelper.isEquals(phone, testHelper.convertFromMongo(data))) {
                        throw new Error('Results is NOT equals');
                    }
                });
            });

            it('should database contain 2 rows', function ()
            {
                return DAO.removePhone(phoneId).then(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        if (2 !== data.length) {
                            throw new Error('Result has no 2 elements');
                        }
                    });
                });
            });
        });

        describe('when in database do not exist row with provided id', function ()
        {
            it('should respond with error', function ()
            {
                return DAO.removePhone(0).then(function ()
                {
                    throw new Error('Returns something');
                }).catch(function (error)
                        {
                            if (error.name !== 'CastError') {
                                throw new Error('Different error than CastError')
                            }
                        });
            });

            it('should database contain 3 rows', function ()
            {
                return DAO.removePhone(0).catch(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        if (3 !== data.length) {
                            throw new Error('Result has no 3 elements');
                        }
                    });
                });
            });
        });
    });
});
