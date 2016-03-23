'use strict';

module.exports = {
    after: function (callback)
    {
        return [2, callback];
    },
    bind: function (callback) {
        var obj = {order: 'PIZZA'};
        return [callback, obj, 'YES'];
    },
    delay: function (callback) {

        return [ callback, 1000,'asd'];
    },
    flip: function () {
        var testFunc = function () {
            var arr = [];
            for(var key in arguments) {
                if(arguments.hasOwnProperty(key)) {
                    arr[key] = arguments[key];
                }
            }
            return arr;
        };
        return [testFunc];
    },
    overArgs: function (callback) {
        return [callback];
    }
};
