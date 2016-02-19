'use strict';

var expect = require('chai').expect;
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));
var app = require('../../app/app');

describe('app', function ()
{
    before(function ()
    {
        return mongoose.connectAsync('mongodb://localhost/test');
    });
    beforeEach(function ()
    {
        return mongoose.models.event.removeAsync({});
    });
    describe('createEvent', function ()
    {
        it('should return successfully', function ()
        {
            var event = {
                attributes: {
                    name: 'Meet Tom',
                    type: 'meeting'
                }
            };
            return app.createEvent(event).then(function ()
            {
                return mongoose.models.event.findAsync();
            }).then(function (result)
            {
                expect(result).to.have.length(1);
                expect(result).to.have.deep.property('0.attributes.name', 'Meet Tom');
                expect(result).to.have.deep.property('0.attributes.type', 'meeting');
            });
        });
    });
    describe('model.save', function ()
    {
        it('should return successfully', function ()
        {
            var event = {
                attributes: {
                    name: 'Write blog',
                    type: 'marketing'
                }
            };
            return new mongoose.models.event(event).saveAsync().then(function ()
            {
                return mongoose.models.event.findAsync();
            }).then(function (result)
            {
                expect(result).to.have.length(1);
                expect(result).to.have.deep.property('0.attributes.name', 'Write blog');
                expect(result).to.have.deep.property('0.attributes.type', 'marketing');
            });
        });
    });
});
