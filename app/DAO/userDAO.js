'use strict';
var sequence = 0;
var sha1 = require('sha1');
var users = [{_id: sequence++, email: 'mock@email.com', password: sha1('simplePassword')}];
var q = require('q');

function addUser(user)
{
    var defer = q.defer();
    users.push({_id: sequence++, email: user.email, password: user.password});
    defer.resolve({email: user.email});
    return defer.promise;
}

function getByEmail(email)
{
    var defer = q.defer();
    for (var i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            defer.resolve(users[i]);
        } else if (i === users.length - 1) {
            defer.reject('NOT_FOUND')
        }
    }
    return defer.promise;
}

function get(id)
{
    var defer = q.defer();
    for (var i = 0; i < users.length; i++) {
        if (id === users[i]._id) {
            defer.resolve(users[i]);
        } else if (i === users.length - 1) {
            defer.reject('NOT_FOUND')
        }
    }
    return defer.promise;
}

module.exports = {
    get: get,
    addUser: addUser,
    getByEmail: getByEmail
};
