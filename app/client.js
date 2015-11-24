'use strict';

var $http = require('http-as-promised');

module.exports = function createApp(baseUrl)
{
    return {
        isReady: function ()
        {
            return $http.get(baseUrl + '/').spread(function (res, body)
            {
                return body === 100;
            });
        }
    };
};
