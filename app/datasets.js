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
    }
};
