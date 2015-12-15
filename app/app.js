'use strict';

var Promise = require('bluebird');

module.exports = function (http)
{
    return {
        get: function (url, callback)
        {
            function internalCallback(err, response)
            {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response.body);
                }
            }

            http.get(url, internalCallback);
        }
    };
};
