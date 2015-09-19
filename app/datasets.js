'use strict';

module.exports = {

    constant: function ()
    {
        var object = {
            'john':  { 'age': 36, 'active': true },
            'fred':    { 'age': 40, 'active': false },
            'pebbles': { 'age': 1,  'active': true }
        };
        return [object];
    },
    
    conforms: function ()
    {
        var object = {
            day: 'Monday',
            number: 1
        };
        return [object];
    },

    flow: function()
    {
        function triple(n) {
            return n * n* n;
        }
        return[triple];
    },

    flowRight: function()
    {
        function triple(n) {
            return n * n * n;
        }
        return[triple];
    },

    identity: function()
    {
        var object = {
            'first':  { 'value': 36, 'set': true },
            'second':    { 'value': 40, 'set': false },
            'third': { 'value': 1,  'set': true }
        };
        return[object];
    },

    matches: function()
    {
        return[{ 'number': 1, 'pass': true}];
    },

    matchesProperty: function()
    {
        return ['type','banana'];
    }
    
};
