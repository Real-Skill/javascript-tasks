'use strict';

module.exports = {
    countBy: function () {
        return [[1, 2, 2, 6, 6, 7.1, 7.6, 7.2], Math.floor];
    },
    countBy2: function () {

        return [['333', '333', '4444', '4444', '4444', '55555'], 'length'];
    },
    every: function () {

        return [[{ALIVE: true, and: 'bad'}, {ALIVE: true, and: 'well'}, {ALIVE: true, and: 'kicking'}], 'ALIVE'];
    },
    every2: function () {

        return [[function () {
        }, 'aa', {}, true], Boolean];
    },
    filter: function () {
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
            } else return false;
        };

        return [users, predi];
    },
    filter2: function () {
        return [ [
            {name: 'Bow', amount: 23, available: true, type: 'RANGE'},
            {name: 'Axe', amount: 32, available: false, type: 'MELEE'},
            {name: 'Sword', amount: 23, available: true, type: 'MELEE'},
            {name: 'Lance', amount: 11, available: false, type: 'MELEE/RANGE'},
            {name: 'GUN', amount: 23, available: true, type: 'RANGE'}
        ],
            {
                available: true,
                amount: 23
            }];
    },
    find: function (arr) {

        return [arr, {age: 65}];
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
        return [[4, 9, 16, 25, 81, 121, 2], Math.sqrt];
    },
    groupBy2: function () {

        return [['xyz', 'xyz', 'combi', 2, 4, 5], 'length'];
    },
    includes: function () {

        var users = {'firstName': 'Ali', 'lastName': 'BOM BOM', 'users': 999999, 'running': true};

        return [users, ['Ali', 'zs']];
    },
    includes2: function () {

        return [['antidisestablishmentarianism', 'aaaasaa', 'amestabliaraaba', 'stablishmentarianism'], 'stabli'];
    },
    includes3: function (arr) {

        return [arr, 'wood', 3];
    },
    map: function (arr) {

        return [arr, 'firstName'];
    },
    map2: function () {
        var arr = [1, 2, 3, 4, 5, 6];

        function square(n) {
            if (typeof n !== 'number') {
                return false;
            }
            if (n % 2 === 0) {
                return n * n;
            } else {
                return n + 1;
            }
        }

        return [arr, square];

    },
    partition: function (arr) {

        var foo = function (o) {
            return o.active;
        };

        return [arr, foo];
    },
    partition2: function (arr) {

        return [arr, 'age'];
    },
    partition3: function (arr) {

        var obj = {
            "Diana":{age: 39},
            "Kult":{age: 43},
            "Rococo":{age: 11},
            "Mul":{age: 45},
            "Zacuklo":{ age:-8}
        };
        var foo = function (o) {
            if (o.age < 40) {
                return o.age += 10;
            }
        };
        return [obj, foo];
    },
    reduce: function () {

        var users = [1, 2, 3, 4, 5];

        var x = function (sum, n) {
            return sum + n * n;
        };

        return [users, x,0];
    },
    sortBy: function () {

        return [];
    }
};