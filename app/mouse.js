/* jshint -W015 */

'use strict';
var app = angular.module('app', []);

app.directive('enter', function ()
{
    return function (scope, element)
    {
        element.bind('mouseenter', function ()
        {
            element.addClass('bg-danger');
            scope.entered = true;
        });
    };
});

app.directive('leave', function ()
{
    return {
        scope: {}, link: function (scope, element, attrs)
        {
            element.bind('mouseleave', function ()
            {
                element.removeClass(attrs.enter);
                scope.left = true;
            });
        }
    };

});
