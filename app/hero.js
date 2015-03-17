'use strict';

var app = angular.module('app', []);

app.directive('hero', function ()
{
    return {
        restrict: 'E',
        template: '<img src="assets/hero.png" class="hero-position" width="300px">'
    };
});

app.directive('mask', function ()
{
    return {
        restrict: 'E',
        template: '<img src="assets/mask.png" class="mask-position" width="62px">'
    };
});

app.directive('superhero', function ()
{
    return {
        restrict: 'E',
        template: '<div class="relative-position"><hero></hero><mask></mask></div>'
    };
});
