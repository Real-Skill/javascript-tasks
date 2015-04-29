(function ()
{
    'use strict';
    var mongoose = require('mongoose-q')();
    var phoneSchema = new mongoose.Schema({
        model: String,
        brand: String,
        stan: {type: String, enum: ['Used', 'New']}
    }, {
        collection: 'phones'
    });
    var Model = mongoose.model('phones', phoneSchema);

    function createNewOrUpdate(phone)
    {

    }

    function search(query)
    {
    }

    function getDetails(phoneId)
    {

    }

    function removePhone(phoneId)
    {

    }

    module.exports = {
        removePhone: removePhone,
        getDetails: getDetails,
        createNewOrUpdate: createNewOrUpdate,
        search: search,
        schema: phoneSchema
    };
})();
