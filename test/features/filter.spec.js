var FilterApplication = require('./pageFragments/filterApplication.fragment.js');
var filterApplication = new FilterApplication();

describe('Filter application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('static filters', function ()
    {
        describe('add filters to text in the table', function ()
        {
            it('should display the text with quote filter', function ()
            {
                expect(filterApplication.getFirstRowWithoutFilterColumn()).toEqual('"To be, or not to be..."');
            });
            it('should display the text with withoutH filter', function ()
            {
                expect(filterApplication.getSecondRowWithoutFilterColumn()).toEqual('Te obbit: Te Battle of te Five Armies');
            });
            it('should display the text with firstLetterUp filter', function ()
            {
                expect(filterApplication.getThirdRowWithoutFilterColumn()).
                        toEqual('Visit News For Up-To-The-Minute News, Breaking News, Video, Audio And Stories.');
            });
        });

    });

    describe('dynamic filter', function ()
    {
        describe('initialization', function ()
        {
            it('should have empty input on startup', function ()
            {
                return filterApplication.getTextInputValue().then(function (result)
                {
                    expect(result).toBe('');
                });
            });
        });

        describe('when text is entered to input filed', function ()
        {
            beforeAll(function ()
            {
                filterApplication.setTextInputValue('Lorem ipsum dolor sit amet');
            });

            afterEach(function ()
            {
                filterApplication.clearTextInputValue();
                filterApplication.setTextInputValue('for up-to-the-minute news.');
            });

            it('should display the data in uppercase', function ()
            {
                expect(filterApplication.getTextFieldValue()).toEqual('LOREM IPSUM DOLOR SIT AMET');
            });
            it('should display the data in uppercase', function ()
            {
                expect(filterApplication.getTextFieldValue()).toEqual('FOR UP-TO-THE-MINUTE NEWS.');
            });
        });

    });
});
