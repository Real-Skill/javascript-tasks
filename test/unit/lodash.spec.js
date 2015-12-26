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

    describe('first', function ()
    {
        describe('when array is empty', function ()
        {
            it('should return undefined', function ()
            {
                var params = datasets.first1();
                expect(params[0]).to.be.instanceof(Array);
                expect(_.first.apply(_, params)).to.equal(undefined);
            });
        });
        describe('when array is NOT empty', function ()
        {
            it('should return first element of the array', function ()
            {
                var params = datasets.first2();
                var array = params[0];
                expect(array.length).to.be.above(0);
                var firsElement = array[0];
                expect(_.first.apply(_, params)).to.equal(firsElement);
            });
        });
    });

    describe('flatten', function ()
    {
        describe('when isDeep is true', function ()
        {
            it('should flatten nested arrays recursively', function ()
            {
                var params = datasets.flaten1();
                var array = params[0];
                var hasNestedArray = _.any(array, function (item)
                {
                    if (_.isArray(item)) {
                        return _.any(item, function (nestedItem)
                        {
                            return _.isArray(nestedItem);
                        });
                    }
                    return false;
                });
                expect(hasNestedArray).to.equal(true);
                expect(_.flatten.apply(_, params)).to.eql([1, 2, 3, 4]);
            });
        });
        describe('when isDeep is false', function ()
        {
            it('should flatten only first level arrays', function ()
            {
                var params = datasets.flaten2();
                var array = params[0];
                var hasNestedArray = _.any(array, function (item)
                {
                    if (_.isArray(item)) {
                        return _.any(item, function (nestedItem)
                        {
                            return _.isArray(nestedItem);
                        });
                    }
                    return false;
                });
                expect(hasNestedArray).to.equal(true);
                expect(_.flatten.apply(_, params)).to.eql([1, 2, [3], 4]);
            });
        });
    });

    describe('indexOf', function ()
    {
        it('should return index of an element in an array', function ()
        {
            var params = datasets.indexOf();
            expect(_.indexOf.apply(_, params)).to.equal(2);
        });
    });

    describe('initial', function ()
    {
        it('should return slice of an array without last element', function ()
        {
            var params = datasets.initial();
            expect(_.initial.apply(_, params)).to.eql(['John', 'Doe']);
        });
    });
    describe('intersection', function ()
    {
        describe('when 3 arrays are provided that have overlapping elements and each array is at least 5 elements long', function ()
        {
            it('should create an array of unique values that are included in all of the provided arrays ', function ()
            {
                var params = datasets.intersection();
                _.forEach(params, function (item)
                {
                    expect(item.length).to.be.above(4);
                });
                expect(_.intersection.apply(_, params)).to.eql([2, 3, 1]);
            });
        });
    });
    describe('last', function ()
    {
        it('should return last element of array', function ()
        {
            var params = datasets.last1();
            expect(_.last.apply(_, params)).to.eql(9);
        });
        it('should not modify the array', function ()
        {
            var params = datasets.last1();
            var arrayLength = params[0].length;
            _.last.apply(_, params);
            expect(params[0].length).to.equal(arrayLength);
        });
        it('should return last character of a string', function ()
        {
            var params = datasets.last2();
            expect(_.isString(params[0])).to.equal(true);
            expect(_.last.apply(_, params)).to.eql('9');
        });
    });
    describe('pull', function ()
    {
        it('should remove values from an array', function ()
        {
            var params = datasets.pull();
            var array = params[0];
            var initialArrayLength = array.length;
            _.pull.apply(_, params);
            expect(array.length).to.below(initialArrayLength);
            expect(array).to.eql([3, 4, 5, 6]);
        });
    });
    describe('pullAt', function ()
    {
        describe('when indexes are provided as array [4,9]', function ()
        {
            it('should remove elements from array corresponding to the given indexes and returns an array of the removed elements', function ()
            {
                var params = datasets.pullAt();
                expect(params[1]).to.eql([4, 9]);
                expect(_.pullAt.apply(_, params)).to.eql([100, 200]);
            });
            it('should mutate the array', function ()
            {
                var params = datasets.pullAt();
                var array = params[0];
                var initialArrayLength = array.length;
                _.pullAt.apply(_, params);
                expect(array.length).to.be.below(initialArrayLength);
            });
        });
    });
    describe('remove', function ()
    {
        it('should remove elements that have truthy property `online`', function ()
        {
            var params = datasets.remove();
            var array = params[0];
            var predicate = params[1];
            expect(predicate).to.eql('online');
            var initialArrayLength = array.length;
            expect(initialArrayLength).to.be.above(3);
            expect(_.remove.apply(_, params)).to.eql([{online: 1}, {online: true}, {online: 'yes'}]);
            expect(array.length).to.be.below(initialArrayLength);
        });
    });
    describe('take', function ()
    {
        it('should remove 3 first elements of array bigger than 5 elements', function ()
        {
            var params = datasets.take();
            var array = params[0];
            var initialArrayLength = array.length;
            expect(initialArrayLength).to.be.above(5);
            expect(_.take.apply(_, params)).to.eql([{online: 1}, 1, 2, '3', 4]);
            expect(array.length).to.equal(initialArrayLength);
        });
    });
    describe('union', function ()
    {
        it('should merge 3 different arrays each having 2 elements', function ()
        {
            var params = datasets.union();
            expect(params.length).to.equal(3);
            _.forEach(params, function (array)
            {
                expect(array.length).to.equal(2);
            });
            expect(_.union.apply(_, params)).to.eql([1, 2, 3]);
        });
    });
    describe('uniq', function ()
    {
        describe('given elements are considered equal if they have the same value of x property', function ()
        {
            it('should return duplicate-free version of array', function ()
            {
                var params = datasets.uniq1();
                var array = params[0];
                var initialLength = array.length;
                var result = _.uniq.apply(_, params);
                expect(result).to.eql([{x: 1}, {x: 2}, 3]);
                expect(result.length).to.be.below(initialLength);
            });
        });
        describe('given elements are considered equal if they have the same value of x and y properties', function ()
        {
            it('should return duplicate-free version of array', function ()
            {
                var params = datasets.uniq2();
                var array = params[0];
                var initialLength = array.length;
                var result = _.uniq.apply(_, params);
                expect(result).to.eql([{x: 1, y: 1}, {x: 1, y: 2}, 3]);
                expect(result.length).to.be.below(initialLength);
            });
        });
    });
    describe('without', function ()
    {
        it('should remove specific elements from an array', function ()
        {
            var params = datasets.without();
            var array = params[0];
            var initialArrayLength = array.length;
            var result = _.without.apply(_, params);
            expect(result).to.eql([1, 2, 1, 3, 4]);
            expect(result.length).to.be.below(initialArrayLength);
        });
    });
    describe('xor', function ()
    {
        it('should return only elements that do not exist in both arrays', function ()
        {
            var params = datasets.xor();
            _.forEach(params, function (item)
            {
                expect(item.length).to.be.above(2);
            });
            expect(_.xor.apply(_, params)).to.eql([1, 2]);
        });
    });
});

