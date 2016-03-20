'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var chance = require('chance').Chance();
var sinon = require('sinon');

describe('Lodash Functions training', function ()
{
    describe('after', function () {
        it('should', function () {
            var spy = sinon.spy();
            var params = datasets.after(spy);

            var after = _.after.apply(_, params);
            after();
            expect(spy).to.have.been.callCount(0);
            after();
            expect(spy).to.have.been.callCount(1);
            after();
            expect(spy).to.have.been.callCount(2);
        });
    });
});

