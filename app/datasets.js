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
    curry: function () {
        var cube = function (x) {
          return x * x * x;
        };

        return [cube];
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
    partial: function (callback) {
        return [callback, 'Batman', 'GOOD'];
    },
    rearg: function (callback) {
        return [callback, 1, 3, 0, 2];
    },
    spread: function () {
        var action = function (virus, treatment) {
            if (!virus || !virus && !treatment) { return false;}
            if (treatment === 'started') {
                return 'Treatment due to ' + virus + ' virus has started!';
            } else if (treatment === "some") {
                return virus + ' slowly killing you, I\'m\ so sorry';
            } else {
                return 'You were killed by ' + virus;
            }
        };

        return [action];
    }
};
