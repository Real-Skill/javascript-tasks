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
        var
            skip = 0,
            limit = query.limit ? parseInt( query.limit, 10 ) : 2,
            total;

        if( query.hasOwnProperty( 'skip' ) && query.skip > 0 ) {
            skip = parseInt( query.skip, 10 );
        }
        if( query.hasOwnProperty( 'limit' ) && query.skip > -1 ) {
            skip = parseInt( query.skip, 10 );
        }

        return Model.find().count().then( function( data ) {
            total = data;
            return Model.find()
                .skip( skip )
                .limit( limit )
                .execQ()
                .then( function( data ) {
                    return { results: data, total: total };
                } );
        });
    }

    module.exports = {
        search: search
    };
})();
