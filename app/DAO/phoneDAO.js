(function ()
{
    'use strict';
    var mongoose = require('mongoose-q')();
    var phoneSchema = new mongoose.Schema({
        model: String,
        brand: String,
        state: {type: String, enum: ['Used', 'New', 'Unknown']}
    }, {
        collection: 'phones'
    });
    var Model = mongoose.model('phones', phoneSchema);

    function search(query)
    {
        var
            aggregationBody = [],
            sort = { $sort: { _id: 1 } },
            skip = { $skip: 0 },
            limit = { $limit: 2 };
        var countQuery={};

        if( query.search ) {
            var regexp = { $regex: query.search, $options: 'i' };
            countQuery={ $or: [ { model: regexp }, { brand: regexp }, { state: regexp } ] }
            aggregationBody.push( { $match: countQuery } );
        }
        if( query.sortBy ) {
            if( query.sortBy !== '_id' ) {
                delete sort.$sort._id;
                sort.$sort[ query.sortBy ] = 1;
            }
        }
        else {
            query.sortBy = '_id';
        }
        if( query.sortDir ) {
            sort.$sort[ query.sortBy ] = query.sortDir === 'DESC' ? -1 : 1;
        }
        if( query.skip > -1 ) {
            skip.$skip = parseInt( query.skip, 10 )
        }
        if( query.limit > 0 ) {
            limit.$limit = parseInt( query.limit, 10 )
        }

        aggregationBody.push( sort, skip, limit );

//        console.log(JSON.stringify(countQuery, null, '  '))
        return Model.find(countQuery).count().then( function( result ) {
            var total = result;
            return Model.aggregateQ( aggregationBody ).then( function( result ) {
                return {results: result, total: total};
            } );
        });
    }

    module.exports = {
        search: search
    };
})();
