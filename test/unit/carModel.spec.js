'use strict';

var expect = require('chai').expect;
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));
var CarModel = require('../../app/carModel');

describe('CarModel', function ()
{
    before(function ()
    {
        return mongoose.connectAsync('mongodb://localhost/test');
    });
    beforeEach(function ()
    {
        return CarModel.removeAsync({});
    });
    describe('save', function ()
    {
        describe('when color is pink', function ()
        {
            describe('and brand is Ferrari', function ()
            {
                it('should reject', function ()
                {
                    return new CarModel({brand: 'Ferrari', color: 'pink'}).saveAsync().then(function ()
                    {
                        throw new Error('Expected CarModel to reject such junk');
                    }, function swallowErrorCauseWeExpectThat()
                    {
                    }).then(function ()
                    {
                        return CarModel.findAsync();
                    }).then(function (result)
                    {
                        expect(result).to.have.length(0);
                    });
                });
            });
            describe('and brand is Cadillac', function ()
            {
                it('should be successfull', function ()
                {
                    return new CarModel({brand: 'Cadillac', color: 'pink'}).saveAsync().then(function ()
                    {
                        return CarModel.findAsync();
                    }).then(function (result)
                    {
                        expect(result).to.have.length(1);
                        expect(result[0].brand).to.eql('Cadillac');
                        expect(result[0].color).to.eql('pink');
                    });
                });
            });
        });

        describe('when color is red', function ()
        {
            describe('and brand is Ferrari', function ()
            {
                it('should be successfull', function ()
                {
                    return new CarModel({brand: 'Ferrari', color: 'red'}).saveAsync().then(function ()
                    {
                        return CarModel.findAsync();
                    }).then(function (result)
                    {
                        expect(result).to.have.length(1);
                        expect(result[0].brand).to.eql('Ferrari');
                        expect(result[0].color).to.eql('red');
                    });
                });
            });
        });
    });
});
