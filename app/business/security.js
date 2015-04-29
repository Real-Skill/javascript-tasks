(function ()
{
    'use strict';
    var q = require('q');

    function isAuthenticated(context)
    {
        var defer = q.defer();
        defer.reject('UNAUTHORIZED');
        return defer.promise;
    }

    module.exports = {
        isAuthenticated: isAuthenticated
    };
})();