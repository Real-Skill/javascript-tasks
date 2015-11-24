'use strict';

var _ = require('lodash');
var Promise = require('bluebird');

module.exports = function (db)
{
    var resources = ['people', 'pets'];
    var data = {};

    function createExpander(typeDataContainer)
    {
        return function (item)
        {
            _.forEach(item.relationships, function (relationship, relationshipName)
            {
                item.relationships[relationshipName] = data[relationship.type][relationship.id];
            });
            typeDataContainer[item.id] = item;
        };
    }

    return Promise.map(resources, function (resource)
    {
        return db.getAll(resource).then(function (result)
        {
            var resourceDataContainer = {};
            data[resource] = resourceDataContainer;
            _.forEach(result, createExpander(resourceDataContainer));
        });
    }).then(function ()
    {
        return data;
    });
};
