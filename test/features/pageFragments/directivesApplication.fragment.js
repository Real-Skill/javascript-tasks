//(function ()
//{
//    'use strict';
//
//    function CircleElement(e)
//    {
//        if (null == e) {
//            throw new Error('element must not be null');
//        }
//        this.element = e;
//    }
//
//    function SquareElement(e)
//    {
//        if (null == e) {
//            throw new Error('element must not be null');
//        }
//        this.element = e;
//    }
//
//
//    CircleElement.prototype.getEnterAttribute = function ()
//    {
//        return this.element.getAttribute('enter');
//    };
//    CircleElement.prototype.getLeaveAttribute = function ()
//    {
//        return this.element.getAttribute('leave');
//    };
//    SquareElement.prototype.getClickOnAttribute = function ()
//    {
//        return this.element.getAttribute('click-on');
//    };
//    SquareElement.prototype.getDbClickOnAttribute = function ()
//    {
//        return this.element.getAttribute('db-click-on');
//    };
//
//    var helper = {
//        circle: function (e)
//        {
//            return new CircleElement(e);
//        },
//        square: function (e)
//        {
//            return new SquareElement(e);
//        }
//    };
//
//    var elements = {
//        circle: element.bind(null, by.css('.circle')),
//        square: element.bind(null, by.css('.square'))
//    };
//
//    function PageFragment()
//    {
//    }
//
//    PageFragment.prototype.getCircleWithEnterDirective = function ()
//    {
//        return helper.circle(elements.circle()).getEnterAttribute();
//    };
//    PageFragment.prototype.getCircleWithLeaveDirective = function ()
//    {
//        return helper.circle(elements.circle()).getLeaveAttribute();
//    };
//    PageFragment.prototype.getSquareWithClickOnDirective = function ()
//    {
//        return helper.square(elements.square()).getClickOnAttribute();
//    };
//    PageFragment.prototype.getSquareWithDbClickOnDirective = function ()
//    {
//        return helper.square(elements.square()).getDbClickOnAttribute();
//    };
//
//    module.exports = PageFragment;
//})();
