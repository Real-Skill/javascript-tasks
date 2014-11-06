var myApp = angular.module('myApp', []);
myApp.factory('Students', function ()
{
    var Students = {};
    Students.list = [
        {
            "name": {
                "first": "Warner",
                "last": "Bridges"
            },
            "age": 18,
            "email": "warner.bridges@undefined.biz",
            "phone": "+1 (914) 451-3055"
        },
        {
            "name": {
                "first": "Bauer",
                "last": "Spencer"
            },
            "age": 24,
            "email": "bauer.spencer@undefined.us",
            "phone": "+1 (942) 551-2179"
        },
        {
            "name": {
                "first": "Good",
                "last": "Burnett"
            },
            "age": 27,
            "email": "good.burnett@undefined.tv",
            "phone": "+1 (820) 450-3124"
        },
        {
            "name": {
                "first": "Austin",
                "last": "Harvey"
            },
            "age": 35,
            "email": "austin.harvey@undefined.org",
            "phone": "+1 (957) 597-2822"
        },
        {
            "name": {
                "first": "Candace",
                "last": "Gordon"
            },
            "age": 33,
            "email": "candace.gordon@undefined.name",
            "phone": "+1 (932) 408-2012"
        },
        {
            "name": {
                "first": "Chang",
                "last": "Ryan"
            },
            "age": 32,
            "email": "chang.ryan@undefined.ca",
            "phone": "+1 (994) 534-3669"
        },
        {
            "name": {
                "first": "Gutierrez",
                "last": "Freeman"
            },
            "age": 22,
            "email": "gutierrez.freeman@undefined.info",
            "phone": "+1 (944) 430-2322"
        },
        {
            "name": {
                "first": "Knapp",
                "last": "Hardy"
            },
            "age": 30,
            "email": "knapp.hardy@undefined.biz",
            "phone": "+1 (978) 554-2635"
        },
        {
            "name": {
                "first": "Maxine",
                "last": "Stevenson"
            },
            "age": 23,
            "email": "maxine.stevenson@undefined.co.uk",
            "phone": "+1 (845) 419-2949"
        },
        {
            "name": {
                "first": "Gray",
                "last": "Rose"
            },
            "age": 21,
            "email": "gray.rose@undefined.io",
            "phone": "+1 (807) 582-3992"
        }
    ];

    return Students;
});

function StudentCtrl($scope, Students)
{
    $scope.students = Students;
}