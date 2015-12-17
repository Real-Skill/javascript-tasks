'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var Guy = require('./Guy');
var chance = require('chance').Chance();

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

    describe('drop', function ()
    {
        describe('when number of elements to drop is not specified', function ()
        {
            it('should remove first element of array', function ()
            {
                var params = datasets.drop1();
                var array = params[0];
                expect(params.length).to.equal(1);
                expect(array.length).to.be.above(0);
                var result = _.drop.apply(_, params);
                expect(result.length).to.equal(array.length - 1);
                _.forEach(result, function (item, index)
                {
                    expect(item).to.equal(array[index + 1]);
                });

            });
        });
        describe('when number of elements to drop is specified', function ()
        {
            it('should remove first "n" elements of array', function ()
            {
                var params = datasets.drop2();
                var array = params[0];
                var numberOfElements = params[1];
                expect(params.length).to.equal(2);
                expect(array.length).to.be.above(0);
                expect(numberOfElements).to.be.above(-1);
                var result = _.drop.apply(_, params);
                expect(result.length).to.equal(Math.max(0, array.length - numberOfElements));
                _.forEach(result, function (item, index)
                {
                    expect(item).to.equal(array[index + numberOfElements]);
                });
            });
        });
    });

    describe('dropRight', function ()
    {
        describe('when number of elements to drop is specified', function ()
        {
            it('should remove last "n" elements of array', function ()
            {
                var params = datasets.dropRight();
                var array = params[0];
                var numberOfElements = params[1];
                expect(params.length).to.equal(2);
                expect(array.length).to.be.above(0);
                expect(numberOfElements).to.be.above(-1);
                var result = _.dropRight.apply(_, params);
                expect(result.length).to.equal(Math.max(0, array.length - numberOfElements));
                _.forEach(result, function (item, index)
                {
                    expect(item).to.equal(array[index]);
                });
            });
        });
    });

    describe('fill', function ()
    {
        describe('when array has 110 elements and each item is undefined', function ()
        {
            it('should override 100 elements elements of array with "*" starting from postion 3', function ()
            {
                var params = datasets.fill1();
                var array = params[0];
                expect(params.length).to.be.above(2);
                expect(array.length).to.be.equal(110);
                _.forEach(array, function (item)
                {
                    expect(item).to.equal(undefined);
                });
                expect(_.fill.apply(_, params)).to.equal(array);
                var i;
                for (i = 0; i < 3; i++) {
                    expect(array[i]).to.equal(undefined);
                }
                for (i = 3; i < 103; i++) {
                    expect(array[i]).to.equal('*');
                }

                for (i = 103; i < 110; i++) {
                    expect(array[i]).to.equal(undefined);
                }
            });
        });
        describe('when array has 1000 elements and no start and end params are specified', function ()
        {
            it('should override all elements of array with "donkey"', function ()
            {
                var params = datasets.fill2();
                var array = params[0];
                expect(params.length).to.equal(2);
                expect(array.length).to.be.equal(1000);
                _.forEach(array, function (item)
                {
                    expect(item).to.equal(undefined);
                });
                expect(_.fill.apply(_, params)).to.equal(array);
                _.forEach(array, function (item)
                {
                    expect(item).to.equal('donkey');
                });
            });
        });
    });

    describe('findIndex', function ()
    {
        describe('when looking for element whose "getName()" method returns "Jack"', function ()
        {
            it('should return it`s index', function ()
            {
                //Given
                var jack = new Guy('Jack');
                var array = new Array(1000);
                _.times(array.length, function (index)
                {
                    var name;
                    do {
                        name = chance.first();
                    } while (name === 'Jack');
                    array[index] = new Guy(name);
                });
                var jackIndex = Math.round(Math.random() * array.length);
                array[jackIndex] = jack;
                //When
                var params = datasets.findIndex1(array);
                expect(params[0]).to.equal(array);
                //Then
                expect(_.findIndex.apply(_, params)).to.equal(jackIndex);
            });
        });
        describe('when looking for element matching {name:"Jack", age:21}', function ()
        {
            it('should return it`s index', function ()
            {
                var params = datasets.findIndex2();
                var predicate = params[1];
                expect(predicate).to.eql({name: 'Jack', age: 21});
                expect(_.findIndex.apply(_, params)).to.eql(4);
            });
        });
    });

});

