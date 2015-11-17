(function ()
{
    'use strict';

    var fs = require('fs');

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Typeahead(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Button(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Checkbox(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function File(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    Typeahead.prototype.getValue = function ()
    {
        return this.element.getAttribute('value');
    };

    Typeahead.prototype.setValue = function (text, number)
    {
        this.element.sendKeys(text);
        for (var i = 0; i < number; i++) {
            this.element.sendKeys('\uE015');
        }
        return this.element.click();
    };

    Typeahead.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Checkbox.prototype.check = function ()
    {
        return this.element.click();
    };
    Checkbox.prototype.isChecked = function ()
    {
        return this.element.isSelected();
    };

    File.prototype.getContent = function (property)
    {
        var data = JSON.parse(fs.readFileSync(this.element, 'utf8')).resolutions;
        return data.hasOwnProperty(property);
    };


    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        typeahead: function (e)
        {
            return new Typeahead(e);
        },
        checkbox: function (e)
        {
            return new Checkbox(e);
        },
        button: function (e)
        {
            return new Button(e);
        },
        file: function (e)
        {
            return new File(e);
        }
    };

    var elements = {
        typeahead: {
            input: element.bind(null, by.css('#typeahead'))
        },
        checkboxFuelux: {
            element: element.bind(null, by.css('#checkboxFuelux')),
            input: element.bind(null, by.css('#inputFuelux'))
        },
        checkbox: {
            button: {
                left: element.bind(null, by.model('checkModel.left')),
                middle: element.bind(null, by.model('checkModel.middle')),
                right: element.bind(null, by.model('checkModel.right'))
            },
            text: {
                left: element.bind(null, by.binding('checkModel.left')),
                middle: element.bind(null, by.binding('checkModel.middle')),
                right: element.bind(null, by.binding('checkModel.right'))
            }
        }
    };

    function PageFragment()
    {
    }

    //typeahead
    PageFragment.prototype.setTypeaheadToFirstResult = function (text)
    {
        return helper.typeahead(elements.typeahead.input()).setValue(text, 1);
    };
    PageFragment.prototype.setTypeaheadToThirdResult = function (text)
    {
        return helper.typeahead(elements.typeahead.input()).setValue(text, 3);
    };
    PageFragment.prototype.getTypeahead = function ()
    {
        return helper.typeahead(elements.typeahead.input()).getValue();
    };
    PageFragment.prototype.clearTypeahead = function ()
    {
        return helper.typeahead(elements.typeahead.input()).clearValue();
    };

    //checkboxFuelux
    PageFragment.prototype.checkBox = function ()
    {
        return helper.checkbox(elements.checkboxFuelux.element()).check();
    };
    PageFragment.prototype.isBoxChecked = function ()
    {
        return helper.checkbox(elements.checkboxFuelux.input()).isChecked();
    };

    //checkbox

    PageFragment.prototype.clickLeftButton = function ()
    {
        return helper.button(elements.checkbox.button.left()).clickOn();
    };
    PageFragment.prototype.clickMiddleButton = function ()
    {
        return helper.button(elements.checkbox.button.middle()).clickOn();
    };
    PageFragment.prototype.clickRightButton = function ()
    {
        return helper.button(elements.checkbox.button.right()).clickOn();
    };

    PageFragment.prototype.getLeftText = function ()
    {
        return helper.text(elements.checkbox.text.left()).getValue();
    };
    PageFragment.prototype.getMiddleText = function ()
    {
        return helper.text(elements.checkbox.text.middle()).getValue();
    };
    PageFragment.prototype.getRightText = function ()
    {
        return helper.text(elements.checkbox.text.right()).getValue();
    };


    //file
    PageFragment.prototype.getBowerJsonResolutions = function (property)
    {
        return helper.file('bower.json').getContent(property);
    };

    module.exports = PageFragment;

})();
