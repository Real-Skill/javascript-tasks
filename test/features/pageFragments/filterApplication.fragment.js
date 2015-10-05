(function ()
{
    'use strict';

    function TextInput(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TableField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextInput.prototype.getValue = function ()
    {
        return this.element.getAttribute('value');
    };

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    TableField.prototype.getValue = function ()
    {
        return this.element.getText();
    };


    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        },
        textField: function (e)
        {
            return new TextField(e);
        },
        tableField: function (e)
        {
            return new TextField(e);
        }
    };

    var elements = {
        textInput: element.bind(element, by.css('input')),
        filterTellMe: element.bind(element, by.css('h3')),
        tableField: {
            firstWithFilter: element.bind(null, by.css('#quote')),
            secondWithFilter: element.bind(null, by.css('#withoutH')),
            thirdWithFilter: element.bind(null, by.css('#firstLetterUp'))
        }
    };

    function PageFragment()
    {
    }

// get input value
    PageFragment.prototype.getTextInputValue = function ()
    {
        return helper.input(elements.textInput()).getValue();
    };

// set input value
    PageFragment.prototype.setTextInputValue = function (filter)
    {
        return helper.input(elements.textInput()).setValue(filter);
    };

// clear input value
    PageFragment.prototype.clearTextInputValue = function ()
    {
        return helper.input(elements.textInput()).clearValue();
    };

// get text after filter
    PageFragment.prototype.getTextFieldValue = function ()
    {
        return helper.textField(elements.filterTellMe()).getValue();
    };

// get table field
    PageFragment.prototype.getFirstRowWithoutFilterColumn = function ()
    {
        return helper.tableField(elements.tableField.firstWithFilter()).getValue();
    };
    PageFragment.prototype.getSecondRowWithoutFilterColumn = function ()
    {
        return helper.tableField(elements.tableField.secondWithFilter()).getValue();
    };
    PageFragment.prototype.getThirdRowWithoutFilterColumn = function ()
    {
        return helper.tableField(elements.tableField.thirdWithFilter()).getValue();
    };

    module.exports = PageFragment;
})();
