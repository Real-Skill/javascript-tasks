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
        it('should invoke the function after second call', function () {
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

    describe('bind', function () {
        it('should bind function with object and argument "YES"', function () {
            var testFunc = function (complete) {
                return this.order + ' is ready: ' + complete;
            };
            var spy = sinon.spy(testFunc);
            var params = datasets.bind(spy);
            var bind = _.bind.apply(_, params);

            bind();
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.calledWith('YES');
            expect(spy).to.have.been.returned('PIZZA is ready: YES');
        });
    });

    //describe.only('curry', function () {
    //    it('should', function () {
    //        var abc = function (a,b,c) {
    //            return a+b+c;
    //        };
    //
    //        var params = datasets.curry();
    //        var result = _.curry(abc);
    //        expect(_.curry.apply(_, params)).to.equal(result);
    //    });
    //});
    //
    //describe.only('delay', function () {
    //    it('should invoke function after 3 seconds', function () {
    //        var testFunc = function (x) {
    //            console.log(x);
    //        };
    //        var spy = sinon.spy(testFunc);
    //        var params = datasets.delay(spy);
    //        var delay = _.delay.apply(_, params);
    //
    //        delay();
    //        expect(spy).to.have.been.callCount(1);
    //
    //    });
    //});

    describe('flip', function () {
        it('should return array with flipped arguments', function () {
            var params = datasets.flip();
            var flip = _.flip.apply(_,params);
            var result = flip(1,2,3,4,5,6);
            var argumentType = typeof params[0];
            expect(argumentType).to.eql('function');
            expect(result).to.eql([6,5,4,3,2,1]);
            result = flip('a','b','c','d');
            expect(result).to.eql(['d','c','b','a']);

        });
    });

    describe('overArgs',function () {
        it('should smthg', function () {

        });
    });
});

