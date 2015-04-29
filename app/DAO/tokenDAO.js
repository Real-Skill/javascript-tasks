(function ()
{
    'use strict';
    var tokens = [];
    var q = require('q');

    function addToken(userId, data)
    {
        var defer = q.defer();
        var id = new Date().getTime();

        var token = {_id: id, userId: userId, data: data};
        tokens.push(token);
        defer.resolve(token);
        return defer.promise;
    }

    function get(token)
    {
        var defer = q.defer();
        for (var i = 0; i < tokens.length; i++) {
            if (token === tokens[i]._id.toString()) {
                defer.resolve(tokens[i])
            } else if (i === token.length - 1) {
                defer.reject('Fake token')
            }
        }
        return defer.promise;
    }

    module.exports = {
        addToken: addToken,
        get: get
    };
})();