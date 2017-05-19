(function ()
{
    'use strict';

    describe('exercise7', function ()
    {
        var exercise7 = window.exercise7;

        describe('isPrimeNumber', function ()
        {
            it('should return true when number is prime number', function ()
            {
                expect(exercise7.isPrimeNumber(11)).toEqual(true);
                expect(exercise7.isPrimeNumber(3)).toEqual(true);
                expect(exercise7.isPrimeNumber(5)).toEqual(true);
            });
            it('should return false when number is not prime number', function ()
            {
                expect(exercise7.isPrimeNumber(21)).toEqual(false);
                expect(exercise7.isPrimeNumber(14)).toEqual(false);
                expect(exercise7.isPrimeNumber(10)).toEqual(false);
            });
        });

        describe('whatType', function ()
        {
            var variable12;
            var object = {x: 10};
            var array = [1, 2, 3];

            it('should return "string" when variable is text or character', function ()
            {
                expect(exercise7.whatType('str')).toEqual('string');
                expect(exercise7.whatType('a')).toEqual('string');
            });
            it('should return "number" when variable is a number', function ()
            {
                expect(exercise7.whatType('str'.length)).toEqual('number');
            });
            it('should return "object" when variable is an object', function ()
            {
                expect(exercise7.whatType(object)).toEqual('object');
            });
            it('should return "array" when variable is an array', function ()
            {
                expect(exercise7.whatType(array)).toEqual('array');
            });
            it('should return "undefined" when variable is only declared', function ()
            {
                expect(exercise7.whatType(variable12)).toEqual('undefined');
            });
        });
        describe('findMin', function ()
        {
            it('should return min value', function ()
            {
                expect(exercise7.findMin([1, 2, 3, 4])).toBe(1);
                expect(exercise7.findMin([100, 10, 20, 30])).toBe(10);
            });
            it('should return min value and bypass the string elements', function ()
            {
                expect(exercise7.findMin([100, 'ala', 'kot', 200])).toBe(100);
                expect(exercise7.findMin(['ala', 100, 'kot', 200])).toBe(100);
            });
            it('should return false when array is empty', function ()
            {
                expect(exercise7.findMin([])).toEqual(false);
            });
        });

        describe('findAlmostMax', function ()
        {
            it('should return second greatest value', function ()
            {
                expect(exercise7.findAlmostMax([2, 3, 4])).toBe(3);
                expect(exercise7.findAlmostMax([50, 40, 30, 10])).toBe(40);
            });
            it('should return second greatest value and bypass the string elements', function ()
            {
                expect(exercise7.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            });
            it('should return false when array is empty', function ()
            {
                expect(exercise7.findAlmostMax([])).toEqual(false);
            });
            it('should return false when array doesn\'t contain any numbers', function ()
            {
                expect(exercise7.findAlmostMax(['cat', 'kot'])).toEqual(false);
            });
        });

        describe('findAlmostMin', function ()
        {
            it('should return second lowest value', function ()
            {
                expect(exercise7.findAlmostMin([1, 2, 3, 4, 5, 6])).toBe(2);
                expect(exercise7.findAlmostMin([50, 40, 30, 10])).toBe(30);
            });
            it('should return second lowest value and bypass the string elements', function ()
            {
                expect(exercise7.findAlmostMin([50, 'str', 30, 10])).toBe(30);
            });
            it('should return false when array is empty', function ()
            {
                expect(exercise7.findAlmostMin([])).toEqual(false);
            });
            it('should return false when array doesn\'t contain any numbers', function ()
            {
                expect(exercise7.findAlmostMin(['cat', 'kot'])).toEqual(false);
            });
        });
    });
})();
