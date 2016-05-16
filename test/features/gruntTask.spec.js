var GruntTask = require('./pageFragments/gruntTask.fragment.js');
var gruntTask = new GruntTask();

describe('Grunt tasks', function ()
{
    'use strict';

    describe('jshint', function ()
    {
        beforeAll(function ()
        {
            gruntTask.preparingForJshint();
        });

        it('should use checkstyle reporter', function ()
        {
            expect(gruntTask.getJshintReportContent()).toContain('<checkstyle');
        });
        it('should check files in /app', function ()
        {
            expect(gruntTask.getJshintReportContent()).toContain('../app/mouse.js');
        });
        it('should check files in /test', function ()
        {
            expect(gruntTask.getJshintReportContent()).toContain('../test/features/directives.spec.js');
            expect(gruntTask.getJshintReportContent()).toContain('../test/protractor.conf.js');
            expect(gruntTask.getJshintReportContent()).toContain('../test/unit/mouse.spec.js');
        });
        it('should not check files in bower_components', function ()
        {
            expect(gruntTask.getJshintReportContent()).not.toContain('../app/bower_components');
        });

    });

    describe('karma', function ()
    {
        it('should run test for files in /app', function ()
        {
            expect(gruntTask.getKarmaReportContent()).toContain('tests="2"');
            expect(gruntTask.getKarmaReportContent()).toContain('<testcase name="should add btn-danger class when mouseenter"');
            expect(gruntTask.getKarmaReportContent()).toContain('<testcase name="should remove btn-danger class when mouseleave"');
        });
        it('should not report any errors', function ()
        {
            expect(gruntTask.getKarmaReportContent()).toContain('errors="0"');
            expect(gruntTask.getKarmaReportContent()).toContain('failures="0"');
        });
    });

    describe('wiredep', function ()
    {
        describe('the index file', function ()
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
    });
});
