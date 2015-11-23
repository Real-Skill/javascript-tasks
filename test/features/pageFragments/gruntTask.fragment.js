(function ()
{
    'use strict';

    var fs = require('fs');
    var shell = require('shelljs');
    var fileRegExp = /((.|\n|\r|\n\r)*)/;

    function File(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    File.prototype.getFile = function ()
    {
        return (fs.readFileSync(this.element, 'utf8').match(fileRegExp))[0];
    };

    File.prototype.saveFile = function (content)
    {
        fs.writeFileSync(this.element, content);
    };

    File.prototype.renameFile = function (newName)
    {
        fs.renameSync(this.element, newName);
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
    PageFragment.prototype.preparingForJshint = function ()
    {
        helper.file('target/jshint.xml').renameFile('target/jshint1.xml');

        var mouseFile = helper.file('app/mouse.js').getFile();
        var protractorConfFile = helper.file('test/protractor.conf.js').getFile();
        var directivesSpecFile = helper.file('test/features/directives.spec.js').getFile();
        var mouseSpecFile = helper.file('test/unit/mouse.spec.js').getFile();

        helper.file('app/mouse.js').saveFile(mouseFile + ';');
        helper.file('test/protractor.conf.js').saveFile(protractorConfFile + ';');
        helper.file('test/features/directives.spec.js').saveFile(directivesSpecFile + ';');
        helper.file('test/unit/mouse.spec.js').saveFile(mouseSpecFile + ';');

        shell.exec('grunt jshint --force');

        helper.file('app/mouse.js').saveFile(mouseFile);
        helper.file('test/protractor.conf.js').saveFile(protractorConfFile);
        helper.file('test/features/directives.spec.js').saveFile(directivesSpecFile);
        helper.file('test/unit/mouse.spec.js').saveFile(mouseSpecFile);

        helper.file('target/jshint.xml').renameFile('target/report.xml');
        helper.file('target/jshint1.xml').renameFile('target/jshint.xml');
    };
    PageFragment.prototype.getJshintReportContent = function ()
    {
        return helper.file('target/report.xml').getFile();
    };

    //karma
    PageFragment.prototype.getKarmaReportContent = function ()
    {
        return helper.file('target/test-results.xml').getFile();
    };

    //wiredep
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
