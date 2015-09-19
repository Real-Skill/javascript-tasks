'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var sinon = require('sinon');

describe('Lodash Functions training', function ()
{

    describe('after', function ()
    {
        var spy = sinon.spy();
        var params = datasets.after(spy);

        it('should match type of passing elements', function ()
        {
            expect(params).to.have.length(2);
            expect(typeof params[0]).to.eql('number');
        });
        it('should invoke the function after second call', function ()
        {
            var after = _.after.apply(_, params);

            after();
            expect(spy).to.have.been.callCount(0);
            after();
            expect(spy).to.have.been.callCount(1);
            after();
            expect(spy).to.have.been.callCount(2);
        });
    });

    describe('bind', function ()
    {
        var testFunc = function (complete)
        {
            return this.order + ' is ready: ' + complete;
        };
        var spy = sinon.spy(testFunc);
        var params = datasets.bind(spy);

        it('should match types of passing elements', function ()
        {
            var element1 = params[0] instanceof Function;
            var element2 = params[1] instanceof Object;
            var element3 = typeof params[2];

            expect(element1).to.eql(true);
            expect(element2).to.eql(true);
            expect(element3).to.eql('string');
        });
        it('should match lengths of passing elements', function ()
        {
            var ele1 = params[1];
            var ele2 = params[2];

            expect(Object.keys(ele1)).to.have.length(1);
            expect(ele2).to.have.length(3);
        });
        it('should bind function with proper object and argument "YES"', function ()
        {
            var bind = _.bind.apply(_, params);

            bind();
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.calledWith('YES');
            expect(spy).to.have.been.returned('PIZZA is ready: YES');
        });
    });

    describe('curry', function ()
    {
        var params = datasets.curry();
        var spy = sinon.spy(params[0]);
        params[0] = spy;
        var providedFunc = params[0];

        it('should match type of passing element', function ()
        {
            var element1 = params[0] instanceof Function;

            expect(element1).to.eql(true);
        });
        it('should multiply arguments and return 8', function ()
        {
            expect(providedFunc(2, 4, 1)).to.eql(8);
            expect(spy).to.have.been.callCount(1);
        });
        it('should return false if one of arguments are missing', function ()
        {
            expect(providedFunc(1, 2)).to.eql(false);
            expect(spy).to.have.been.callCount(2);
            expect(providedFunc(1)).to.eql(false);
            expect(spy).to.have.been.callCount(3);
            expect(providedFunc()).to.eql(false);
            expect(spy).to.have.been.callCount(4);
        });
        it('should call function to multiply given argument', function ()
        {
            var curry = _.curry.apply(_, params);
            var result = curry(3, 6, 2);

            expect(result).to.eql(36);
            expect(spy).to.have.been.callCount(5);
            result = curry(5)(10)(3);
            expect(result).to.eql(150);
            expect(spy).to.have.been.callCount(6);
            result = curry(_, 95)(2)(2);
            expect(result).to.eql(380);
            expect(spy).to.have.been.callCount(7);
        });
    });

    describe('flip', function ()
    {
        var params = datasets.flip();
        var spy = sinon.spy(params[0]);
        params[0] = spy;

        it('should match type of passing element', function ()
        {
            var element = params[0] instanceof Function;

            expect(params).to.have.length(1);
            expect(element).to.eql(true);
        });
        it('should return array built from arguments provided to function', function ()
        {
            var providedFunc = params[0];

            expect(providedFunc()).to.eql([]);
            expect(spy).to.have.been.callCount(1);
            expect(providedFunc(1, 2, 3, 4, 5)).to.eql([1, 2, 3, 4, 5]);
            expect(spy).to.have.been.callCount(2);
            expect(providedFunc(21, 43, 5, 6, 7, 8, 9, 32, 12, 32)).to.eql([21, 43, 5, 6, 7, 8, 9, 32, 12, 32]);
            expect(spy).to.have.been.callCount(3);
            expect(providedFunc(33, 21, 342)).to.eql([33, 21, 342]);
            expect(spy).to.have.been.callCount(4);
        });
        it('should return array with flipped arguments', function ()
        {
            var flip = _.flip.apply(_, params);
            var result = flip(1, 2, 3, 4, 5, 6);

            expect(result).to.eql([6, 5, 4, 3, 2, 1]);
            expect(spy).to.have.been.callCount(5);
            result = flip('a', 'b', 'c', 'd');
            expect(result).to.eql(['d', 'c', 'b', 'a']);
            expect(spy).to.have.been.callCount(6);
        });
    });

    describe('partial', function ()
    {
        var params = datasets.partial();
        var spy = sinon.spy(params[0]);
        params[0] = spy;

        it('should match type of passing element', function ()
        {
            var element1 = params[0] instanceof Function;
            var element2 = typeof params[1];
            var element3 = typeof params[2];

            expect(element1).to.eql(true);
            expect(element2).to.eql('string');
            expect(element3).to.eql('string');
        });
        it('should provided function return proper string', function ()
        {
            var providedFunc = params[0];

            expect(providedFunc('SUPERMAN', 'GOOD')).to.eql('SUPERMAN represents GOOD character');
            expect(spy).to.have.been.callCount(1);
            expect(providedFunc('Sauron', 'Evil')).to.eql('Sauron represents Evil character');
            expect(spy).to.have.been.callCount(2);
            expect(providedFunc('Hulk', 'Good')).to.eql('Hulk represents Good character');
            expect(spy).to.have.been.callCount(3);
            expect(providedFunc('VolDemort', 'very Evil')).to.eql('VolDemort represents very Evil character');
            expect(spy).to.have.been.callCount(4);
        });
        it('should invoke partial function', function ()
        {
            var partial = _.partial.apply(_, params);

            partial();
            expect(spy).to.have.been.callCount(5);
            expect(spy).to.have.been.calledWith('Batman', 'GOOD');
            expect(spy).to.have.been.returned('Batman represents GOOD character');
        });
    });

    describe('rearg', function ()
    {
        var testFunc = function (a, b, c, d)
        {
            return [a, b, c, d];
        };
        var spy = sinon.spy(testFunc);
        var params = datasets.rearg(spy);

        it('should match type of passing elements', function ()
        {
            expect(params).to.have.length(5);
            params.forEach(function (ele, index)
            {
                if (index !== 0) {
                    expect(typeof ele).to.eql('number');
                }
            });
        });
        it('should rearrange given arguments', function ()
        {
            var rearg = _.rearg.apply(_, params);

            rearg('a', 'b', 'c', 'd');
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.returned(['b', 'd', 'a', 'c']);
        });
    });

    describe('spread', function ()
    {
        var params = datasets.spread();
        var result;
        var spy = sinon.spy(params[0]);
        params[0] = spy;
        var spread = _.spread.apply(_, params);

        it('should match type of passing element', function ()
        {
            var type = params[0] instanceof Function;
            expect(type).to.eql(true);
        });
        it('should call function to start fight against the virus', function ()
        {
            result = spread(['HIV', 'started']);
            expect(spy).to.have.been.callCount(1);
            expect(result).to.eql('Treatment due to HIV virus has started!');
        });
        it('should call function when some treatment is ongoing', function ()
        {
            result = spread(['EBOLA', 'some']);
            expect(spy).to.have.been.callCount(2);
            expect(result).to.eql('EBOLA slowly killing you, I\'m so sorry');
        });
        it('should call function when none treatment', function ()
        {
            result = spread(['HIV']);
            expect(spy).to.have.been.callCount(3);
            expect(result).to.eql('You were killed by HIV');
        });
        it('should return false when no virus and treatment', function ()
        {
            result = spread([]);
            expect(spy).to.have.been.callCount(4);
            expect(result).to.eql(false);
        });
        it('should return false when no virus', function ()
        {
            result = spread(['', 'started']);
            expect(spy).to.have.been.callCount(5);
            expect(result).to.eql(false);
        });
    });
});

