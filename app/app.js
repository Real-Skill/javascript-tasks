'use strict';

var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));

var schema = mongoose.Schema({
    attributes: {
        name: String,
        type: String
    },
    relationships: {
        attendees: Array
    }
});

var EventModel = mongoose.model('event', schema);


module.exports = {
    createEvent: function (event)
    {
        return new EventModel(event).saveAsync();
    }
};
