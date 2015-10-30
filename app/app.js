(function ()
{
    'use strict';

    var app = angular.module('app', ['ui.bootstrap']);

    app.controller('ButtonCtrl', function ($scope)
    {

        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };

        $scope.setMe = 'Nothing happen.';
        $scope.clickOn = function ()
        {
            $scope.setMe = 'You click me!';
        };
    });

    var substringMatcher = function (strs)
    {
        return function findMatches(q, cb)
        {
            var matches, substrRegex;

            matches = [];

            substrRegex = new RegExp(q, 'i');

            $.each(strs, function (i, str)
            {
                if (substrRegex.test(str)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({value: str});
                }
            });

            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
                  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
                  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
                  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
                  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
                  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    $('#the-basics .typeahead').typeahead({
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'states',
                displayKey: 'value',
                source: substringMatcher(states)
            });

    $('#checkboxFuelux').checkbox();
    $('.checkbox input').on('change', function ()
    {
    });
})();
