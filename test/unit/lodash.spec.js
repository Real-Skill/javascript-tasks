'use strict';

var chai = require('chai');
var expect = chai.expect;
var chance = require('chance');
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash Collection training', function () {
    describe('countBy', function () {
        it('should count repeating numbers', function () {
            expect(_.countBy.apply(_, datasets.countBy())).to.eql({1: 1, 2: 2, 6: 2, 7: 3});
        });
        it('should count length of given strings', function () {
            expect(_.countBy.apply(_, datasets.countBy2())).to.eql({3: 2, 4: 3, 5: 1});
        });
    });

    describe('every', function () {
        it('should return true if all elements pass the predicate "ALIVE" check', function () {
            var params = datasets.every();
            var array = params[0];
            expect(array.length).to.eql(2);
            array.forEach(function (n) {
                expect(_.has(n, 'ALIVE')).to.eql(true);
            });
            expect(_.every.apply(_, datasets.every())).to.eql(true);
        });
        it('should return true if all elements are Booleanly true', function () {
            var params = datasets.every2();
            var array = params[0];
            expect(array.length).to.eql(4);
            expect(_.every.apply(_, datasets.every2())).to.eql(true);
        });
    });

    describe('filter', function () {
        it('should return filtered array with 2 objects with matching predicate of age', function () {
            var params = datasets.filter();
            var array = params[0];
            expect(array.length).to.eql(5);
            expect(_.filter.apply(_, datasets.filter())).to.eql([{name: 'Ali', age: 33, active: false},
                {name: 'Kali', age: 21, active: true}]);
        });
        it('should return filtered array with 3 objects and match for age and active', function () {
            var params = datasets.filter2();
            var array = params[0];
            expect(array.length).to.eql(5);
            expect(_.filter.apply(_, datasets.filter2())).to.eql([{name: 'Bow', age: 23, active: true},
                {name: 'Row', age: 23, active: true},
                {name: 'Sou', age: 23, active: true}]);
        });

    });

    describe('find', function () {
        it('should find Helen', function () {
            var testArray = _.fill(new Array(50), 1).map(function () {
                if (Math.random() < 0.2) {
                    return {name: 'Kodi', age: 12, active: true};
                } else if (Math.random() < 0.4) {
                    return {name: 'Olaf', age: 32, active: false};
                } else if (Math.random() < 0.6) {
                    return {name: 'Helen', age: 65, active: true};
                } else if (Math.random() < 0.8) {
                    return {name: 'Pluto', age: 25, active: false};
                } else {
                    return {name: 'Rudi', age: 43, active: true};
                }
            });
            var params = datasets.find(testArray);
            var array = params[0];
            var method = params[1];
            var result = _.find.apply(_, params);
            expect(array.length).to.eql(50);
            expect(Object.keys(method).length).to.eql(1);
            expect(_.values(result)).to.contain('Helen');
            expect(_.values(result)).to.contain(65);
        });
        it('should return first matched element for name property', function () {
            var params = datasets.find2();
            var array = params[0];
            expect(array.length).to.eql(3);
            array.forEach(function (n) {
                expect(_.has(n, 'NAME')).to.eql(true);
                expect(_.has(n, 'active')).to.eql(true);
            });
            expect(_.find.apply(_, datasets.find2())).to.eql({
                NAME: 'Rudi',
                age: 15,
                active: true,
                gender: 'M'
            });
        });
    });

    describe('groupBy', function () {
        it('should group floating-point numbers with Math function', function () {
            var params = datasets.groupBy();
            var array = params[0];
            expect(array.length).to.eql(7);
            expect(_.groupBy.apply(_, datasets.groupBy())).to.eql({
                3: [3.3],
                4: [4.2, 4.6],
                6: [6.1, 6.3],
                8: [8.3, 8.9]
            });
        });
        it('should group all given things by length', function () {
            var params = datasets.groupBy2();
            var array = params[0];
            expect(array.length).to.eql(6);
            expect(_.groupBy.apply(_, datasets.groupBy2())).to.eql({
                3: ['xyz', 'xyz'],
                5: ['combi'],
                undefined: [2, 4, 5]
            });
        });
    });

    describe('includes', function () {
        it('should include first value in the object', function () {
            var params = datasets.includes();
            var array = params[0];
            var predicate = params[1];
            expect(Object.keys(array).length).to.eql(4);
            expect(_.has(array, 'firstName')).to.eql(true);
            expect(_.has(array, 'lastName')).to.eql(true);
            expect(_.has(array, 'users')).to.eql(true);
            expect(_.has(array, 'running')).to.eql(true);
            expect(_.includes.apply(_, [array, predicate[0]])).to.eql(true);
            expect(_.includes.apply(_, [array, predicate[1]])).to.eql(false);
        });
        it('should include \'stabli\' word in array of random words', function () {
            var params = datasets.includes2();
            var array = params[0];
            var predicate = params[1];
            expect(array.length).to.eql(4);
            expect(array).to.contain('antidisestablishmentarianism');
            expect(array).to.not.contain('stabli');
            array.forEach(function (element, index) {
                if (index !== 3) {
                    expect(_.includes.apply(_, [element, predicate])).to.eql(true);
                } else {
                    return false;
                }
            });
            expect(_.includes.apply(_, [array[3], predicate])).to.eql(false);
        });
    });

    describe('map', function () {
        it('should map one of the property name', function () {
            var testFunction = function () {
                if (Math.random() < 0.2) {
                    return {firstName: 'Ali', lastName: 'BOM', user: false};
                } else if (Math.random() < 0.4) {
                    return {firstName: 'Kowal', lastName: 'Kot', user: true};
                } else if (Math.random() < 0.6) {
                    return {firstName: 'Buro', lastName: 'Fisher', user: true};
                } else if (Math.random() < 0.8) {
                    return {firstName: 'Barney', lastName: 'Sick', user: false};
                } else {
                    return {firstName: 'Draco', lastName: 'Malio', user: true};
                }
            };
            var testArray = _.fill(new Array(50), 1).map(testFunction);
            var testArray2 = _.fill(new Array(50), 1).map(testFunction);
            var params = datasets.map(testArray);
            var params2 = datasets.map(testArray2);
            var array = params[0];
            var result = _.map.apply(_, params);
            var result2 = _.map.apply(_, params2);
            expect(array.length).to.eql(50);
            expect(_.isString(params[1])).to.eql(true);
            expect(_.map.apply(_, datasets.map(testArray))).to.eql(result);
            expect(_.map.apply(_, datasets.map(testArray2))).to.eql(result2);
        });
        it('should square only even numbers', function () {
            var testFunction = function () {
                var randomNumber = Math.floor(Math.random() * 60) + 1;
                if (Math.random() < 0.3) {
                    return randomNumber;
                } else if (Math.random() < 0.6) {
                    return randomNumber;
                } else {
                    return randomNumber;
                }
            };
            var testArray = _.fill(new Array(20), 1).map(testFunction);
            var testArray2 = _.fill(new Array(10), 1).map(testFunction);
            var params = datasets.map2(testArray);
            var array = params[0];
            var result = _.map.apply(_, params);
            expect(array.length).to.eql(20);
            expect(_.map.apply(_, datasets.map2(testArray))).to.eql(result);
            params = datasets.map2(testArray2);
            array = params[0];
            expect(array.length).to.eql(10);
            result = _.map.apply(_, params);
            expect(_.map.apply(_, datasets.map2(testArray2))).to.eql(result);
        });
    });

    describe('partition', function () {
        it('should split persons to two tables using active property', function () {
            var params = datasets.partition();
            var array = params[0];
            expect(array.length).to.eql(4);
            expect(_.partition.apply(_, datasets.partition())).to.eql([[{name: 'Harry', age: 40, active: true},
                {name: 'Francheska', age: 61, active: true}],
                [{name: 'Andrinio', age: 36, active: false},
                    {name: 'Kodi', age: 1, active: false}]
            ]);
        });
        it('should split persons only to truthy table when predicate is true for all', function () {
            var params = datasets.partition2();
            var array = params[0];
            expect(array.length).to.eql(4);
            expect(_.partition.apply(_, datasets.partition2())).to.eql([[{name: 'Andrinio', age: 36, active: false},
                {name: 'Harry', age: 40, active: true},
                {name: 'Kodi', age: 1, active: false},
                {name: 'Francheska', age: 61, active: true}],
                []]);
        });
        it('should split persons only to falsy table when predicate is false for all', function () {
            var params = datasets.partition3();
            var array = params[0];
            expect(array.length).to.eql(4);
            expect(_.partition.apply(_, datasets.partition3())).to.eql([[],
                    [{name: 'Andrinio', age: 36, active: false},
                        {name: 'Harry', age: 40, active: true},
                        {name: 'Kodi', age: 1, active: false},
                        {name: 'Francheska', age: 61, active: true}]]
            );
        });
    });

    describe('reduce', function () {
        it('should count sum of squared numbers', function () {
            var params = datasets.reduce();
            var array = params[0];
            expect(array.length).to.eql(5);
            expect(array).to.include(1);
            expect(array).to.include(5);
            expect(_.reduce.apply(_, datasets.reduce())).to.eql(55);
        });
    });

    describe('sortBy', function () {
        it('should sort by all property names', function () {
            var testFunction = function () {
                if (Math.random() < 0.3) {
                    return {name: 'Jose', age: 12};
                } else if (Math.random() < 0.6) {
                    return {name: 'Rose', age: 54};
                } else if (Math.random() < 0.8) {
                    return {name: 'Domi', age: 5};
                } else {
                    return {name: 'Tommy', age: 15};
                }
            };
            var testArray = _.fill(new Array(35), 1).map(testFunction);
            var testArray2 = _.fill(new Array(35), 1).map(testFunction);
            var params = datasets.sortBy(testArray);
            var params2 = datasets.sortBy(testArray2);
            var predicate = params[1];
            var result = _.sortBy.apply(_, params);
            var result2 = _.sortBy.apply(_, params2);
            expect(predicate.length).to.eql(2);
            expect(_.sortBy.apply(_, datasets.sortBy(testArray))).to.eql(result);
            expect(_.sortBy.apply(_, datasets.sortBy(testArray2))).to.eql(result2);
        });
    });
});
