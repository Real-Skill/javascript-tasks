var GruntTask = require('./pageFragments/gruntTask.fragment.js');
var gruntTask = new GruntTask();

describe('Grunt tasks', function ()
{
    'use strict';

    describe('jshint', function ()
    {
        describe('options', function ()
        {
            it('should use .jshintrc configuration file', function ()
            {
                expect(gruntTask.getGruntJshintJshintrcOption()).toEqual(true);
            });
            it('should use reporter', function ()
            {
                expect(gruntTask.getGruntJshintReporterOption()).toEqual('checkstyle');
            });
            it('should put the jshint.xml report file into target folder ', function ()
            {
                expect(gruntTask.getGruntJshintReporterOutputOption()).toEqual('target/jshint.xml');
            });
        });

        describe('files', function ()
        {
            it('should specify all .js files from app folder to linted', function ()
            {
                expect(gruntTask.getGruntJshintSrcFiles()).toContain('app/*.js');
            });
            it('should specify all .js files from test folder and its subfolders to linted', function ()
            {
                expect(gruntTask.getGruntJshintSrcFiles()).toContain('test/**/*.js');
            });
            it('should excluded all .js files in bower_components folder and its subfolders from linted', function ()
            {
                expect(gruntTask.getGruntJshintSrcFiles()).toContain('!app/bower_components/**/*.js');
            });
        });
    });

    describe('karma', function ()
    {

        it('should use karma.conf.js configuration file', function ()
        {
            expect(gruntTask.getKarmaConfigFile()).toEqual('test/karma.conf.js');
        });
        it('should set unit task to shut down the karma server after a test run', function ()
        {
            expect(gruntTask.getKarmaUnitRun()).toEqual(true);
        });
        it('should set dev task to keep the karma server up after a test run', function ()
        {
            expect(gruntTask.getKarmaDevRun()).toEqual(false);
        });
    });

    describe('wiredep', function ()
    {
        describe('configuration', function ()
        {
            it('should use karma.conf.js configuration file', function ()
            {
                expect(gruntTask.getWiredepTargetSrc()).toContain('app/index.html');
            });
            it('should set unit task to shut down the karma server after a test run', function ()
            {
                expect(gruntTask.getWiredepTargetExclude()).toContain('app/bower_components/bootstrap/dist/js');
            });
            it('should excluded all .js files from bower bootstrap plugin', function ()
            {
                expect(gruntTask.getGruntJshintSrcFiles()).toContain('!app/bower_components/**/*.js');
            });
        });
        describe('the output file', function ()
        {
            it('should contain start of bower css section', function ()
            {
                expect(gruntTask.getWiredepIndexContent()).toContain('<!-- bower:css -->');
            });
            it('should contain start of bower js section', function ()
            {
                expect(gruntTask.getWiredepIndexContent()).toContain('<!-- bower:js -->');
            });
            it('should contain bootstrap css dependency', function ()
            {
                expect(gruntTask.getWiredepIndexContent()).toContain('<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css"');
            });
            it('should contain jquery js dependency', function ()
            {
                expect(gruntTask.getWiredepIndexContent()).toContain('<script src="bower_components/jquery/dist/jquery.js"');
            });
            it('should contain angular js dependency', function ()
            {
                expect(gruntTask.getWiredepIndexContent()).toContain('<script src="bower_components/angular/angular.js"');
            });
            it('should not contain bootstrap js dependency', function ()
            {
                expect(gruntTask.getWiredepIndexContent()).not.toContain('<script src="bower_components/bootstrap/');
            });

        });

        describe('package.json', function ()
        {
            it('should contain grunt-contrib-jshint dependency', function ()
            {
                expect(gruntTask.getPackageJsonContent()).toContain('grunt-contrib-jshint');
            });
            it('should contain grunt-contrib-jshint dependency', function ()
            {
                expect(gruntTask.getPackageJsonContent()).toContain('grunt-karma');
            });
            it('should contain grunt-contrib-jshint dependency', function ()
            {
                expect(gruntTask.getPackageJsonContent()).toContain('grunt-wiredep');
            });
        });
    });
});
