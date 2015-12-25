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
    }
};
