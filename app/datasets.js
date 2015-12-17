'use strict';

module.exports = {
    chunk: function ()
    {
        var array = [1, 2, 3, 4, 5, 6, 7, 8];
        var size = 3;
        return [array, size];
    },
    chunk2: function ()
    {
        var array = [1, 2, 3, 4, 5, 6, 7, 8];
        var size = 2;
        return [array, size];
    },
    compact: function ()
    {
        var array = [1, null, false, '', 0, 2, undefined, 3];
        return [array];
    },
    difference1: function ()
    {
        var baseArray = [1, null, false, '', 0, 2, undefined, 3];
        var exclusion1 = [1, '', 0];
        var exclusion2 = [null, false, 2, undefined, 3];
        return [baseArray, exclusion1, exclusion2];
    },
    difference2: function ()
    {
        var baseArray = [1, null, false, '', 0, 2, undefined, 3];
        var exclusion1 = [1, '', 0];
        return [baseArray, exclusion1];
    },
    drop1: function ()
    {
        var array = [1, 2, {}, new Array(5)];
        return [array];
    },
    drop2: function ()
    {
        var array = [1, 2, {}, new Array(5)];
        var numberOfElements = 2;
        return [array, numberOfElements];
    },
    dropRight: function ()
    {
        var array = [1, 2, {}, new Array(5)];
        var numberOfElements = 3;
        return [array, numberOfElements];
    },
    fill1: function ()
    {
        var array = new Array(110);
        return [array, '*', 3, 103];
    },
    fill2: function ()
    {
        var array = new Array(1000);
        return [array, 'donkey'];
    },
    findIndex1: function (array)
    {
        function predicate(item)
        {
            return 'Jack' === item.getName();
        }

        return [array, predicate];
    },
    findIndex2: function ()
    {
        var array = [1, {name: 'Jack', age: 33}, {name: 'Rick', age: 21}, 21, {name: 'Jack', age: 21}, 4, 5];
        var predicate = {name: 'Jack', age: 21};
        return [array, predicate];
    },
    first1: function ()
    {
        var array = [];
        return [array];
    },
    first2: function ()
    {
        var array = [1];
        return [array];
    }
};
