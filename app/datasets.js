'use strict';

module.exports = {
    countBy: function () {

        return [];
    },
    countBy2: function () {

        return [];
    },
    every: function () {

        return [];
    },
    every2: function () {

        return [[],];
    },
    filter: function () {

        return [];
    },
    filter2: function () {

        return [];
    },
    filter3: function (arr) {

        return [arr, ['throwable', true]];
    },
    filter4: function (arr) {

        return [arr, 'explosionPower'];
    },
    find: function (arr) {

        return [];
    },
    find2: function () {

        return [];
    },
    find3: function (arr) {
        var fu = function (o) {
            return o.code.length > 22;
        };

        return [arr, fu];
    },
    find4: function (arr) {
        return [arr, ['nickName', 'Eragon']];
    },
    groupBy: function () {

        return [];
    },
    groupBy2: function () {

        return [];
    },
    includes: function () {

        return [, []];
    },
    includes2: function () {

        return [];
    },
    includes3: function (arr) {
        return [];

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
    partition3: function () {

        return [];
    },
    reduce: function () {
        var users = [1, 2, 3, 4, 5];

        var x = function (sum, n) {
            return sum + n * n;
        };

        return [users, x, 0];
    },
    reduce2: function (ob) {
        var fu = function (a,b) {
            return a+=b;
        };

        return [ob, fu];
    },
    sortBy: function () {

        return [];
    },
    sortBy2: function (arr) {

        return [arr, ['pass','tickets','login']];
    },
    sortBy3: function (arr) {

        return [arr, {pass: 1234, tickets: 10}];
    },
    sortBy4: function (arr) {
        var fu = function (o) {
            return o.pass + o.tickets;
        };

        return [arr, fu];
    }
};