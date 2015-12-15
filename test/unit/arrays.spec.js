(function ()
{
    'use strict';
    var arraysAnswers = window.arraysAnswers;

    describe('arrays', function ()
    {
        it('you should be able to determine the location of an item in an array', function ()
        {
            expect(arraysAnswers.indexOf([1, 2, 3, 4], 3)).toBe(2);
            expect(arraysAnswers.indexOf([1, 2, 3, 4], 5)).toBe(-1);
        });

        it('you should be able to add the values of an array', function ()
        {
            expect(arraysAnswers.sum([1, 2, 3, 4])).toBe(10);
            expect(arraysAnswers.sum([1, 3, 5, 7, 9])).toBe(1 + 3 + 5 + 7 + 9);
            expect(arraysAnswers.sum([18, 27, 33])).toBe(18 + 27 + 33);
        });

        it('you should be able to copy an array', function ()
        {
            var input;
            var result;

            input = [1, 2, 3, 4];
            result = arraysAnswers.copy(input);
            expect(result).toEqual(input);
            expect(result === input).toBe(false);

            input = [1, 3, 5, 7, 9];
            result = arraysAnswers.copy(input);
            expect(result).toEqual(input);
            expect(result === input).toBe(false);

            input = [18, 27, 33];
            result = arraysAnswers.copy(input);
            expect(result).toEqual(input);
            expect(result === input).toBe(false);
        });

        it('you should be able to return a copy of an array without given value', function ()
        {
            var input;

            input = [1, 2, 3, 4, 2];
            expect(arraysAnswers.removeFromCopy(input, 2)).toEqual([1, 3, 4]);
            expect(input).toEqual([1, 2, 3, 4, 2]);

            input = [1, 2, 3, 4, 2];
            expect(arraysAnswers.removeFromCopy(input, 3)).toEqual([1, 2, 4, 2]);
            expect(input).toEqual([1, 2, 3, 4, 2]);


            input = [5, 5, 5, 5, 5, 5];
            expect(arraysAnswers.removeFromCopy(input, 5)).toEqual([]);
            expect(input).toEqual([5, 5, 5, 5, 5, 5]);
        });

        it('you should be able to remove all instances of a value from an array', function ()
        {
            function doTest(array, item, expectedResult)
            {
                arraysAnswers.remove(array, item);
                expect(array).toEqual(expectedResult);
            }

            doTest([1, 2, 3, 4, 2], 2, [1, 3, 4]);
            doTest([1, 2, 3, 4, 2], 3, [1, 2, 4, 2]);
            doTest([5, 5, 5, 5, 5, 5], 5, []);
        });

        it('you should be able to add an item to the end of an array', function ()
        {
            var input = [1, 6, 8];
            arraysAnswers.append(input, 10);
            expect(input).toEqual([1, 6, 8, 10]);

            input = [];
            arraysAnswers.append(input, 2);
            expect(input).toEqual([2]);

            input = [3, 3];
            arraysAnswers.append(input, 3);
            expect(input).toEqual([3, 3, 3]);
        });

        it('you should be able to add an item to the end of an array without modifying original array', function ()
        {
            var input = [1, 6, 8];
            expect(arraysAnswers.appendToCopy(input, 10)).toEqual([1, 6, 8, 10]);
            expect(input).toEqual([1, 6, 8]);

            input = [];
            expect(arraysAnswers.appendToCopy(input, 2)).toEqual([2]);
            expect(input).toEqual([]);

            input = [3, 3];
            expect(arraysAnswers.appendToCopy(input, 3)).toEqual([3, 3, 3]);
            expect(input).toEqual([3, 3]);
        });

        it('you should be able to remove the last item of an array', function ()
        {
            var input;

            input = [1, 2, 3, 4];
            expect(arraysAnswers.truncate(input)).toEqual(4);
            expect(input).toEqual([1, 2, 3]);

            input = [1];
            expect(arraysAnswers.truncate(input)).toEqual(1);
            expect(input).toEqual([]);

            input = [];
            expect(arraysAnswers.truncate(input)).toEqual(undefined);
            expect(input).toEqual([]);
        });

        it('you should be able to add an item to the beginning of an array', function ()
        {
            var input;

            input = [1, 2, 3, 4];
            arraysAnswers.prepend(input, 5);
            expect(input).toEqual([5, 1, 2, 3, 4]);


            input = [1];
            arraysAnswers.prepend(input, 3);
            expect(input).toEqual([3, 1]);

            input = [];
            arraysAnswers.prepend(input, 2);
            expect(input).toEqual([2]);
        });

        it('you should be able to remove the first item of an array', function ()
        {
            var input;

            input = [1, 2, 3, 4];
            expect(arraysAnswers.curtail(input)).toEqual(1);
            expect(input).toEqual([2, 3, 4]);

            input = [8, 54, 2];
            expect(arraysAnswers.curtail(input)).toEqual(8);
            expect(input).toEqual([54, 2]);
        });

        it('you should be able to join together two arrays', function ()
        {
            expect(arraysAnswers.concat([1, 2, 3, 4], ['a', 'b', 'c', 1])).toEqual([1, 2, 3, 4, 'a', 'b', 'c', 1]);
            expect(arraysAnswers.concat([], [])).toEqual([]);
        });

        it('you should be able to add an item anywhere in an array', function ()
        {
            var input = [1, 2, 3, 4];
            arraysAnswers.insert(input, 2, 'z');
            expect(input).toEqual([1, 2, 'z', 3, 4]);


            input = [];
            arraysAnswers.insert(input, 3, 'c');
            expect(input).toEqual(['c']);

            input = [];
            arraysAnswers.insert(input, 0, 'x');
            expect(input).toEqual(['x']);
        });

        it('you should be able to count the occurences of an item in an array', function ()
        {
            expect(arraysAnswers.count([1, 2, 4, 4, 3, 4, 3], 4)).toBe(3);
            expect(arraysAnswers.count([1, 1], 1)).toBe(2);
            expect(arraysAnswers.count([1, 1], 2)).toBe(0);
            expect(arraysAnswers.count([], 1)).toBe(0);
        });

        it('you should be able to find duplicates in an array', function ()
        {
            expect(arraysAnswers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()).toEqual([1, 3, 4]);
            expect(arraysAnswers.duplicates([5, 7, 2]).sort()).toEqual([]);
            expect(arraysAnswers.duplicates([5, 7, 2, 2, 2, 7, 5]).sort()).toEqual([2, 5, 7]);
            var object = {};
            expect(arraysAnswers.duplicates([object, object, 2, object, 7, 2, 5]).sort()).toEqual([2, object]);
        });

        it('you should be able to square each number in an array', function ()
        {
            expect(arraysAnswers.square([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
            expect(arraysAnswers.square([7, 7, 7])).toEqual([49, 49, 49]);
            expect(arraysAnswers.square([4, 3, 2])).toEqual([16, 9, 4]);
        });

        it('you should be able to find all occurrences of an item in an array', function ()
        {
            expect(arraysAnswers.findAllOccurrences('abcdefabc'.split(''), 'a')).toEqual([0, 6]);
            expect(arraysAnswers.findAllOccurrences('abcdefabc'.split(''), 'z')).toEqual([]);
            expect(arraysAnswers.findAllOccurrences('abcdefabc'.split(''), 'b')).toEqual([1, 7]);
        });
    });
})();
