(function ()
{
    'use strict';

    describe('exercise2', function ()
    {
        var exercise2 = window.exercise2;

        describe('reverseNumber', function ()
        {
            describe('general', function ()
            {
                it('should reverse the number', function ()
                {
                    expect(exercise2.reverseNumber(1234)).toEqual(4321);
                    expect(exercise2.reverseNumber(4321)).toEqual(1234);
                });
                it('should not return a string', function ()
                {
                    expect(exercise2.reverseNumber(5678)).not.toBe('8765');
                });
                it('should return single number when "number" is a digit', function ()
                {
                    expect(exercise2.reverseNumber(5)).toBe(5);
                });
            });
            describe('when "number" has the wrong type', function ()
            {
                it('should return false when "number" is a string', function ()
                {
                    expect(exercise2.reverseNumber('abcs')).toEqual(false);
                });
                it('should return false when "number" is an object', function ()
                {
                    expect(exercise2.reverseNumber({number: 123})).toEqual(false);
                });
                it('should return false when "number" is an array', function ()
                {
                    expect(exercise2.reverseNumber([123, 321])).toEqual(false);
                });
            });
        });

        describe('squareOrCube', function ()
        {
            it('should return array of square odd numbers and cube even numbers', function ()
            {
                expect(exercise2.squareOrCube([1, 2, 3, 4])).toEqual([1, 8, 9, 64]);
                expect(exercise2.squareOrCube([5, 6, 7, 8])).toEqual([25, 216, 49, 512]);
            });
            it('should return array of square odd numbers', function ()
            {
                expect(exercise2.squareOrCube([1, 3, 5, 7])).toEqual([1, 9, 25, 49]);
            });
            it('should return array of cube even numbers', function ()
            {
                expect(exercise2.squareOrCube([2, 4, 8, 10])).toEqual([8, 64, 512, 1000]);
            });
        });

        describe('replaceString', function ()
        {
            it('should swap "string" to "newString" in the array', function ()
            {
                expect(exercise2.replaceString(['Maria', 'has', 'a cat'], 'Maria', 'Jane')).toEqual(['Jane', 'has', 'a cat']);
                expect(exercise2.replaceString(['Maria', 'has', 'a cat'], 'has', 'does not have')).toEqual(['Maria', 'does not have', 'a cat']);
            });

            it('should swap all occurrences the "string" to "newString" in the array', function ()
            {
                expect(exercise2.replaceString(['Maria', 'has', 'a cat', 'and', 'Maria', 'has', 'a dog'], 'Maria', 'Jane'))
                        .toEqual(['Jane', 'has', 'a cat', 'and', 'Jane', 'has', 'a dog']);
                expect(exercise2.replaceString(['Maria', 'has', 'a cat', 'and', 'Maria', 'has', 'a dog'], 'has', 'does not have'))
                        .toEqual(['Maria', 'does not have', 'a cat', 'and', 'Maria', 'does not have', 'a dog']);
            });
            it('should return false when "string" does not exist in the array', function ()
            {
                expect(exercise2.replaceString(['Maria', 'has', 'a cat'], 'Jane', 'Dog')).toBe(false);
            });
        });

        describe('maxArray', function ()
        {
            it('should return maximum element from array', function ()
            {
                expect(exercise2.maxArray([2, 5, 7, 1, 3, 20, 10, 19])).toEqual(20);
                expect(exercise2.maxArray([1, 1, 1, 1, 1, 2, 2, 2])).toEqual(2);
            });
            it('should return false when array not contain numbers ', function ()
            {
                expect(exercise2.maxArray(['a', 'b', 'c'])).toBe(false);
            });
            it('should return false when array contain numbers and other elements', function ()
            {
                expect(exercise2.maxArray(['a', 7, 'c', 3, 'ala', 11, 10])).toBe(false);
            });
        });

        describe('getObject', function ()
        {
            var list = [
                {name: 'John', age: 10},
                {name: 'Jack', age: 14},
                {name: 'Jenny', age: 30},
                {name: 'Maria', age: 55}
            ];

            it('should return object from list', function ()
            {
                expect(exercise2.getObject(list, 'Maria')).toEqual({name: 'Maria', age: 55});
                expect(exercise2.getObject(list, 'Jack')).toEqual({name: 'Jack', age: 14});
            });

            it('should return false if object not exist', function ()
            {
                expect(exercise2.getObject(list, 'Martin')).toBe(false);
                expect(exercise2.getObject(list, 'Joanna')).toBe(false);
            });
        });
    });

})();
