'use strict';

var bar = require('./bar');

var myName = 'foo';

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
        return 'Hello ' + bar.getName();
    }
};
