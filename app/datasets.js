'use strict';
// var _ = require('lodash');

module.exports = {

    template: function() {
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
    }

};
