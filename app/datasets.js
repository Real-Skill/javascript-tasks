'use strict';
// var _ = require('lodash');

module.exports = {

    camelCase: function () {
        var string = 'some string to test function';
        return [string];
    },
    capitalize: function () {
        var string = 'some STRING TO TEST FUNCTION';
        return [string];
    },
    deburr: function () {
        var string = 'somé string to tést function';
        return [string];
    },
    endsWith: function () {
        var string = 'some string to test function';
        var target = 'e';
        var position = 17;
        return [string, target, position];
    },
    escape: function () {
        var string = 'Tom & Jerry are old friends';
        return [string];
    },
    escapeRegExp: function () {
        var string = '[realskill](https://realskill.com/)';
        return [string];
    },
    kebabCase: function () {
        var string = 'some string to test function';
        return [string];
    },
    lowerCase: function () {
        var string = 'SOME STRING TO TEST FUNCTION';
        return [string];
    },
    lowerFirst: function () {
        var string = 'SOME STRING TO TEST FUNCTION';
        return [string];
    },
    pad: function () {
        var string = 'some long sweet text';
        var length = 30;
        var pad_string = '._';
        return [string, length, pad_string];
    },
    padEnd: function () {
        var string = 'some another long sweet text';
        var length = 36;
        var pad_string = '.*';
        return [string, length, pad_string];
    },
    padStart: function () {
        var string = 'try again some long sweet text';
        var length = 42;
        var pad_string = '|_';
        return [string, length, pad_string];
    },
    parseInt: function () {
        var string = '1000';
        var radix = 2;
        return [string, radix];
    },
    repeat: function () {
        var string = 'repeat me!'
        var n = 4;
        return [string, n];
    },
    replace1: function () {
        var string = 'Hello world!';
        var pattern = 'world';
        var replacement = 'universe';
        return [string, pattern, replacement];
    },
    replace2: function () {
        var string = 'Hello universe!';
        var pattern = /universe/g;
        var replacement = 'world';
        return [string, pattern, replacement];
    },
    replace3: function () {
        var string = 'Hello universe!';
        var pattern = 'universe';
        var replacement = function () {
            return 'world';
        };
        return [string, pattern, replacement];
    },
    replace4: function () {
        var string = 'Hello universe!';
        var pattern = /universe/g;
        var replacement = function () {
            return 'world';
        };
        return [string, pattern, replacement];
    },
    snakeCase: function () {
        var string = 'some string to test function';
        return [string];
    },
    split: function () {
        var string = 'split-me-please-i-am-too-long';
        var separator = '-';
        var limit = 2;
        return [string, separator, limit];
    },
    startCase: function () {
        var string = 'some string to test function';
        return [string];
    },
    startsWith: function () {
        var string = 'some string to test function';
        var target = 'e';
        var position = 3;
        return [string, target, position];
    },

    template: function () {
        // [string=''] (string): The template string.
        // [options={}] (Object): The options object.
        // [options.escape=_.templateSettings.escape] (RegExp): The HTML "escape" delimiter.
        // [options.evaluate=_.templateSettings.evaluate] (RegExp): The "evaluate" delimiter.
        // [options.imports=_.templateSettings.imports] (Object): An object to import into the template as free variables.
        // [options.interpolate=_.templateSettings.interpolate] (RegExp): The "interpolate" delimiter.
        // [options.sourceURL='lodash.templateSources[n]'] (string): The sourceURL of the compiled template.
        // [options.variable='obj'] (string): The data object variable name.

        var str = 'hi <%= data.user %>!';
        var options = {
            'variable': 'data'

        };
        return [str, options];
    },

    toLower: function () {
        var string = 'SOME STRING TO TEST FUNCTION';
        return [string];
    },
    toUpper: function () {
        var string = 'some string to test function';
        return [string];
    },
    trim: function () {
        var string = '..some string to test function.....';
        var chars = '.';
        return [string, chars];
    },
    trimEnd: function () {
        var string = 'some string to test!';
        var chars = '!';
        return [string, chars];
    },
    trimStart: function () {
        var string = '..some string to test function.....';
        var chars = '.';
        return [string, chars];
    },
    truncate: function () {
        var string = 'some very long text, we should cut it'
        var options = {'length':22, 'omission': '...'}
        return [string, options];
    },
    unescape: function () {
        var string = 'tom &amp; jerry were old friends'
        return [string];
    },
    upperCase: function () {
        var string = 'some string to test function'
        return [string];
    },
    upperFirst: function () {
        var string = 'some string to test function'
        return [string];
    },
    words1: function () {
        var string = 'bread, butter, milk';
        return [string];
    },
    words2: function () {
        var string = 'bread, butter, milk';
        var pattern = /[^, ]+/g;
        return [string, pattern];
    }
};
