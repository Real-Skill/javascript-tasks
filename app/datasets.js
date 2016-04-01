'use strict';

module.exports = {
    countBy: function () {
        var array = [1, 6, 2, 7.5, 6.3, 7.8, 2, 7];
        var foo = Math.floor;
        return [array, foo];
    },
    countBy2: function () {
        var array = ['ala', 'CKM', 'cyka', 'bliat', 'tomi', 'ziom'];
        var foo = 'length';
        return [array, foo];
    },
    every: function () {
        var users = [
            {usr: 21, ALIVE: true},
            {usr: 'pico', ALIVE: true},
            {usr: 'asd', ALIVE: true}
        ];
        return [users, 'ALIVE'];
    },
    every2: function () {
        var users = [Function, 1, true, 'asd'];

        return [users, Boolean];
    },
    filter: function () {
        //filter: function ()
        //{
        //    return [[{}, {}, {}, {name: 'Ali', age: 33, active: false}, {name: 'Kali', age: 21, active: true}], 'age'];
        //}
        var users = [
            {name: 'Ali', age: 33, active: false},
            {name: 'zz', age: 56, active: false},
            {name: 'Kali', age: 21, active: true},
            {name: 'wqe', age: 88, active: true},
            {name: 'aszdew', age: 55, active: true}
        ];
        var predi = function (o) {
            if (o.age < 40) {
                return o.age;
            }
        };
        return [users, predi];
    },
    filter2: function () {
        var users = [
            {name: 'Bow', age: 23, active: true},
            {name: 'Sztou', age: 32, active: false},
            {name: 'Row', age: 23, active: true},
            {name: 'Glow', age: 11, active: false},
            {name: 'Sou', age: 23, active: true}
        ];

        var predi = {age: 23, active: true};

        return [users, predi];
    },
    find: function (arr) {

        var predi = {age: 65};

        return [arr, predi];
    },
    find2: function () {
        var users = [
            {NAME: 'Rudi', age: 15, active: true, gender: 'M'},
            {NAME: 'Kodi', age: 25, active: true},
            {NAME: 'Joe', age: 23, active: false}
        ];
        var predi = 'NAME';
        return [users, predi];
    },
    groupBy: function () {
        var users = [6.1, 4.2, 6.3, 4.6, 3.3, 8.3, 8.9];

        return [users, Math.floor];
    },
    groupBy2: function () {
        var users = ['xyz', 2, 'combi', 4, 5, 'xyz'];

        return [users, 'length'];
    },
    includes: function () {
        var users = {'firstName': 'Ali', 'lastName': 'BOM BOM', 'users': 999999, 'running': true};

        return [users, ['Ali', 'zs']];
    },
    includes2: function () {
        var users = ['antidisestablishmentarianism', 'stablisorism', 'ekostablistorm', 'konfucjusz'];

        return [users, 'stabli'];
    },
    map: function (arr) {

        return [arr, 'user'];
    },
    map2: function (arr) {

        function square(n) {
            if (n % 2 === 0) {
                return n * n;
            } else {
                return n;
            }
        }

        return [arr, square];
    },
    partition: function () {
        var users = [
            {name: 'Andrinio', age: 36, active: false},
            {name: 'Harry', age: 40, active: true},
            {name: 'Kodi', age: 1, active: false},
            {name: 'Francheska', age: 61, active: true}
        ];
        var foo = function (o) {
            return o.active;
        };

        return [users, foo];
    },
    partition2: function () {
        var users = [
            {name: 'Andrinio', age: 36, active: false},
            {name: 'Harry', age: 40, active: true},
            {name: 'Kodi', age: 1, active: false},
            {name: 'Francheska', age: 61, active: true}
        ];

        return [users, 'age'];
    },
    partition3: function () {
        var users = [
            {name: 'Andrinio', age: 36, active: false},
            {name: 'Harry', age: 40, active: true},
            {name: 'Kodi', age: 1, active: false},
            {name: 'Francheska', age: 61, active: true}
        ];

        return [users, ''];
    },
    reduce: function () {
        var users = [1, 2, 3, 4, 5];

        var x = function (sum, n) {
            return sum + n * n;
        };

        return [users, x, 0];
    },
    sortBy: function (arr) {
        var params = ['name', 'age'];
        return [arr, params];
    }
};