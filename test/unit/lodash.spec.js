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
            expect(_.compact.apply(_, params)).to.eql([1, 2, 3]);
        });
    });

});

