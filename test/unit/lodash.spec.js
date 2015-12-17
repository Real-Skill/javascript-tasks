'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function ()
{
    describe('chunk', function ()
    {
        it('should split array into chunks of 3 elements', function ()
        {
            expect(_.chunk.apply(_, datasets.chunk())).to.eql([[1, 2, 3], [4, 5, 6], [7, 8]]);
        });
        it('should split array into chunks of 2 elements', function ()
        {
            expect(_.chunk.apply(_, datasets.chunk2())).to.eql([[1, 2], [3, 4], [5, 6], [7, 8]]);
        });
    });

    describe('compact', function ()
    {
        it('should remove falsy elements', function ()
        {
            var params = datasets.compact();
            var array = params[0];
            expect(array).to.include();
            expect(array).to.include('');
            expect(array).to.include(null);
            expect(array).to.include(0);
            expect(array).to.include(false);
            expect(_.compact.apply(_, params)).to.eql([1, 2, 3]);
        });
    });

    describe('difference', function ()
    {
        describe('when no differences are found between base and 2 exclusion arrays', function ()
        {
            it('should return empty array', function ()
            {
                var params = datasets.difference1();
                var baseArray = params[0];
                var exclusion1 = params[1];
                var exclusion2 = params[2];
                expect(baseArray.length).to.be.above(0);
                expect(exclusion1.length).to.be.above(0);
                expect(exclusion1.length).to.be.below(baseArray.length);
                expect(exclusion2.length).to.be.above(0);
                expect(exclusion2.length).to.be.below(baseArray.length);
                expect(_.difference.apply(_, params)).to.eql([]);
            });
        });

        describe('when differences are found between base and exclusion array', function ()
        {
            it('should return non-empty array', function ()
            {
                var params = datasets.difference2();
                var baseArray = params[0];
                var exclusion1 = params[1];
                expect(baseArray.length).to.be.above(0);
                expect(exclusion1.length).to.be.above(0);
                expect(_.difference.apply(_, params)).to.eql([null, false, 2, undefined, 3]);
            });
        });
    });

});

