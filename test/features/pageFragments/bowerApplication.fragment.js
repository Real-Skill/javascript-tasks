(function ()
{
    'use strict';

    function TextField(e)
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

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        }
    };

    var elements = {
        header: element.bind(null, by.id('header'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getHeaderValue = function ()
    {
        return helper.text(elements.header()).getValue();
    };

    module.exports = PageFragment;
})();
