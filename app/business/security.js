(function ()
{
    'use strict';
    var Promise = require('bluebird');

    function isAuthenticated(context)
    {
        return new Promise(function(resolve,reject){
            //        TODO make sure this function is properly implemented.
            reject();
        });
    }

    module.exports = {
        isAuthenticated: isAuthenticated
    };
})();
