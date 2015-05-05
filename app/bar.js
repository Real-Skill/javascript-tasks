'use strict';

var foo = require('./foo');

var myName = 'bar';

module.exports = {
    getName: function ()
    {
        return myName;
    },
    setName: function (value)
    {
        myName = value;
    },
    greet: function ()
    {
        return 'Hello ' + foo.getName();
    }
};
