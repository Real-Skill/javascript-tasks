describe('exercise1', function ()
{
    'use strict';

    var exercise1 = window.exercise1;

    describe('getDescendingNumbers', function ()
    {
        describe('general', function ()
        {
            it('should return string of descending numbers, separated by spaces', function ()
            {
                expect(exercise1.getDescendingNumbers(15, 1)).toEqual('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
                expect(exercise1.getDescendingNumbers(100, 95)).toEqual('100 99 98 97 96 95');
            });

            it('should return false when "start" is greater than "stop"', function ()
            {
                expect(exercise1.getDescendingNumbers(1, 15)).toBe(false);
            });
        });
        describe('when parameters are not numbers', function ()
        {
            it('should return false when "start" is a string', function ()
            {
                expect(exercise1.getDescendingNumbers('asa', 1)).toBe(false);
            });
            it('should return false when "stop" is a string', function ()
            {
                expect(exercise1.getDescendingNumbers(1, 'asa')).toBe(false);
            });
            it('should return false when "start" is a NaN', function ()
            {
                expect(exercise1.getDescendingNumbers(NaN, 1)).toBe(false);
            });
            it('should return false when "stop" is a NaN', function ()
            {
                expect(exercise1.getDescendingNumbers(99, NaN)).toBe(false);
            });
        });
    });

    describe('deleteString', function ()
    {
        it('should delete string from list and return array without that string', function ()
        {
            expect(exercise1.deleteString('Jan', ['Ala', 'Michal', 'Maciek', 'Jan', 'Andrzej'])).toEqual(['Ala', 'Michal', 'Maciek', 'Andrzej']);
            expect(exercise1.deleteString('kota', ['ala', 'ma', 'kota'])).toEqual(['ala', 'ma']);
        });
        it('should delete string from list and return empty array', function ()
        {
            expect(exercise1.deleteString('a', ['a'])).toEqual([]);
        });
        it('should delete all occurrences of string', function ()
        {
            expect(exercise1.deleteString('a', ['a','a','a'])).toEqual([]);
            expect(exercise1.deleteString('a', ['a','b','a','c'])).toEqual(['b','c']);
        });
    });

    describe('stringCounter', function ()
    {
        it('should count string in the list', function ()
        {
            expect(exercise1.stringCounter(['a,b,c'])).toEqual(1);
            expect(exercise1.stringCounter(['a', 'b', 'c', 'd', 'e'])).toEqual(5);
        });
        it('should count only string in the list', function ()
        {
            expect(exercise1.stringCounter(['a', 5, 'b', 'c', 7, ' '])).toEqual(4);
            expect(exercise1.stringCounter(['ok', 2, 3, 4, 5, 6])).toEqual(1);
        });
        it('should return 0 when array is empty', function ()
        {
            expect(exercise1.stringCounter([])).toEqual(0);
        });
    });

    describe('squareOdd', function ()
    {
        describe('when array does not contain string elements', function ()
        {
            it('should return all odd numbers to the square', function ()
            {
                expect(exercise1.squareOdd([1, 2, 3, 4])).toEqual([1, 2, 9, 4]);
            });

            it('should return empty array when customArray is empty', function ()
            {
                expect(exercise1.squareOdd([])).toEqual([]);
            });
        });
        describe('when array contains string elements', function ()
        {
            it('should return array of strings when customArray is array of strings', function ()
            {
                expect(exercise1.squareOdd(['test', 'text'])).toEqual(['test', 'text']);
            });

            it('should return all odd numbers to the square', function ()
            {
                expect(exercise1.squareOdd(['test', 2, 3, 9, 'text'])).toEqual(['test', 2, 9, 81, 'text']);
            });
        });
    });

    describe('areaOfTrapezoid', function ()
    {
        describe('when "a","b" and "h" are non-negative numbers', function ()
        {
            it('should return area of trapezoid', function ()
            {
                expect(exercise1.areaOfTrapezoid(2, 2, 2)).toEqual(4);
                expect(exercise1.areaOfTrapezoid(1, 3, 6)).toEqual(12);
            });
        });
        describe('when "a", "b" or "h" is a negative number', function ()
        {
            it('should return false when "a" is a negative number', function ()
            {
                expect(exercise1.areaOfTrapezoid(-1, 3, 6)).toBe(false);
            });
            it('should return false when "b" is a negative number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, -3, 6)).toBe(false);
            });
            it('should return false when "h" is a negative number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, 3, -6)).toBe(false);
            });
        });
        describe('when "a", "b" or "h" is not a number', function ()
        {
            it('should return false when "a" is not a number', function ()
            {
                expect(exercise1.areaOfTrapezoid('text', 3, 6)).toBe(false);
            });
            it('should return false when "b" is not a number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, 'text', 6)).toBe(false);
            });
            it('should return false when "h" is not a number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, 3, 'text')).toBe(false);
            });
        });
    });
});
