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

        describe('whaType', function ()
        {
            var variable12,
                    p = {x: 10};

            it('"str" should return "string"', function ()
            {
                expect(exercise7.whatType('str')).toEqual('string');
            });
            it('"str.length" should return "number"', function ()
            {
                expect(exercise7.whatType('str'.length)).toEqual('number');
            });
            it('should return "object"', function ()
            {
                expect(exercise7.whatType(p)).toEqual('object');
            });
            it('only declared variable should return "undefined"', function ()
            {
                expect(exercise7.whatType(variable12)).toEqual('undefined');
            });
        });
        describe('findMin', function ()
        {
            it('should return min value in array', function ()
            {
                expect(exercise7.findMin([1, 2, 3, 4])).toBe(1);
            });
            it('should return min value in array', function ()
            {
                expect(exercise7.findMin([100, 10, 20, 30])).toBe(10);
            });
            it('string should be omnitted', function ()
            {
                expect(exercise7.findMin([100, 'ala', 'kot', 200])).toBe(100);
            });
            it('string should be omnitted', function ()
            {
                expect(exercise7.findMin(['ala', 100, 'kot', 200])).toBe(100);
            });
            it('empty array should return false', function ()
            {
                expect(exercise7.findMin([])).toEqual(false);
            });
        });

        describe('findAlmostMax', function ()
        {
            it('should return second greatest number', function ()
            {
                expect(exercise7.findAlmostMax([2, 3, 4])).toBe(3);
            });
            it('should return second greatest number', function ()
            {
                expect(exercise7.findAlmostMax([50, 40, 30, 10])).toBe(40);
            });
            it('string should be omnitted', function ()
            {
                expect(exercise7.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            });
            it('empty array should return false', function ()
            {
                expect(exercise7.findAlmostMax([])).toEqual(false);
            });
            it('array of string should return false', function ()
            {
                expect(exercise7.findAlmostMax(['cat', 'kot'])).toEqual(false);
            });
        });

        describe('findAlmostMin', function ()
        {
            it('should return second lowest number', function ()
            {
                expect(exercise7.findAlmostMin([1, 2, 3, 4, 5, 6])).toBe(2);
            });
            it('should return second lowest number', function ()
            {
                expect(exercise7.findAlmostMin([50, 40, 30, 10])).toBe(30);
            });
            it('string should be omnitted', function ()
            {
                expect(exercise7.findAlmostMin([50, 'str', 30, 10])).toBe(30);
            });
            it('empty array should return false', function ()
            {
                expect(exercise7.findAlmostMin([])).toEqual(false);
            });
            it('array of string should return false', function ()
            {
                expect(exercise7.findAlmostMin(['cat', 'kot'])).toEqual(false);
            });
        });
    });
})();
