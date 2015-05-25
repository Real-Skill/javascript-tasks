describe('DAO\'s search method', function ()
{
    'use strict';

    var DAO = require('../../app/index.js');
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

    it('should return promise', function (done)
    {
        if (testHelper.isPromise( DAO.search({}) )) {
            done();
        } else {
            done('Return is NOT promise');
        }
    });

    it('should returned data have proper body structure', function (done)
    {
        DAO.search({}).then(function(data)
        {
            if (data && data.hasOwnProperty('results') && data.hasOwnProperty('total') ) {
                done();
            } else {
                done('Return is NOT promise');
            }
        });
    });

    describe('when don\'t provide query params', function ()
    {
        it('should respond with 2 elements', function (done)
        {
            DAO.search({}).then( function( data ) {
                if (testHelper.isEquals( phones.slice( 0, 2 ), testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Results is NOT equals');
                }
            });
        });
    });

    describe('when provided skip param equals 2', function ()
    {
        it('should respond with one, third element', function (done)
        {
            DAO.search({ skip: 2 }).then( function( data ) {
                if (testHelper.isEquals( phones.slice( 2 ), testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Results is NOT equals');
                }
            });
        });
    });

    describe('when provided skip param equals 3', function ()
    {
        it('should respond with nothing', function (done)
        {
            DAO.search({ skip: 3 }).then( function( data ) {
                if (0 === data.results.length) {
                    done();
                } else {
                    done('Result is not empty');
                }
            });
        });
    });

    describe('when provided skip param equals -1', function ()
    {
        it('should respond first two elements', function (done)
        {
            DAO.search({ skip: -1 }).then( function( data ) {
                if (testHelper.isEquals( phones.slice(0, 2), testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Result is not empty');
                }
            });
        });
    });

    describe('when provided limit param equals 1', function ()
    {
        it('should respond with first two elements', function (done)
        {
            DAO.search({ limit: 1 }).then( function( data ) {
                if (testHelper.isEquals( phones.slice( 0, 1 ), testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Results is NOT equals');
                }
            });
        });
    });

    describe('when provided limit param equals 10', function ()
    {
        it('should respond all elements', function (done)
        {
            DAO.search({ limit: 10 }).then( function( data ) {
                if (testHelper.isEquals( phones, testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Result is not empty');
                }
            });
        });
    });

    describe('when provided limit param equals 0', function ()
    {
        it('should respond first two elements', function (done)
        {
            DAO.search({ limit: 0 }).then( function( data ) {
                if (testHelper.isEquals( phones.slice(0, 2), testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Result is not empty');
                }
            });
        });
    });

    describe('when provided limit param equals 3 and skip param equals 1', function ()
    {
        it('should respond with two last elements', function (done)
        {
            DAO.search({ skip: 1, limit: 3 }).then( function( data ) {
                if (testHelper.isEquals( phones.slice( 1 ), testHelper.convertFromMongo( data.results ), ['_id', '__v'])) {
                    done();
                } else {
                    done('Result is not empty');
                }
            });
        });
    });
});
