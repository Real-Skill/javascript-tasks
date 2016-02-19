'use strict';

var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));

var schema = mongoose.Schema({
    brand: String,
    color: String
});

var CarModel = mongoose.model('car', schema);


module.exports = CarModel;
