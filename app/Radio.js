var myRadio = angular.module('myRadio', []);

myRadio.controller('RadioCtrl', function ($scope)
{
    var radioCtrl = this;
    radioCtrl.information = "I'm from controller";
});

myRadio.directive('radioBlock', function ()
{
    return {
        restrict: 'E',
        template: ' <div>' +
                '<div class="radio"> ' +
                '<label> <input type="radio" name="fruitsRadios" id="apple" value="apple" checked> apple </label> </div>' +
                '<div class="radio"> ' +
                '<label> <input type="radio" name="fruitsRadios" id="banana" value="banana"> banana </label> </div>' +
                '</div>'
    }
});

myRadio.directive('radioInline', function ()
{
    return {
        restrict: 'E',
        template: '<div> ' +
                '<label class="radio-inline"> ' +
                '<input type="radio" name="vegetablesRadio" id="tomato" value="tomato"> tomato ' +
                '</label> ' +
                '<label class="radio-inline">' +
                '<input type="radio" name="vegetablesRadio" id="cucumber" value="cucumber" checked> cucumber</label> ' +
                '</div>'
    }
});

myRadio.directive("onlyToPracticeDirective", function ()
{
    return function (scope, show, attribute)
    {
        show.text(scope.radioCtrl.information);
        show.text(attribute.message);
    }
});
