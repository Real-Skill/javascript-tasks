(function ()
{
    'use strict';
    var mongoose = require('mongoose-bird')(require('mongoose'));
    var phoneSchema = new mongoose.Schema({
        model: String,
        brand: String,
        state: {
            type: String,
            enum: ['Used', 'New', 'Unknown']
        }
    }, {
        collection: 'phones'
    });
    var Model = mongoose.model('phones', phoneSchema);

    function search()
    {

    }

    module.exports = {
        search: search
    };
})();
