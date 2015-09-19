'use strict';

function Guy(name)
{
    this.getName = function ()
    {
        return name;
    };
}

module.exports = Guy;
