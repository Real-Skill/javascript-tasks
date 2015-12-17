(function ()
{
    'use strict';

    describe('exercise5', function ()
    {
        var exercise5 = window.exercise5;

        describe('mergeObject', function ()
        {
            describe('general', function ()
            {
                it('should return object with properties from object1 and object2', function ()
                {
                    expect(exercise5.mergeObject({
                        name: 'John',
                        age: 34
                    }, {
                        email: 'john@email.com',
                        gender: 'male'
                    })).toEqual({
                        name: 'John',
                        age: 34,
                        email: 'john@email.com',
                        gender: 'male'
                    });

                    expect(exercise5.mergeObject({title: 'The Lord of the Rings'}, {
                        author: 'John Ronald Reuel Tolkien',
                        comments: ['Good book!', 'I really like this book']
                    })).toEqual({
                        title: 'The Lord of the Rings',
                        author: 'John Ronald Reuel Tolkien',
                        comments: ['Good book!', 'I really like this book']
                    });
                });

            });

            describe('when parameters are not numbers', function ()
            {
                it('should return false when object1 is not object', function ()
                {
                    expect(exercise5.mergeObject('text', {
                        title: 'The Lord of the Rings',
                        comments: ['Good book!']
                    })).toEqual(false);
                });

                it('should return false when object2 is not object', function ()
                {
                    expect(exercise5.mergeObject({
                        name: 'John',
                        age: 11
                    }, 'Jack')).toEqual(false);
                });
            });
        });

        describe('countLetter', function ()
        {
            var book;
            beforeEach(function ()
            {
                book = {
                    title: 'The Lord of the Rings',
                    author: 'John Ronald Reuel Tolkien'
                };
            });
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
