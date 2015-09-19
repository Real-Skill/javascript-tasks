'use strict';

var Promise = require('bluebird');
var idSequence = 1;
var db = {
    dog: {}
};
var connected;

module.exports = {
    get: function (type, id) {
        var typeDb = db[type];
        if (!typeDb) {
            return Promise.reject('Invalid type');
        }
        if (!connected) {
            return Promise.reject('No connection');
        }
        var item = typeDb[id];
        if (!item) {
            return Promise.reject('Entity not found');
        }
        return Promise.resolve(item);
    },
    save: function (type, entity) {
        var typeDb = db[type];
        if (!typeDb) {
            return Promise.reject('Invalid type');
        }
        if (!connected) {
            return Promise.reject('No connection');
        }
        if (entity.id) {
            var existingItem = typeDb[entity.id];
            if (!existingItem) {
                return Promise.reject('Entity not found');
            }
        } else {
            entity.id = idSequence++;
        }
        typeDb[entity.id] = entity;
        return Promise.resolve(entity);
    },
    connect: function () {
        connected = true;
    },
    disconnect: function () {
        connected = false;
    }
};
