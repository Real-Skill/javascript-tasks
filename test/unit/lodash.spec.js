'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function ()
{
    describe('Number functions', function ()
    {
        describe('clamp', function ()
        {
            describe('when first param is lower than second param', function ()
            {
                it('should return value equal second param', function ()
                {
                    var params = datasets.clamp1();
                    expect(params[0]).to.be.below(params[1]);
                    expect(_.clamp.apply(_, params)).to.eql(3);
                });
            });

            describe('when first param is higher than last param', function ()
            {
                it('should return value equal third param', function ()
                {
                    var params = datasets.clamp2();
                    expect(params[0]).to.be.above(params[2]);
                    expect(_.clamp.apply(_, params)).to.eql(7);
                });
            });

            describe('when first param is in range', function ()
            {
                it('should return value equal first param', function ()
                {
                    var params = datasets.clamp3();
                    expect(params).to.have.length(3);
                    expect(params[1]).to.be.below(params[2]);
                    expect(params[1]).to.be.below(params[0]);
                    expect(params[0]).to.be.below(params[2]);
                    expect(_.clamp.apply(_, params)).to.eql(5);
                });
            });
        });

        describe('inRange', function ()
        {
            describe('when first param is in range', function ()
            {
                it('should return true', function ()
                {
                    var params = datasets.inRange1();
                    expect(params).to.have.length(3);
                    expect(params[0]).to.be.within(params[1], params[2]);
                    expect(_.inRange.apply(_, params)).to.eql(true);
                });
            });

            describe('when first param is lower than second param', function ()
            {
                it('should return false', function ()
                {
                    var params = datasets.inRange2();
                    expect(params).to.have.length(3);
                    expect(params[0]).to.be.below(params[1]);
                    expect(_.inRange.apply(_, params)).to.eql(false);
                });
            });

            describe('when first param is upper than third param', function ()
            {
                it('should return false', function ()
                {
                    var params = datasets.inRange3();
                    expect(params).to.have.length(3);
                    expect(params[0]).to.be.above(params[2]);
                    expect(_.inRange.apply(_, params)).to.eql(false);
                });
            });

            describe('when first param is in range', function ()
            {
                it('should return true', function ()
                {
                    var params = datasets.inRange4();
                    expect(params).to.have.length(2);
                    expect(params[0]).to.be.below(params[1]);
                    expect(_.inRange.apply(_, params)).to.eql(true);
                });
            });

            describe('when first param is below zero', function ()
            {
                it('should return false', function ()
                {
                    var params = datasets.inRange5();
                    expect(params).to.have.length(2);
                    expect(params[0]).to.be.below(params[1]);
                    expect(_.inRange.apply(_, params)).to.eql(false);
                });
            });

            describe('when first param is above second param', function ()
            {
                it('should return false', function ()
                {
                    var params = datasets.inRange6();
                    expect(params).to.have.length(2);
                    expect(params[0]).to.be.above(params[1]);
                    expect(_.inRange.apply(_, params)).to.eql(false);
                });
            });

            describe('when first param is equal second param', function ()
            {
                it('should return false', function ()
                {
                    var params = datasets.inRange7();
                    expect(params).to.have.length(2);
                    expect(params[0]).to.eql(params[1]);
                    expect(_.inRange.apply(_, params)).to.eql(false);
                });
            });
        });

        describe('random', function ()
        {
            describe('when third param has been added', function ()
            {
                it('should return random float number between lower and upper', function ()
                {
                    var params = datasets.random1();
                    expect(params).to.have.length(3);
                    expect(params[0]).to.be.below(params[1]);
                    expect(Number.isInteger(_.random.apply(_, params))).to.eql(false);
                    expect(_.random.apply(_, params)).to.be.within(params[0], params[1]);
                });
            });

            describe('when third param has not been added', function ()
            {
                it('should return random integer number value between lower and upper', function ()
                {
                    var params = datasets.random2();
                    expect(params).to.have.length(2);
                    expect(params[0]).to.be.below(params[1]);
                    expect(Number.isInteger(_.random.apply(_, params))).to.eql(true);
                    expect(_.random.apply(_, params)).to.be.within(params[0], params[1]);
                });
            });
        });
    });
});
