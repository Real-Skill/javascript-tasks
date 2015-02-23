var myApp = angular.module("myApp", []);

myApp.directive("clickOn", function ()
{
    return function (scope, element, attrs)
    {
        element.addClass(attrs.clickOn);

    }
});

myApp.directive("enter", function ()
{
    return function (scope, element, attrs)
    {
        element.addClass("bg-danger");
    }
});
