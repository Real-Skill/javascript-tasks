(function ()
{
    'use strict';

    var Promise = require('bluebird');
    var mongoose = require('mongoose-q')();
    var configDB = require('../app/config/database.config');

    function seedPhones(phones)
    {
        if (mongoose.connection.collections.phones) {
            mongoose.connection.collections.phones.drop();
        }
        var phonesSchema = mongoose.models.phones;
        phonesSchema = phonesSchema || mongoose.model('phones', require('../app/DAO/phoneDAO').schema);
        return phonesSchema.createQ(phones);
    }

    function openDBConnection()
    {
        return new Promise(function (resolve, reject)
        {
            mongoose.connect(configDB.url, function (error)
            {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    function closeDBConnection()
    {
        //sometimes need this function
        //mongoose.connection.db.dropDatabase();
        return new Promise(function (resolve, reject)
        {
            mongoose.connection.close(function (error)
            {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }


    function fromMongo(obj)
    {
        var cpy;

        if (obj instanceof Array) {
            cpy = [];
            for (var i = 0; i < obj.length; i++) {
                cpy.push(fromMongo(obj[ i ]));
            }
        } else {
            cpy = obj._doc ? obj._doc : obj;
        }

        return cpy;
    }

    module.exports = {
        seedPhones: seedPhones,
        openDBConnection: openDBConnection,
        closeDBConnection: closeDBConnection,
        convertFromMongo: fromMongo
    };
})();
