(function ()
{
    'use strict';

    var sha1 = require('sha1');
    var q = require('q');
    var userDAO = require('../DAO/userDAO');
    var tokenDAO = require('../DAO/tokenDAO');

    function hashPassword(password)
    {
        return sha1(password);
    }

    function getToken(user)
    {
        var defer = q.defer();
        user.then(function (result)
        {
            defer.resolve(result._id);
        });
        return defer.promise;
    }

    function authenticate(email, password)
    {

    }

    function addUser(user)
    {

    }

    function getUserByToken(token)
    {

    }

    module.exports = {
        addUser: addUser,
        authenticate: authenticate,
        getUserByToken: getUserByToken
    };
})();