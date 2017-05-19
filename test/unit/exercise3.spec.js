(function ()
{
    'use strict';

    describe('exercise3', function ()
    {
        var exercise3 = window.exercise3;

        describe('doAdult', function ()
        {
            var peopleArray = [
                {name: 'John', age: 10},
                {name: 'Jack', age: 14},
                {name: 'Jenny', age: 30},
                {name: 'Maria', age: 55},
                {name: 'Steve', age: 17}
            ];
            var peopleArray2 = [
                {name: 'John', age: 18},
                {name: 'Jack', age: 17},
                {name: 'Jenny', age: 10},
                {name: 'Maria', age: 15},
                {name: 'Steve', age: 90}
            ];
            var adultList = [
                {name: 'John', age: 18},
                {name: 'Jack', age: 18},
                {name: 'Jenny', age: 30},
                {name: 'Maria', age: 55},
                {name: 'Steve', age: 18}
            ];
            var adultList2 = [
                {name: 'John', age: 18},
                {name: 'Jack', age: 18},
                {name: 'Jenny', age: 18},
                {name: 'Maria', age: 18},
                {name: 'Steve', age: 90}
            ];

            beforeEach(function ()
            {
                exercise3.doAdult(peopleArray);
                exercise3.doAdult(peopleArray2);
            });
            it('should increase to 18 every age property that is less than 18', function ()
            {
                expect(peopleArray).toEqual(adultList);
                expect(peopleArray2).toEqual(adultList2);
            });
        });

        describe('findTheBiggestBox', function ()
        {
            describe('general', function ()
            {
                it('should return second box', function ()
                {
                    expect(exercise3.findTheBiggestBox(8, 6, 5)).toEqual(2);
                    expect(exercise3.findTheBiggestBox(8, 12, 5)).toEqual(2);
                });
                it('should return first box', function ()
                {
                    expect(exercise3.findTheBiggestBox(8, 2, 1)).toEqual(1);
                    expect(exercise3.findTheBiggestBox(10, 3, 5)).toEqual(1);
                });
            });
            describe('when parameters are not numbers', function ()
            {
                it('should return false when "x" is not a number)', function ()
                {
                    expect(exercise3.findTheBiggestBox('text', 9, 2)).toBe(false);
                    expect(exercise3.findTheBiggestBox([], 9, 2)).toBe(false);
                    expect(exercise3.findTheBiggestBox({a: 1}, 9, 2)).toBe(false);
                });
                it('should return false when "y" is not a number)', function ()
                {
                    expect(exercise3.findTheBiggestBox(9, 'text', 2)).toBe(false);
                    expect(exercise3.findTheBiggestBox(9, [], 2)).toBe(false);
                    expect(exercise3.findTheBiggestBox(9, {a: 1}, 2)).toBe(false);
                });
                it('should return false when "z" is not a number)', function ()
                {
                    expect(exercise3.findTheBiggestBox(9, 2, 'text')).toBe(false);
                    expect(exercise3.findTheBiggestBox(9, 2, [])).toBe(false);
                    expect(exercise3.findTheBiggestBox(9, 2, {a: 1})).toBe(false);
                });
            });
        });

        describe('reverseText', function ()
        {
            it('should return inverse the string', function ()
            {
                expect(exercise3.reverseText('Test1312')).toEqual('2131tseT');
                expect(exercise3.reverseText('a b c d')).toEqual('d c b a');
            });
            it('should return false when "text" is not a string', function ()
            {
                expect(exercise3.reverseText(234)).toBe(false);
                expect(exercise3.reverseText([])).toBe(false);
                expect(exercise3.reverseText({a: 1})).toBe(false);
            });
        });

        describe('factorial', function ()
        {
            it('should return factorial of 1', function ()
            {
                expect(exercise3.factorial(1)).toEqual([1, 1]);
            });
            it('should return factorial of 4', function ()
            {
                expect(exercise3.factorial(4)).toEqual([1, 1, 2, 6, 24]);
            });
            it('should return factorial of 7', function ()
            {
                expect(exercise3.factorial(7)).toEqual([1, 1, 2, 6, 24, 120, 720, 5040]);
            });
        });

        describe('sumObject', function ()
        {
            it('should sum all values of properties', function ()
            {
                expect(exercise3.sumProperties({a: 2, b: 5, c: 9, d: 2, e: 20})).toEqual(38);
                expect(exercise3.sumProperties({param0: 1, param1: 2, param2: 3, param3: 2})).toEqual(8);
                expect(exercise3.sumProperties({age: 10, num: 11})).toEqual(21);
            });
        });
    });
})();
