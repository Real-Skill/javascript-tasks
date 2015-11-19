describe('DAO\'s search method', function ()
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
            model: 'Nokia',
            brand: 'Test Phone',
            state: 'New'
        },
        {
            model: 'Mock',
            brand: 'Super Phone',
            state: 'Unknown'
        },
        {
            model: 'Time Phone',
            brand: 'Test Phone',
            state: 'Used'
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

    it('should return promise', function ()
    {
        /*jshint -W030*/
        //noinspection BadExpressionStatementJS
        expect(DAO.search({})).to.be.promise;
    });

    it('should returned object with results array and number of total results', function ()
    {
        return DAO.search({}).then(function (data)
        {
            expect(data).to.have.property('results');
            expect(data).to.have.property('total');
        });
    });

    describe('when no query params given', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with first 2 elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when search param equals "Pho"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with first 2 elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when search param equals "oki"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({search: 'oki'}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with first 1 element', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 1), ['_id', '__v']);
        });
        it('should respond with total equal to 1', function ()
        {
            expect(result.total).to.equal(1);
        });
    });

    describe('when skip param equals 2', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({skip: 2}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with one, third element', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when skip param equals 3', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({skip: 3}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with empty results', function ()
        {
            expect(result.results).to.have.length(0);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when skip param equals -1', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({skip: -1}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond first two elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when limit param equals 1', function ()
    {
        it('should respond with first two elements', function ()
        {
            var result;
            before(function ()
            {
                return DAO.search({limit: 1}).then(function (data)
                {
                    result = data;
                });
            });
            it('should respond first element', function ()
            {
                expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 1), ['_id', '__v']);
            });
            it('should respond with total equal to 3', function ()
            {
                expect(result.total).to.equal(3);
            });
        });
    });

    describe('when limit param equals 10', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({limit: 10}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond all elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones, ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when limit param equals 0', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({limit: 0}).then(function (data)
            {
                result = data;
            });
        });
//            TODO i don't like this requirement, i think it should return empty array
        it('should respond first two elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when limit param equals 3 and skip param equals 1', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({
                skip: 1,
                limit: 3
            }).then(function (data)
            {
                result = data;
            });
        });
        it('should respond last two elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(1), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when limit and skips params are string', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({
                skip: '1',
                limit: '3'
            }).then(function (data)
            {
                result = data;
            });
        });
        it('should respond last two elements', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(1), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when sortDir param equals "ASC"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({sortDir: 'ASC'}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with 2 elements sorted ascending', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when sortDir param equals "DESC"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({sortDir: 'DESC'}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with 2 elements sorted descending', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual([phones[2], phones[1]], ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when sortDir param is invalid', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({sortDir: 'other string'}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with 2 elements sorted ascending', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when sortBy param equals "_id"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({sortBy: '_id'}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with 2 elements sorted by _id ', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when sortBy param equals "model"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({sortBy: 'model'}).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with 2 elements sorted by model', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual([phones[1], phones[0]], ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });

    describe('when sortBy param equals "state" and sortDir param equals "DESC"', function ()
    {
        var result;
        before(function ()
        {
            return DAO.search({
                sortBy: 'state',
                sortDir: 'DESC'
            }).then(function (data)
            {
                result = data;
            });
        });
        it('should respond with 2 elements sorted descending by model', function ()
        {
            expect(testHelper.convertFromMongo(result.results)).to.softEqual([phones[2], phones[1]], ['_id', '__v']);
        });
        it('should respond with total equal to 3', function ()
        {
            expect(result.total).to.equal(3);
        });
    });
});
