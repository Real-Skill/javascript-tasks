'use strict';

module.exports = function (chai, utils)
{
    function isDate(value)
    {
        return Object.prototype.toString.call(value) === '[object Date]';
    }

    function isRegExp(value)
    {
        return Object.prototype.toString.call(value) === '[object RegExp]';
    }

    function isScope(obj)
    {
        return obj && obj.$evalAsync && obj.$watch;
    }

    function isWindow(obj)
    {
        return obj && obj.window === obj;
    }

    function isFunction(value)
    {
        return typeof value === 'function';
    }


    function equals(o1, o2)
    {
        /*jshint maxcomplexity:false*/
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
                if (Array.isArray(o1)) {
                    if (!Array.isArray(o2)) {
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
                    return o1.toString() == o2.Object.prototype.toString();
                } else {
                    if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || Array.isArray(o2)) {
                        return false;
                    }
                    keySet = {};
                    for (key in o1) {
                        if (!o1.hasOwnProperty(key)) {
                            continue;
                        }
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

    function softEquals(expected, results, ignore)
    {
        var i;
        if (results instanceof Array) {
            for (i = 0; i < results.length; i++) {
                softEquals(expected[i], results[i], ignore);
            }
        } else if (ignore instanceof Array) {
            for (i = 0; i < ignore.length; i++) {
                if (results) {
                    delete results[ignore[i]];
                }
                if (expected) {
                    delete expected[ignore[i]];
                }
            }
        }
        return equals(expected, results);
    }

    function isPromise(obj)
    {
        return typeof obj.catch === 'function' || typeof obj.then === 'function';
    }

    utils.addMethod(chai.Assertion.prototype, 'softEqual', function (expected, ignore)
    {
        this.assert(softEquals(expected, this._obj, ignore), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{exp}', expected, this._obj);
    });
    utils.addProperty(chai.Assertion.prototype, 'promise', function ()
    {
        this.assert(isPromise(this._obj), 'expected #{this} to be a promise', 'expected #{this} not to be a promise');
    });

};
