(function ()
{
    'use strict';
    var app = angular.module('app', []);

    app.filter('quote', function ()
    {
        return function (text)
        {
            return '"' + text + '"';
        };
    });

    app.filter('withoutH', function ()
    {
        return function (text)
        {
            return text.split('h').join('').split('H').join('');
        };
    });

    app.filter('firstLetterUp', function ()
    {
        return function (text)
        {
            return text.replace(/([^\W_]+[^\s-]*) */g, function (text)
            {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            });
        };
    });


    app.controller('FilterCtrl', function ($scope)
    {
        $scope.data = {
            citation: 'To be, or not to be...',
            title: 'The Hobbit: The Battle of the Five Armies',
            someText: 'Visit News for up-to-the-minute news, breaking news, video, audio and stories.'
        };

    });
})();

