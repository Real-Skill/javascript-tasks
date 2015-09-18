(function ()
{
    'use strict';
    var q = require('q');

    function isAuthenticated(context)
    {
        var defer = q.defer();
//        TODO make sure this function is properly implemented.
        defer.reject();
        return defer.promise;
    }

    module.exports = {
        isAuthenticated: isAuthenticated
    };
})();
