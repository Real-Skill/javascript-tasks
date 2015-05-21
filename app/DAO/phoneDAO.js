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


    function search(query)
    {

    }

    function getDetails(phoneId)
    {

    }

    function createNewOrUpdate(phone)
    {

    }

    function removePhone(phoneId)
    {

    }

    module.exports = {
        search: search,
        getDetails: getDetails,
        createNewOrUpdate: createNewOrUpdate,
        removePhone: removePhone
    };
})();
