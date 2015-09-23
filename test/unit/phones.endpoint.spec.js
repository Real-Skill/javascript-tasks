/*jshint -W030 */
describe('phonesDAO', function ()
{
    'use strict';

    var DAO = require('../../app/DAO/phoneDAO.js');

    var testHelper = require('../testHelper');
    var chai = require('chai');
    var expect = chai.expect;
    chai.use(require('../mochaHelper.js'));
    var mongoose = require('mongoose');

    var phones = [
        {
            model: 'Mock',
            brand: 'Super Phone',
            state: 'Used'
        },
        {
            model: 'Nokia',
            brand: 'Test Phone',
            state: 'New'
        },
        {
            model: 'Time Phone',
            brand: 'Test Phone',
            state: 'New'
        }
    ];
    before(function ()
    {
        return testHelper.openDBConnection();
    });
    after(function ()
    {
        return testHelper.closeDBConnection().then(function ()
        {
            mongoose.models = {};
            mongoose.modelSchemas = {};
        });
    });
    beforeEach(function ()
    {
        return testHelper.seedPhones(phones);
    });

    describe('DAO\'s search method', function ()
    {
        it('should return promise', function ()
        {
            //noinspection BadExpressionStatementJS
            expect(DAO.search({})).to.be.promise;
        });

        describe('when don\'t provide query params', function ()
        {
            it('should respond with 3 elements', function ()
            {
                return DAO.search({}).then(function (data)
                {
                    expect(testHelper.convertFromMongo(data)).to.softEqual(phones, ['_id', '__v']);
                });
            });
        });

        describe('when provided string to search for', function ()
        {
            it('should respond with 3 elements', function ()
            {
                return DAO.search({ query: 'Pho' }).then(function (data)
                {
                    expect(testHelper.convertFromMongo(data)).to.softEqual(phones, ['_id', '__v']);
                });
            });

            it('should respond with 1 elements', function ()
            {
                return DAO.search({ query: 'oki' }).then(function (data)
                {
                    expect(testHelper.convertFromMongo(data)).to.softEqual([phones[1]], ['_id', '__v']);
                });
            });
        });
    });

    describe('DAO\'s getDetails method', function ()
    {
        it('should return promise', function ()
        {
            //noinspection BadExpressionStatementJS
            expect(DAO.getDetails(0)).to.be.promise;
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
                    expect(testHelper.convertFromMongo(data)).to.softEqual(phone, ['_id']);
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
                            expect(error.name).to.equal('CastError');
                        });
            });
        });
    });

    describe('DAO\'s createNewOrUpdate method', function ()
    {
        it('should return promise', function ()
        {
            //noinspection BadExpressionStatementJS
            expect(DAO.createNewOrUpdate({})).to.be.promise;
        });

        describe('when provided element has no _id', function ()
        {
            var phone = {model: 'New phones', brand: 'new brand mock'};
            it('should respond with this element', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function (data)
                {
                    expect(testHelper.convertFromMongo(data)).to.softEqual(phone, ['_id', '__v']);
                });
            });

            it('should database contain 4 rows', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        expect(data).to.have.length(4);
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
                    expect(testHelper.convertFromMongo(data)).to.softEqual(phone, ['_id']);
                });
            });

            it('should database contain 3 rows', function ()
            {
                return DAO.createNewOrUpdate(phone).then(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        expect(data).to.have.length(3);
                    });
                });
            });
        });
    });
    describe('DAO\'s removePhone method', function ()
    {
        it('should return promise', function ()
        {
            //noinspection BadExpressionStatementJS
            expect(DAO.removePhone(0)).to.be.promise;
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
                    expect(testHelper.convertFromMongo(data)).to.softEqual(phone, ['_id']);
                });
            });

            it('should database contain 2 rows', function ()
            {
                return DAO.removePhone(phoneId).then(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        expect(data).to.have.length(2);
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
                            expect(error.name).to.equal('CastError');
                        });
            });

            it('should database contain 3 rows', function ()
            {
                return DAO.removePhone(0).catch(function ()
                {
                    return DAO.search({}).then(function (data)
                    {
                        expect(data).to.have.length(3);
                    });
                });
            });
        });
    });
});
