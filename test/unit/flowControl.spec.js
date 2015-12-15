(function ()
{
    'use strict';
    var flowControlAnswers = window.flowControlAnswers;

    describe('flow control', function ()
    {
        it('you should be able to conditionally branch your code', function ()
        {
            var num = 0;

            while (num % 3 === 0 || num % 5 === 0) {
                num = Math.floor(Math.random() * 10) + 1;
            }

            expect(flowControlAnswers.fizzBuzz()).toBeFalsy();
            expect(flowControlAnswers.fizzBuzz('foo')).toBeFalsy();
            expect(flowControlAnswers.fizzBuzz(2)).toEqual(2);
            expect(flowControlAnswers.fizzBuzz(101)).toEqual(101);

            expect(flowControlAnswers.fizzBuzz(3)).toEqual('fizz');
            expect(flowControlAnswers.fizzBuzz(6)).toEqual('fizz');
            expect(flowControlAnswers.fizzBuzz(num * 3)).toEqual('fizz');

            expect(flowControlAnswers.fizzBuzz(5)).toEqual('buzz');
            expect(flowControlAnswers.fizzBuzz(10)).toEqual('buzz');
            expect(flowControlAnswers.fizzBuzz(num * 5)).toEqual('buzz');

            expect(flowControlAnswers.fizzBuzz(15)).toEqual('fizzbuzz');
            expect(flowControlAnswers.fizzBuzz(num * 3 * 5)).toEqual('fizzbuzz');
        });

        describe('while loop', function ()
        {
            function iterator(loops)
            {
                return function ()
                {
                    return 0 < loops-- ? Math.random() : null;
                };
            }

            it('should return number of loops', function ()
            {
                expect(flowControlAnswers.whileLoop(iterator(0))).toEqual(0);
                expect(flowControlAnswers.whileLoop(iterator(3))).toEqual(3);
                expect(flowControlAnswers.whileLoop(iterator(6))).toEqual(6);
                expect(flowControlAnswers.whileLoop(iterator(10))).toEqual(10);
                var loops = Math.round(Math.random() * 100);
                expect(flowControlAnswers.whileLoop(iterator(loops))).toEqual(loops);
            });
        });

        describe('for loop', function ()
        {
            it('should return array of numbers between start (includisve) and end (exclusive)', function ()
            {
                expect(flowControlAnswers.forLoop(3, 4)).toEqual([3]);
                expect(flowControlAnswers.forLoop(3, 5)).toEqual([3, 4]);
                expect(flowControlAnswers.forLoop(2, 1)).toEqual([]);
                expect(flowControlAnswers.forLoop(10, 15)).toEqual([10, 11, 12, 13, 14]);
            });
        });

        describe('exceptions', function ()
        {
            it('should throw exception if one of elements is not a number', function ()
            {
                expect(flowControlAnswers.exceptions.bind(null, [1, 2, 3, null])).toThrow('Item at index 3 is not a number');
                expect(flowControlAnswers.exceptions.bind(null, ['a'])).toThrow('Item at index 0 is not a number');
                expect(flowControlAnswers.exceptions([1, 2, 3])).toBe(6);
                expect(flowControlAnswers.exceptions([2, 3])).toBe(5);
                expect(flowControlAnswers.exceptions([8, 2, 1])).toBe(11);
            });
        });
    });
})();
