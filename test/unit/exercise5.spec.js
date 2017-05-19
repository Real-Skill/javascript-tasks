(function ()
{
    'use strict';

    describe('exercise5', function ()
    {
        var exercise5 = window.exercise5;

        describe('mergeObject', function ()
        {
            var objects = [
                {name: 'John', age: 34},
                {email: 'john@email.com', gender: 'male'},
                {title: 'The Lord of the Rings'},
                {author: 'J.R.R. Tolkien', comments: ['Good book!', 'Like it!']}
            ];
            var mergeResult = {name: 'John', age: 34, email: 'john@email.com', gender: 'male'};
            var mergeResult2 = {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', comments: ['Good book!', 'Like it!']};

            describe('general', function ()
            {
                it('should return object with properties from object1 and object2', function ()
                {
                    expect(exercise5.mergeObject(objects[0], objects[1])).toEqual(mergeResult);
                    expect(exercise5.mergeObject(objects[2], objects[3])).toEqual(mergeResult2);
                });
            });

            describe('when parameters are not objects', function ()
            {
                it('should return false when object1 is not object', function ()
                {
                    expect(exercise5.mergeObject('text', objects[0])).toEqual(false);
                    expect(exercise5.mergeObject(['text'], objects[0])).toEqual(false);
                });

                it('should return false when object2 is not object', function ()
                {
                    expect(exercise5.mergeObject(objects[0], 'Jack')).toEqual(false);
                    expect(exercise5.mergeObject(objects[0], ['Jack'])).toEqual(false);
                });
            });
        });

        describe('countLetter', function ()
        {
            var book = {title: 'The Lord of the Rings', author: 'John Ronald Reuel Tolkien'};

            it('should count the numbers of "a" character in all properties of an object', function ()
            {
                expect(exercise5.countLetter(book, 'a')).toEqual(1);
            });
            it('should count the numbers of "l" character in all properties of an object', function ()
            {
                expect(exercise5.countLetter(book, 'l')).toEqual(4);
            });
            it('should count the numbers of "r" character in all properties of an object', function ()
            {
                expect(exercise5.countLetter(book, 'r')).toEqual(4);
            });
            it('should count the numbers of "e" character in all properties of an object', function ()
            {
                expect(exercise5.countLetter(book, 'e')).toEqual(5);
            });
        });

        describe('makeObject', function ()
        {
            it('should make object from 2D array', function ()
            {
                expect(exercise5.makeObject([
                    ['name', 'John'],
                    ['mode', 'normal'],
                    ['age', 31]
                ])).toEqual({name: 'John', mode: 'normal', age: 31});
                expect(exercise5.makeObject([
                    ['a', 0],
                    ['b', 1]
                ])).toEqual({a: 0, b: 1});
            });

            it('should return false when array has more than 2 dimensions', function ()
            {
                expect(exercise5.makeObject([
                    ['name', 'first'],
                    ['type', 1, 3],
                    ['mode', 'normal']
                ])).toBe(false);
            });

            it('should return false when array has less than 2 dimensions', function ()
            {
                expect(exercise5.makeObject([
                    ['name'],
                    ['type', 1],
                    ['mode', 'normal']
                ])).toBe(false);
            });
        });

        describe('propertyNames', function ()
        {
            it('should return array of property names and values', function ()
            {
                expect(exercise5.propertyNames({name: 'John', age: 34, email: 'john@email.com'})).toEqual([
                    ['name', 'John'],
                    ['age', 34],
                    ['email', 'john@email.com']
                ]);

                expect(exercise5.propertyNames({a: 1, b: false, c: 'text'})).toEqual([
                    ['a', 1],
                    ['b', false],
                    ['c', 'text']
                ]);
            });

            it('should return empty array when object has no properties', function ()
            {
                expect(exercise5.propertyNames({})).toEqual([]);
            });
        });
    });
})();
