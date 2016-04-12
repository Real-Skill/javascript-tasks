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

        return [];
    },
    find2: function () {
        return [[{NAME: '', active: true, age: 11}, {NAME: '', active: true, age: 5}, {
            NAME: 'Rudi', age: 15, active: true, gender: 'M'
        }], 'gender'];
    },
    groupBy: function () {
        return [[4, 9, 16, 25, 81, 121, 2], Math.sqrt];
    },
    groupBy2: function () {

        return [];
    },
    includes: function () {

        //return [{firstName: '', lastName: '', users: 0, running: false}, [0, null]];
    },
    includes2: function () {

        return [];
    },
    includes3: function (arr) {

        return [, []];
    },
    map: function (arr) {

        return [];
    },
    map2: function () {

        return [];
    },
    partition: function (arr) {

        return [];
    },
    partition2: function (arr) {

        return [];
    },
    partition3: function (arr) {

        return [];
    },
    reduce: function () {

        return [];
    },
    sortBy: function () {

        return [];
    }
};