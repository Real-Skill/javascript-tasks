(function ()
{
    'use strict';

    describe('exercise4', function ()
    {
        describe('countVowels', function ()
        {
            it('should count number of vowels', function ()
            {
                expect('I am some text'.countVowels()).toEqual(5);
                expect('aeiouy'.countVowels()).toEqual(6);
            });
            it('should count number of vowels (case insensitive)', function ()
            {
                expect('AEIOUYX'.countVowels()).toEqual(6);
                expect('AE ae bcd'.countVowels()).toEqual(4);
            });
            it('should return 0 for empty string', function ()
            {
                expect(''.countVowels()).toEqual(0);
            });
        });

        describe('arrayToString', function ()
        {
            it('should return string from the array of strings', function ()
            {
                expect(['one', 'two', 'three'].arrayToString()).toEqual('one two three');
            });
            it('should return string from the array of strings and numbers', function ()
            {
                expect(['one', 2, 'three', 4].arrayToString()).toEqual('one 2 three 4');
            });
            it('should return string from the array of different types of elements', function ()
            {
                expect([false, 0, 'one', 2].arrayToString()).toEqual('false 0 one 2');
            });
            it('should return empty from the empty array', function ()
            {
                expect([].arrayToString()).toEqual('');
            });
        });

        describe('add', function ()
        {
            var numbers = [1, -2, 10, 4, 5];

            it('should add number 10 to number 1', function ()
            {
                expect(numbers[0].add(10)).toEqual(11);
            });
            it('should add number 15 to number 10', function ()
            {
                expect(numbers[2].add(15)).toEqual(25);
            });
            it('should add number -2 to number 20', function ()
            {
                expect(numbers[1].add(20)).toEqual(18);
            });
        });

        describe('isInTheRange', function ()
        {
            var number = 123;
            it('should return true when number is in the range', function ()
            {
                expect(number.isInTheRange(11, 140)).toEqual(true);
                expect(number.isInTheRange(122, 125)).toEqual(true);
            });
            it('should return undefined when "b" is less than "a"', function ()
            {
                expect(number.isInTheRange(42, 21)).toEqual(undefined);
            });
            it('should return false when number is out of the range', function ()
            {
                expect(number.isInTheRange(1, 21)).toEqual(false);
                expect(number.isInTheRange(130, 131)).toEqual(false);
            });
        });
    });
})();
