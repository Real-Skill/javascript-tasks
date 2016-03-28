'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var sinon = require('sinon');

describe('Lodash Functions training', function () {

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
        it('should bind function with proper object and argument "YES"', function () {
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

    describe('curry', function () {
        it('should call function to cube given argument', function () {
            var params = datasets.curry();
            var spy = sinon.spy(params[0]);
            params[0] = spy;
            var curry = _.curry.apply(_, params);
            var result = curry(3);

            expect(spy).to.have.been.callCount(1);
            expect(result).to.eql(27);
            result = curry(5);
            expect(spy).to.have.been.callCount(2);
            expect(result).to.eql(125);
        });
    });

    describe('flip', function () {
        it('should return array with flipped arguments', function () {
            var params = datasets.flip();
            var flip = _.flip.apply(_, params);
            var result = flip(1, 2, 3, 4, 5, 6);
            var argumentType = typeof params[0];
            expect(argumentType).to.eql('function');
            expect(result).to.eql([6, 5, 4, 3, 2, 1]);
            result = flip('a', 'b', 'c', 'd');
            expect(result).to.eql(['d', 'c', 'b', 'a']);
        });
    });

    describe('partial', function () {
        it('should invoke partial function', function () {
            var testFunc = function (hero, goodOrEvil) {
                return hero + ' represents ' + goodOrEvil + ' character';
            };
            var spy = sinon.spy(testFunc);
            var params = datasets.partial(spy);
            var partial = _.partial.apply(_, params);

            partial();
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.calledWith('Batman', 'GOOD');
            expect(spy).to.have.been.returned('Batman represents GOOD character');
        });
    });

    describe('rearg', function () {
        it('should rearrange given arguments', function () {
            var testFunc = function (a, b, c, d) {
                return [a, b, c, d];
            };
            var spy = sinon.spy(testFunc);
            var params = datasets.rearg(spy);
            var rearg = _.rearg.apply(_, params);

            rearg('a', 'b', 'c', 'd');
            expect(params).to.include(0, 1, 2, 3);
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.returned(["b", "d", "a", "c"]);
        });
    });

    describe('spread', function () {
        var params = datasets.spread();
        var result;
        var spy = sinon.spy(params[0]);
        params[0] = spy;
        var spread = _.spread.apply(_, params);

        it('should call function to start fight against the virus', function () {
            result = spread(['HIV', 'started']);
            expect(spy).to.have.been.callCount(1);
            expect(result).to.eql('Treatment due to HIV virus has started!');
        });
        it('should call function when some treatment is ongoing', function () {
            result = spread(['EBOLA', 'some']);
            expect(spy).to.have.been.callCount(2);
            expect(result).to.eql('EBOLA slowly killing you, I\'\m so sorry');
        });
        it('should call function when none treatment', function () {
            result = spread(['HIV']);
            expect(spy).to.have.been.callCount(3);
            expect(result).to.eql('You were killed by HIV');
        });
        it('should return false when no virus and treatment', function () {
            result = spread([]);
            expect(spy).to.have.been.callCount(4);
            expect(result).to.eql(false);
        });
        it('should return false when no virus', function () {
            result = spread(['','started']);
            expect(spy).to.have.been.callCount(5);
            expect(result).to.eql(false);
        });
    });
});

