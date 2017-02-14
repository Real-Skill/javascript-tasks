'use strict';
var Promise = require('bluebird');

function isAuthenticated(context)
{
    return new Promise(function (resolve, reject)
    {
        if (!context || !context.user) {
            reject();
        } else {
            resolve();
        }
    });
}

module.exports = {
    isAuthenticated: isAuthenticated
};
