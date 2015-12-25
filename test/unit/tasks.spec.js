'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var tasks = require('../../app/tasks');

describe('Lodash tasks', function ()
{
    describe('given an array', function ()
    {
        it('should be able to remove elements at index 5 and 7 and return new array with those elements', function ()
        {
            //Given
            var element5 = Math.random();
            var element6 = Math.random();
            var element7 = Math.random();
            var element9 = Math.random();
            var array = [0, 1, 2, 3, 4, element5, element6, element7, 8, element9];
            var solution = tasks.task1(array);
            var method = solution.method;
            var params = solution.params;
            //WhenThen
            expect(_[method].apply(_, params)).to.eql([element5, element7]);
            expect(_[method].apply(_, params)).to.eql([element6, element9]);
        });

        it('should be able to remove elements that have truthy value of property `alive`', function ()
        {
            //Given
            var element1 = {alive: 1};
            var element2 = {alive: true};
            var element3 = {alive: 'yes'};
            var element4 = {alive: 0};
            var array = _.fill(new Array(100), 1).map(function ()
            {
                if (Math.random() < 0.3) {
                    return {alive: false};
                } else if (Math.random() < 0.6) {
                    return Math.random();
                } else {
                    return 'abc';
                }
            });
            array.push(element1);
            array.push(element2);
            array.push(element3);
            array.push(element4);
            array = _.shuffle(array);
            var solution = tasks.task2(array);
            var method = solution.method;
            var params = solution.params;
            //When
            var result = _[method].apply(_, params);
            //Then
            expect(result.length).to.equal(3);
            expect(result).to.contain(element1);
            expect(result).to.contain(element2);
            expect(result).to.contain(element3);
            expect(array).to.not.contain(element1);
            expect(array).to.not.contain(element2);
            expect(array).to.not.contain(element3);
            expect(array.length).to.equal(101);
        });
        it('should be able to remove elements that have value of property `alive` equal to `yes`', function ()
        {
            //Given
            var element1 = {alive: 1};
            var element2 = {alive: true};
            var element3 = {alive: 'yes'};
            var element4 = {alive: 0};
            var array = _.fill(new Array(100), 1).map(function ()
            {
                if (Math.random() < 0.3) {
                    return {alive: false};
                } else if (Math.random() < 0.6) {
                    return Math.random();
                } else {
                    return 'abc';
                }
            });
            array.push(element1);
            array.push(element2);
            array.push(element3);
            array.push(element4);
            array = _.shuffle(array);
            var solution = tasks.task3(array);
            var method = solution.method;
            var params = solution.params;
            //When
            var result = _[method].apply(_, params);
            //Then
            expect(result.length).to.equal(1);
            expect(result).to.contain(element3);
            expect(array).to.not.contain(element3);
            expect(array.length).to.equal(103);
        });
    });

    it('should be possible to join variable number of arrays and make results unique', function ()
    {
        //Given
        var items = {};
        var arrays = [];
        _.times(_.random(3, 10), function ()
        {
            var array = [];
            arrays.push(array);
            _.times(_.random(50, 100), function ()
            {
                var value = _.random(1, 1000);
                array.push('' + value);
                items[value] = true;
            });
        });
        var solution = tasks.task4(arrays);
        var method = solution.method;
        var params = solution.params;
        //WhenThen
        expect(_[method].apply(_, params).sort()).to.eql(_.keys(items).sort());
    });
});
