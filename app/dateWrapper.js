'use strict';

module.exports = function () {

    var date;

    return {
        get: function () {
            return date ? date : new Date();
        },
        set: function (_date) {
            date = _date;
        }
    };
};
