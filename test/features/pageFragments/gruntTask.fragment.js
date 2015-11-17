(function ()
{
    'use strict';

    var fs = require('fs');
    var gruntRegExp = /initConfig\(((.|\n|\r|\n\r)*)}\);/;
    var fileRegExp = /((.|\n|\r|\n\r)*)/;

    var getGruntTaskProperty = function (file)
    {
        var content = (fs.readFileSync(file, 'utf8').match(gruntRegExp))[0].replace(/initConfig\(/, '').replace(/\);/, '');
        return JSON.parse(JSON.stringify(eval('(' + content + ')')));

    };

    function File(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    File.prototype.getContent = function (prop1, prop2, prop3)
    {
        var object = getGruntTaskProperty(this.element);
        return object[prop1][prop2][prop3];
    };

    File.prototype.getFile = function ()
    {
        return (fs.readFileSync(this.element, 'utf8').match(fileRegExp))[0];
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

    //jshint
    PageFragment.prototype.getGruntJshintJshintrcOption = function ()
    {
        return helper.file('Gruntfile.js').getContent('jshint', 'options', 'jshintrc');
    };
    PageFragment.prototype.getGruntJshintReporterOption = function ()
    {
        return helper.file('Gruntfile.js').getContent('jshint', 'options', 'reporter');
    };
    PageFragment.prototype.getGruntJshintReporterOutputOption = function ()
    {
        return helper.file('Gruntfile.js').getContent('jshint', 'options', 'reporterOutput');
    };
    PageFragment.prototype.getGruntJshintSrcFiles = function ()
    {
        return helper.file('Gruntfile.js').getContent('jshint', 'files', 'src');
    };

    //karma
    PageFragment.prototype.getKarmaConfigFile = function ()
    {
        return helper.file('Gruntfile.js').getContent('karma', 'options', 'configFile');
    };
    PageFragment.prototype.getKarmaUnitRun = function ()
    {
        return helper.file('Gruntfile.js').getContent('karma', 'unit', 'singleRun');
    };
    PageFragment.prototype.getKarmaDevRun = function ()
    {
        return helper.file('Gruntfile.js').getContent('karma', 'dev', 'singleRun');
    };

    //wiredep
    PageFragment.prototype.getWiredepTargetSrc = function ()
    {
        return helper.file('Gruntfile.js').getContent('wiredep', 'target', 'src');
    };
    PageFragment.prototype.getWiredepTargetExclude = function ()
    {
        return helper.file('Gruntfile.js').getContent('wiredep', 'target', 'exclude');
    };
    PageFragment.prototype.getWiredepIndexContent = function ()
    {
        return helper.file('app/index.html').getFile();
    };

    //package.json
    PageFragment.prototype.getPackageJsonContent = function ()
    {
        return helper.file('package.json').getFile();
    };

    module.exports = PageFragment;
})();
