'use strict';

module.exports = {
    task1: function (array)
    {
        return {
            method: 'pullAt',
            params: [array, 5, 7]
        };
    },
    task2: function (array)
    {
        return {
            method: 'remove',
            params: [array, 'alive']
        };
    },
    task3: function (array)
    {
        return {
            method: 'remove',
            params: [array, 'alive', 'yes']
        };
    },
    task4: function (array)
    {
        return {
            method: 'union',
            params: array
        };
    },
    task5: function (array1, array2)
    {
        return {
            method: 'xor',
            params: [array1, array2]
        };
    },
    task6: function (array, values)
    {
        return {
            method: 'without',
            params: [array, values]
        };
    },
    task7: function (array, index)
    {
        return {
            method: 'zipObject',
            params: [array[0], array[index]]
        };
    }
};
