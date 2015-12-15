'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));
var sinon = require('sinon');
var Promise = require('bluebird');
var app = require('../../app/app');

function noop()
{
}

describe('Promise bug', function ()
{
    var a;
    var b;
    var c;
    var valueReturnedByA;
    var valueReturnedByB;

    describe('when a resolves', function ()
    {
        beforeEach(function ()
        {
            valueReturnedByA = Math.random();
            valueReturnedByB = Math.random();
            a = sinon.spy(function ()
            {
                return Promise.resolve(valueReturnedByA);
            });
            b = sinon.spy(function ()
            {
                return Promise.resolve(valueReturnedByB);
            });
            c = sinon.spy();
        });
        describe('and b resolves', function ()
        {
            it('should invoke a', function ()
            {
                return app(a, b, c).finally(function ()
                {
                    expect(a).to.have.been.callCount(1);
                });
            });
            it('should invoke b with value returned by a', function ()
            {
                return app(a, b, c).finally(function ()
                {
                    expect(b).to.have.been.callCount(1);
                    expect(b).to.have.been.calledWith(valueReturnedByA);
                });
            });
            it('should resolve with value returned by b', function ()
            {
                return app(a, b, c).then(function (value)
                {
                    expect(value).to.equal(valueReturnedByB);
                });
            });
            it('should NOT invoke c', function ()
            {
                return app(a, b, c).finally(function ()
                {
                    expect(c).to.have.been.callCount(0);
                });
            });
        });
        describe('and b rejects', function ()
        {
            var valueRejectedByB;
            beforeEach(function ()
            {
                valueRejectedByB = Math.random();
                b = sinon.spy(function ()
                {
                    return Promise.reject(valueRejectedByB);
                });
            });
            it('should NOT invoke c', function ()
            {
                return app(a, b, c).catch(noop).finally(function ()
                {
                    expect(a).to.have.been.callCount(1);
                    expect(b).to.have.been.callCount(1);
                    expect(c).to.have.been.callCount(0);
                });
            });
            it('should reject whole promise chain', function ()
            {
                var d = sinon.spy();
                return app(a, b, c).catch(d).finally(function ()
                {
                    expect(d).to.have.been.callCount(1);
                    expect(d).to.have.been.calledWith(valueRejectedByB);
                });
            });
        });
    });
    describe('when a rejects', function ()
    {
        var valueRejectedByA;

        beforeEach(function ()
        {
            valueRejectedByA = Math.random();
            a = sinon.spy(function ()
            {
                return Promise.reject(valueRejectedByA);
            });
            b = sinon.spy();
            c = sinon.spy();
        });
        it('should invoke a', function ()
        {
            return app(a, b, c).catch(noop).finally(function ()
            {
                expect(a).to.have.been.callCount(1);
            });
        });
        it('should invoke c', function ()
        {
            return app(a, b, c).catch(noop).finally(function ()
            {
                expect(c).to.have.been.callCount(1);
            });
        });
        it('should NOT invoke b', function ()
        {
            return app(a, b, c).catch(noop).finally(function ()
            {
                expect(b).to.have.been.callCount(0);
            });
        });
        describe('when c resolves', function ()
        {
            var valueReturnedByC;

            beforeEach(function ()
            {
                valueReturnedByC = Math.random();
                c = sinon.spy(function ()
                {
                    return valueReturnedByC;
                });
            });

            it('should resolve whole chain with value returned by c', function ()
            {
                var d = sinon.spy();
                return app(a, b, c).then(d).finally(function ()
                {
                    expect(d).to.have.been.callCount(1);
                    expect(d).to.have.been.calledWith(valueReturnedByC);
                });
            });
        });
        describe('when c rejects', function ()
        {
            var valueRejectedByC;

            beforeEach(function ()
            {
                valueRejectedByC = Math.random();
                c = sinon.spy(function ()
                {
                    throw valueRejectedByC;
                });
            });

            it('should reject whole promise chain', function ()
            {
                var d = sinon.spy();
                return app(a, b, c).catch(d).finally(function ()
                {
                    expect(d).to.have.been.callCount(1);
                    expect(d).to.have.been.calledWith(valueRejectedByC);
                });
            });
        });
    });

});

