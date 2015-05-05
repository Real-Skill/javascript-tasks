(function ()
{
    'use strict';
    module.exports = function (router)
    {
        require('./phone.endpoint')(router);
    };
})();