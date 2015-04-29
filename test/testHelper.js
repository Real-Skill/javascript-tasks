(function ()
{
    'use strict';

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

    function seedUsers(users)
    {
        if (mongoose.connection.collections.user) {
            mongoose.connection.collections.user.drop();
        }
        var userSchema = mongoose.models.user;
        userSchema = userSchema || mongoose.model('user', require('../app/DAO/userDAO').schema);
        return userSchema.createQ(users);
    }


    function openDBConnection()
    {
        mongoose.connect(configDB.url, function (error)
        {
            if (error) {
                console.log(error);
            }
        });
    }

    function closeDBConnection(done)
    {
        //sometimes need this function
        //mongoose.connection.db.dropDatabase();
        mongoose.connection.close(function (error)
        {
            if (error) {
                done(error);
            }
            done();
        });
    }


    var toString = Object.prototype.toString;
    var isArray = Array.isArray;

    function isScope(obj)
    {
        return obj && obj.$evalAsync && obj.$watch;
    }

    function isWindow(obj)
    {
        return obj && obj.window === obj;
    }

    function isDate(value)
    {
        return toString.call(value) === '[object Date]';
    }

    function isFunction(value)
    {
        return typeof value === 'function';
    }

    function isRegExp(value)
    {
        return toString.call(value) === '[object RegExp]';
    }


    function equals(o1, o2)
    {
        if (o1 === o2) {
            return true;
        }
        if (o1 === null || o2 === null) {
            return false;
        }
        if (o1 !== o1 && o2 !== o2) {
            return true;
        } // NaN === NaN
        var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
        /*jshint -W116*/
        if (t1 == t2) {
            if (t1 == 'object') {
                if (isArray(o1)) {
                    if (!isArray(o2)) {
                        return false;
                    }
                    if ((length = o1.length) == o2.length) {
                        for (key = 0; key < length; key++) {
                            if (!equals(o1[key], o2[key])) {
                                return false;
                            }
                        }
                        return true;
                    }
                } else if (isDate(o1)) {
                    if (!isDate(o2)) {
                        return false;
                    }
                    return equals(o1.getTime(), o2.getTime());
                } else if (isRegExp(o1) && isRegExp(o2)) {
                    return o1.toString() == o2.toString();
                } else {
                    if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2)) {
                        return false;
                    }
                    keySet = {};
                    for (key in o1) {
                        if (key.charAt(0) === '$' || isFunction(o1[key])) {
                            continue;
                        }
                        if (!equals(o1[key], o2[key])) {
                            return false;
                        }
                        keySet[key] = true;
                    }
                    for (key in o2) {
                        if (!keySet.hasOwnProperty(key) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key])) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    }

    function isEquals(expected, results, ignore)
    {
        var i;
        if (results instanceof Array) {
            for (i = 0; i < results.length; i++) {
                isEquals(null, results[i], ignore);
            }
        } else if (ignore instanceof Array) {
            for (i = 0; i < ignore.length; i++) {
                /*jshint -W073*/
                if (results.hasOwnProperty(ignore[i])) {
                    delete results[ignore[i]];
                }
            }
        }
        return equals(expected, results);
    }

    module.exports = {
        isEquals: isEquals,
        seedPhones: seedPhones,
        seedUsers: seedUsers,
        openDBConnection: openDBConnection,
        closeDBConnection: closeDBConnection
    };
})();
