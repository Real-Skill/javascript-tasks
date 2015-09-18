(function ()
{
    'use strict';

    var sha1 = require('sha1');
    var q = require('q');
    var userDAO = require('../DAO/userDAO');

    function hashPassword(password)
    {
        return sha1(password);
    }

    function authenticate(email, password)
    {

    }

    function getUserByToken(token)
    {

    }

    module.exports = {
        authenticate: authenticate,
        getUserByToken: getUserByToken
    };
})();
