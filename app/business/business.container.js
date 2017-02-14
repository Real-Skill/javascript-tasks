'use strict';

var phonesManager = require('./phone.manager');

function getContext(request)
{
    return {user: request.user};
}

function getter(manager)
{
    return function (request)
    {
        return manager.create(getContext(request));
    };
}

module.exports = {
    getPhonesManager: getter(phonesManager)
};
