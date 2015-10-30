(function ()
{
    'use strict';

    var fs = require('fs');
    var regExp = /initConfig\(((.|\n|\r|\n\r)*)}\);/;

    function File(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    File.prototype.getContent = function (property)
    {
        return (fs.readFileSync(this.element, 'utf8').match(regExp))[0].replace(/initConfig\(/,'').replace(/\);/,'');
    };

    var helper = {
        file: function (e)
        {
            return new File(e);
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getGruntJshintContent = function ()
    {
        return helper.file('Gruntfile.js').getContent('jshint');
    };
    PageFragment.prototype.getGruntKarmaContent = function ()
    {
        return helper.file('Gruntfile.js').getContent('karma');
    };
    PageFragment.prototype.getGruntWiredepContent = function ()
    {
        return helper.file('Gruntfile.js').getContent('wiredep');
    };


    module.exports = PageFragment;
})();
