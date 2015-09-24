/*jshint -W030 */
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

    it('should return promise', function ()
    {
        //noinspection BadExpressionStatementJS
        expect(DAO.search({})).to.be.promise;
    });

    it('should returned data have proper body structure', function ()
    {
        return DAO.search({}).then(function (data)
        {
            expect(data).to.have.property('results');
            expect(data).to.have.property('total');
        });
    });

    describe('when don\'t provide query params', function ()
    {
        it('should respond with 2 elements', function ()
        {
            return DAO.search({}).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
            });
        });
    });

    describe('when provided skip param equals 2', function ()
    {
        it('should respond with one, third element', function ()
        {
            return DAO.search({ skip: 2 }).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones.slice(2), ['_id', '__v']);
            });
        });
    });

    describe('when provided skip param equals 3', function ()
    {
        it('should respond with nothing', function ()
        {
            return DAO.search({ skip: 3 }).then(function (data)
            {
                expect(data.results).to.have.length(0);
            });
        });
    });

    describe('when provided skip param equals -1', function ()
    {
        it('should respond first two elements', function ()
        {
            return DAO.search({ skip: -1 }).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
            });
        });
    });

    describe('when provided limit param equals 1', function ()
    {
        it('should respond with first two elements', function ()
        {
            return DAO.search({ limit: 1 }).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones.slice(0, 1), ['_id', '__v']);
            });
        });
    });

    describe('when provided limit param equals 10', function ()
    {
        it('should respond all elements', function ()
        {
            return DAO.search({ limit: 10 }).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones, ['_id', '__v']);
            });
        });
    });

    describe('when provided limit param equals 0', function ()
    {
        it('should respond first two elements', function ()
        {
            return  DAO.search({ limit: 0 }).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones.slice(0, 2), ['_id', '__v']);
            });
        });
    });

    describe('when provided limit param equals 3 and skip param equals 1', function ()
    {
        it('should respond with two last elements', function ()
        {
            return DAO.search({ skip: 1, limit: 3 }).then(function (data)
            {
                expect(testHelper.convertFromMongo(data.results)).to.softEqual(phones.slice(1), ['_id', '__v']);
            });
        });
    });
});
