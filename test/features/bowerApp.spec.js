var BowerApplication = require('./pageFragments/bowerApplication.fragment.js');
var bowerApplication = new BowerApplication();

describe('Bower application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('typeahead', function ()
    {
        afterEach(function ()
        {
            bowerApplication.clearTypeahead();
        });

        it('should select the first result after typing letters', function ()
        {
            bowerApplication.setTypeaheadToFirstResult('Ala');
            expect(bowerApplication.getTypeahead()).toEqual('Alabama');
        });
        it('should select the third result after typing letters', function ()
        {
            bowerApplication.setTypeaheadToThirdResult('New');
            expect(bowerApplication.getTypeahead()).toBe('New Mexico');
        });
    });

    describe('checkbox fluent', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            bowerApplication.checkBox();

        });
        it('should check element', function ()
        {
            expect(bowerApplication.isBoxChecked()).toBe(true);
        });
        it('should uncheck element', function ()
        {
            bowerApplication.checkBox();
            expect(bowerApplication.isBoxChecked()).toBe(false);
        });
    });

    describe('checkbox', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
        });

        describe('default configuration', function ()
        {
            it('should set left to false', function ()
            {
                expect(bowerApplication.getLeftText()).toBe('false');
            });
            it('should set middle to true', function ()
            {
                expect(bowerApplication.getMiddleText()).toBe('true');
            });
            it('should set right to false', function ()
            {
                expect(bowerApplication.getRightText()).toBe('false');
            });
        });

        describe('click left button', function ()
        {
            beforeEach(function ()
            {
                bowerApplication.clickLeftButton();
            });
            it('should set left to true', function ()
            {
                expect(bowerApplication.getLeftText()).toBe('true');
            });
            it('should set middle to true', function ()
            {
                expect(bowerApplication.getMiddleText()).toBe('true');
            });
            it('should set right to false', function ()
            {
                expect(bowerApplication.getRightText()).toBe('false');
            });
        });

        describe('click middle button', function ()
        {
            beforeEach(function ()
            {
                bowerApplication.clickMiddleButton();
            });

            it('should set left to false', function ()
            {
                expect(bowerApplication.getLeftText()).toBe('false');
            });
            it('should set middle to false', function ()
            {
                expect(bowerApplication.getMiddleText()).toBe('false');
            });
            it('should set right to false', function ()
            {
                expect(bowerApplication.getRightText()).toBe('false');
            });
        });

        describe('click right button', function ()
        {
            beforeEach(function ()
            {
                bowerApplication.clickRightButton();
            });
            it('should set left to false', function ()
            {
                expect(bowerApplication.getLeftText()).toBe('false');
            });
            it('should set middle to true', function ()
            {
                expect(bowerApplication.getMiddleText()).toBe('true');
            });
            it('should set right to true', function ()
            {
                expect(bowerApplication.getRightText()).toBe('true');
            });
        });
    });

    describe('bower file', function ()
    {
        it('should have "jquery" properties in resolutions', function ()
        {
            expect(bowerApplication.getBowerJsonResolutions()).toMatch('jquery');
        });
        it('should have "bootstrap" properties in resolutions', function ()
        {
            expect(bowerApplication.getBowerJsonResolutions()).toMatch('bootstrap');
        });
        it('should have "angular" properties in resolutions', function ()
        {
            expect(bowerApplication.getBowerJsonResolutions()).toMatch('angular');
        });
    });
});
