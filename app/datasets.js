'use strict';
// var _ = require('lodash');

module.exports = {

    camelCase: function () {
        var string = 'Some very long string prepared to transform';
        return [string];
    },
    capitalize: function () {
        var string = 'some very long string prepared to transform';
        return [string];
    },
    deburr: function () {
        var string = 'somé véry long string préparéd to transform';
        return [string];
    },
    endsWith: function () {
        var string = 'string to test if ends with';
        var target = 'e';
        var position = 19;
        return [string, target, position];
    },
    escape: function () {
        var string = 'Tom & Jerry are friends';
        return [string];
    },
    escapeRegExp: function () {
        var string = '[realskill](https://realskill.com/)';
        return [string];
    },
    kebabCase: function () {
        var string = 'some very long string prepared to transform';
        return [string];
    },
    lowerCase: function () {
        var string = 'SOME VERY LONG STRING PREPARED TO TRANSFORM';
        return [string];
    },
    lowerFirst: function () {
        var string = 'SOME VERY LONG STRING PREPARED TO TRANSFORM';
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
        return [];
    },
    repeat: function () {
        var string = 'repeat me!'
        var n = 4;
        return [string, n];
    },
    // replace: function () {
    //
    //     return [];
    // },
    snakeCase: function () {
        var string = 'Some very long string prepared to transform';
        return [string];
    },
    split: function () {
        var string = 'split-me-i-am-too-long';
        var separator = '-';
        var limit = 2;
        return [string, separator, limit];
    },
    startCase: function () {
        var string = 'Some very long string prepared to transform';
        return [string];
    },
    startsWith: function () {
        var string = 'string to test if ends with';
        var target = 'e';
        var position = 11;
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
        var string = 'Some very long string prepared to transform';
        return [string];
    },
    toUpper: function () {
        var string = 'Some very long string prepared to transform';
        return [string];
    },
    trim: function () {
        var string;
        var chars;
        return [];
    },
    trimEnd: function () {
        var string;
        var chars;
        return [];
    },
    trimStart: function () {
        var string;
        var chars;
        return [];
    },
    truncate: function () {

        return [];
    },
    unescape: function () {

        return [];
    },
    upperCase: function () {

        return [];
    },
    upperFirst: function () {

        return [];
    },
    words1: function () {

        return [];
    },
    words2: function () {

        return [];
    },
};
