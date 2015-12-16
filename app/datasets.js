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
    }
};
