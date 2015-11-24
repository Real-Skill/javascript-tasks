'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var chai = require('chai');
var expect = chai.expect;
var expand = require('../app/expander');
Promise.longStackTraces();

function defer()
{
    var resolve = null, reject = null;
    var promise = new Promise(function ()
    {
        resolve = arguments[0];
        reject = arguments[1];
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise
    };
}

describe('Expander', function ()
{
    var defers;
    var peopleDefer;
    var petsDefer;
    var dbMock;
    var data;
    var expectedResult;

    function resolve(collections)
    {
        _.forEach(collections, function (collectionName)
        {
            defers[collectionName].resolve(data[collectionName]);
        });
    }


    beforeEach(function ()
    {
        peopleDefer = defer();
        petsDefer = defer();
        defers = {
            people: peopleDefer,
            pets: petsDefer
        };
        dbMock = {
            getAll: function (collectionName)
            {
                var defer = defers[collectionName];
                if (!defer) {
                    throw new Error('Unsupported collection');
                }
                return defer.promise;
            }
        };
        data = {
            pets: [
                {
                    type: 'pets',
                    id: 1,
                    attributes: {
                        name: 'Dogbert'
                    },
                    relationships: {
                        owner: {type: 'people', id: 1}
                    }
                }
            ],
            people: [
                {
                    type: 'people',
                    id: 1,
                    attributes: {
                        name: 'Dilbert'
                    }

                }
            ]
        };
        expectedResult = {
            people: {
                1: {
                    type: 'people',
                    id: 1,
                    attributes: {
                        name: 'Dilbert'
                    }
                }
            },
            pets: {
                1: {
                    type: 'pets',
                    id: 1,
                    attributes: {
                        name: 'Dogbert'
                    },
                    relationships: {
                        owner: {
                            type: 'people',
                            id: 1,
                            attributes: {
                                name: 'Dilbert'
                            }
                        }
                    }
                }
            }
        };
    });

    describe('when people resolve before pets', function ()
    {
        it('should resolve with properly expanded results', function ()
        {
            return Promise.all([expand(dbMock), resolve(['people', 'pets'])]).spread(function (result)
            {
                expect(result).to.eql(expectedResult);
            });
        });
    });
    describe('when pets resolve before people', function ()
    {
        it('should resolve with properly expanded results', function ()
        {
            return Promise.all([expand(dbMock), resolve(['pets', 'people'])]).spread(function (result)
            {
                expect(result).to.eql(expectedResult);
            });
        });
    });

});

