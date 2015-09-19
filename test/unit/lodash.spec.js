'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function ()
{
    before(function ()
    {
        /*jshint -W121*/
        Array.prototype.checkIfArrayIsUnique = function ()
        {
            this.sort();
            for (var i = 1; i < this.length; i++) {
                if (this[i - 1] === this[i]) {
                    return false;
                }
            }
            return true;
        };
    });

    describe('Math functions', function ()
    {
        describe('add', function ()
        {
            var params, augend, addend;

            before(function ()
            {
                params = datasets.add();
                augend = params[0];
                addend = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof augend).to.eql('number');
                expect(typeof addend).to.eql('number');
                expect(addend).to.be.below(0);
            });

            it('should return total', function ()
            {
                expect(_.add.apply(_, datasets.add(params))).to.eql(-2);
            });
        });

        describe('ceil', function ()
        {
            var params, number, precision;

            before(function ()
            {
                params = datasets.ceil();
                number = params[0];
                precision = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof number).to.eql('number');
                expect(typeof precision).to.eql('number');

                expect(Number.isInteger(number)).to.not.eql(true);
                expect(precision).to.not.eql(0);
                expect(number).to.not.eql(1.85);
            });

            it('should return round up number', function ()
            {
                expect(_.ceil.apply(_, datasets.ceil(params))).to.eql(1.85);
            });
        });

        describe('divide', function ()
        {
            var params, dividend, divisor;

            before(function ()
            {
                params = datasets.divide();
                dividend = params[0];
                divisor = params[1];
            });

            it('should verify params', function ()
            {
                expect(typeof dividend).to.eql('number');
                expect(typeof divisor).to.eql('number');
                expect(dividend).to.not.eql(Infinity);

                expect(params).to.have.length(2);
            });

            it('should divide two numbers', function ()
            {
                expect(_.divide.apply(_, datasets.divide(params))).to.eql(Infinity);
            });

        });

        describe('floor', function ()
        {
            var params, number, precision;

            before(function ()
            {
                params = datasets.floor();
                number = params[0];
                precision = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof number).to.eql('number');
                expect(typeof precision).to.eql('number');
                expect(number).to.not.eql(5.47);

                expect(Number.isInteger(number)).to.not.eql(true);
            });

            it('should return number round down', function ()
            {
                expect(_.floor.apply(_, datasets.floor(params))).to.eql(5.47);
            });
        });

        describe('max', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.max();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);

                _(array).forEach(function (value)
                {
                    expect(typeof value).to.eql('number');
                });

                expect(array).to.have.length(5);
                expect(array.checkIfArrayIsUnique()).to.eql(true);
            });

            it('should find and return max value in user array', function ()
            {
                expect(_.max.apply(_, datasets.max(params))).to.eql(5);
            });
        });


        describe('maxBy', function ()
        {
            // I don't see any meaningful use maxBy as second param for array and object
            describe('maxBy1', function ()
            {

                var params, obj, fun;

                before(function ()
                {
                    params = datasets.maxBy1();
                    obj = params[0];
                    fun = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(obj instanceof Array).to.eql(true);
                    expect(fun instanceof Function).to.eql(true);

                    _(obj).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });

                    expect(obj).to.have.length(3);
                });

                it('should return max object from array using function', function ()
                {
                    expect(_.maxBy.apply(_, datasets.maxBy1(params))).to.eql({a: 3, b: 3});
                });
            });


            describe('maxBy2', function ()
            {
                var params, array, str;

                before(function ()
                {
                    params = datasets.maxBy2();
                    array = params[0];
                    str = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(typeof str).to.eql('string');

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });

                    expect(array).to.have.length(3);
                });

                it('should return max object from array using string', function ()
                {
                    expect(_.maxBy.apply(_, datasets.maxBy2(params))).to.eql({Name: 'Edwin', Gold: 2500});
                });
            });
        });

        describe('mean', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.mean();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);

                _(array).forEach(function (value)
                {
                    expect(typeof value).to.eql('number');
                });

                expect(array).to.have.length(4);
                expect(array.checkIfArrayIsUnique()).to.eql(true);
            });

            it('should find mean value in array', function ()
            {
                expect(_.mean.apply(_, params)).to.eql(3.5);
            });
        });

        describe('meanBy', function ()
        {
            // I don't see any meaningful use meanBy as second param for array and object
            describe('meanBy1', function ()
            {

                var params, array, fun;

                before(function ()
                {
                    params = datasets.meanBy1();
                    array = params[0];
                    fun = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(fun instanceof Function).to.eql(true);

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });

                    expect(array).to.have.length(3);
                });

                it('should return mean object from array using function', function ()
                {
                    expect(_.meanBy.apply(_, datasets.meanBy1(params))).to.eql(27);
                });
            });

            describe('meanBy2', function ()
            {
                var params, array, str;

                before(function ()
                {
                    params = datasets.meanBy2();
                    array = params[0];
                    str = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(typeof str).to.eql('string');

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });

                    expect(array).to.have.length(4);
                });

                it('should return mean object from array using string', function ()
                {
                    expect(_.meanBy.apply(_, datasets.meanBy2(params))).to.eql(3);
                });
            });
        });

        describe('min', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.min();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);
                _(array).forEach(function (value)
                {
                    expect(typeof value).to.eql('number');
                });

                expect(array).to.have.length(6);
                expect(array.checkIfArrayIsUnique()).to.eql(true);
            });

            it('should find min value in array', function ()
            {
                expect(_.min.apply(_, datasets.min(params))).to.eql(-3);
            });
        });

        describe('minBy', function ()
        {
            // I don't see any meaningful use maxBy as second param for array and object
            describe('minBy1', function ()
            {

                var params, array, fun;

                before(function ()
                {
                    params = datasets.minBy1();
                    array = params[0];
                    fun = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(fun instanceof Function).to.eql(true);

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });

                    expect(array).to.have.length(3);
                });

                it('should return min object from array using function', function ()
                {
                    expect(_.minBy.apply(_, datasets.minBy1(params))).to.eql({name: 'Justin', age: 21});
                });
            });


            describe('minBy2', function ()
            {
                var params, array, str;

                before(function ()
                {
                    params = datasets.minBy2();
                    array = params[0];
                    str = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(typeof str).to.eql('string');

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });

                    expect(array).to.have.length(3);
                });

                it('should return min object from array using string', function ()
                {
                    expect(_.minBy.apply(_, datasets.minBy2(params))).to.eql({Name: 'Bob', Gold: 200});
                });
            });
        });

        describe('multiply', function ()
        {
            var params, multiplier, multiplicand;

            before(function ()
            {
                params = datasets.multiply();
                multiplier = params[0];
                multiplicand = params[1];
            });

            it('should verif params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof multiplier).to.eql('number');
                expect(typeof multiplicand).to.eql('number');
                expect(multiplier).to.be.below(0);
                expect(multiplicand).to.be.below(0);
            });

            it('should multiply two number', function ()
            {
                expect(params).to.have.length(2);
                expect(_.multiply.apply(_, datasets.multiply(params))).to.eql(15);
            });
        });

        describe('round', function ()
        {
            var params, number, precision;

            before(function ()
            {
                params = datasets.round();
                number = params[0];
                precision = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof number).to.eql('number');
                expect(typeof precision).to.eql('number');
                expect(number).to.not.eql(8.246);

                expect(Number.isInteger(number)).to.not.eql(true);
            });

            it('should return sqrt round number to precision', function ()
            {
                expect(_.round.apply(_, datasets.round(params))).to.eql(8.246);
            });
        });

        describe('subtract', function ()
        {
            var params, minuend, subtrahend;

            before(function ()
            {
                params = datasets.subtract();
                minuend = params[0];
                subtrahend = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof minuend).to.eql('number');
                expect(typeof subtrahend).to.eql('number');
            });

            it('should return subtract two numbers', function ()
            {
                expect(params).to.have.length(2);
                expect(_.subtract.apply(_, params)).to.eql(15);
                expect(_.divide.apply(_, params)).to.eql(Infinity);
                expect(_.multiply.apply(_, params)).to.eql(0);
                expect(_.add.apply(_, params)).to.eql(15);
            }); // @blabno said that it is okay
        });

        describe('sum', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.sum();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);

                _(array).forEach(function (value)
                {
                    expect(typeof value).to.eql('number');
                });

                expect(array).to.have.length(4);
                expect(array.checkIfArrayIsUnique()).to.eql(true);
            });

            it('should return sum of array element', function ()
            {
                expect(_.sum.apply(_, datasets.sum(params))).to.eql(10);
            });
        });

        describe('sumBy', function ()
        {
            // I don't see any meaningful use sumBy as second param for array and object
            describe('sumBy1', function ()
            {

                var params, array, fun;

                before(function ()
                {
                    params = datasets.sumBy1();
                    array = params[0];
                    fun = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(fun instanceof Function).to.eql(true);

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });
                    expect(array).to.have.length(3);
                });

                it('should return sumBy of array element', function ()
                {
                    expect(_.sumBy.apply(_, datasets.sumBy1(params))).to.eql(3340.5);
                });
            });

            describe('sumBy2', function ()
            {
                var params, array, str;

                before(function ()
                {
                    params = datasets.sumBy2();
                    array = params[0];
                    str = params[1];
                });

                it('should verify params', function ()
                {
                    expect(params).to.have.length(2);
                    expect(array instanceof Array).to.eql(true);
                    expect(typeof str).to.eql('string');

                    _(array).forEach(function (value)
                    {
                        expect(typeof value).to.eql('object');
                        expect(_.isEmpty(value)).to.eql(false);
                    });
                    expect(array).to.have.length(4);
                });

                it('should return sumBy of object element', function ()
                {
                    expect(_.sumBy.apply(_, datasets.sumBy2(params))).to.eql(193);
                });
            });
        });
    });
});

