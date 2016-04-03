'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var chance = require('chance');
var _ = require('lodash');
var datasets = require('../../app/datasets');
var sinon = require('sinon');

describe('Lodash Collection training', function () {

    describe('countBy', function () {
        describe('countBy1 function', function () {
            var params = datasets.countBy();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
            });
            it('should contain array of numbers and floating numbers', function () {
                var arr = params[0];
                var countInt = 0;
                var countFloat = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') {
                        expect(typeof arr[i]).to.eql('number');
                    }
                    if (arr[i] === parseInt(arr[i])) {
                        countInt++;
                    } else if (arr[i] === parseFloat(arr[i])) {
                        countFloat++;
                    }
                }

                expect(arr.length).to.eql(8);
                expect(countInt).to.eql(5);
                expect(countFloat).to.eql(3);
            });
            it('should count repeating numbers', function () {
                expect(_.countBy.apply(_, datasets.countBy())).to.eql({1: 1, 2: 2, 6: 2, 7: 3});
            });
        });

        describe('countBy2 function', function () {
            var params = datasets.countBy2();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params.length).to.eql(2);
            });
            it('should contain array of string with different strings length', function () {
                var arr = params[0];
                var string0 = 0;
                var string1 = 0;
                var string2 = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'string') {
                        expect(typeof arr[i]).to.eql('string');
                    }
                    if (arr[i].length === 3) {
                        string0++;
                    } else if (arr[i].length === 4) {
                        string1++;
                    } else if (arr[i].length === 5) {
                        string2++;
                    }
                }

                expect(arr.length).to.eql(6);
                expect(string0).to.eql(2);
                expect(string1).to.eql(3);
                expect(string2).to.eql(1);
            });
            it('should count length of given strings', function () {
                expect(_.countBy.apply(_, datasets.countBy2())).to.eql({3: 2, 4: 3, 5: 1});
            });
        });
    });

    describe('every', function () {
        describe('every function', function () {
            var params = datasets.every();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params.length).to.eql(2);
            });
            it('should contain array of objects', function () {
                var array = params[0];
                for (var i = 0; i < array.length; i++) {
                    expect(Object.keys(array[i]).length).to.eql(2);
                }

                expect(array.length).to.eql(3);
                array.forEach(function (n) {
                    expect(_.has(n, 'ALIVE')).to.eql(true);
                });
            });
            it('should return true if all elements pass the predicate "ALIVE" check', function () {
                expect(_.every.apply(_, datasets.every())).to.eql(true);
            });
        });
        describe('every2 function', function () {
            var params = datasets.every2();
            var array = params[0];
            var arrLenght = array.length;

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
            });
            it('should contain array of different type elements which are Booleanly true', function () {
                var types = _.map(array, function (i) {
                    array = typeof i;

                    return array;
                });
                var result = _.uniq(types);

                expect(result.length).to.eql(arrLenght);
            });

            it('should return true if all elements are Booleanly true', function () {
                expect(arrLenght).to.eql(4);
                expect(_.every.apply(_, datasets.every2())).to.eql(true);
            });
        });
    });

    describe('filter', function () {
        describe('filter function', function () {
            var params = datasets.filter();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
            });
            it('should contain array of 5 object with length of 3, each', function () {
                var array = params[0];

                expect(array.length).to.eql(5);
                array.forEach(function (obj) {
                    if (Object.keys(obj).length < 3 || Object.keys(obj).length > 3) {
                        expect(Object.keys(obj).length).to.eql(3);
                    }
                });
            });
            it('should invoke passed function as predicate matching age lower than 40', function () {
                var spy = sinon.spy(params[1]);
                var users = [
                    {number: 'One', age: 10, gender: 'M', pseudo: 'zxc'},
                    {number: 'Two', age: 90, gender: 'M', pseudo: 'oidfs'},
                    {number: 'Three', age: 22, gender: 'F', pseudo: 'gfuj'},
                    {number: 'Four', age: 56, gender: 'M', pseudo: 'sadzx'},
                    {number: 'Five', age: 35, gender: 'F', pseudo: 'asdqw'},
                    {number: 'Six', age: 73, gender: 'F', pseudo: 'yyy'}
                ];
                var filter = _.filter.apply(_, [users, spy]);

                expect(spy).to.have.been.callCount(6);
                expect(filter).to.eql([
                    {number: 'One', age: 10, gender: 'M', pseudo: 'zxc'},
                    {number: 'Three', age: 22, gender: 'F', pseudo: 'gfuj'},
                    {number: 'Five', age: 35, gender: 'F', pseudo: 'asdqw'}
                ]);
            });
            it('should return filtered array with 2 objects with match for age lower than 40', function () {
                expect(_.filter.apply(_, datasets.filter())).to.eql([
                    {name: 'Ali', age: 33, active: false},
                    {name: 'Kali', age: 21, active: true}
                ]);
            });
        });

        describe('filter2 function', function () {
            var params = datasets.filter2();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Object;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
                expect(Object.keys(params[1]).length).to.eql(2);
            });
            it('should contain array of 5 object with length of 4, each', function () {
                var array = params[0];

                expect(array.length).to.eql(5);
                array.forEach(function (obj) {
                    if (Object.keys(obj).length < 4 || Object.keys(obj).length > 4) {
                        expect(Object.keys(obj).length).to.eql(4);
                    }
                });
            });
            it('should return filtered array with 3 objects with match for amount and availability', function () {
                expect(_.filter.apply(_, datasets.filter2())).to.eql([
                    {name: 'Bow', amount: 23, available: true, type: 'RANGE'},
                    {name: 'Sword', amount: 23, available: true, type: 'MELEE'},
                    {name: 'GUN', amount: 23, available: true, type: 'RANGE'}
                ]);
            });
        });
    });

    describe('find', function () {
        describe('find function', function () {
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
                var predicate = params[1];
                var result = _.find.apply(_, params);

                expect(array.length).to.eql(50);
                expect(Object.keys(predicate).length).to.eql(1);
                expect(typeof predicate.age).to.eql('number');
                expect(_.values(result)).to.contain('Helen');
                expect(_.values(result)).to.contain(65);
            });
        });
        describe('find2 function', function () {
            var params = datasets.find2();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params.length).to.eql(2);
            });
            it('should contain array of objects', function () {
                var array = params[0];

                expect(array.length).to.eql(3);
                array.forEach(function (n) {
                    expect(_.has(n, 'NAME')).to.eql(true);
                    expect(_.has(n, 'active')).to.eql(true);
                    expect(_.has(n, 'age')).to.eql(true);

                    if (typeof n.NAME !== 'string') {
                        expect(typeof n.NAME).to.eql('string');
                    } else if (typeof n.age !== 'number') {
                        expect(typeof n.age).to.eql('number');
                    } else if (typeof n.active !== 'boolean') {
                        expect(typeof n.active).to.eql('boolean');
                    }
                });
            });
            it('should return first match for name predicate', function () {
                expect(_.find.apply(_, datasets.find2())).to.eql({
                    NAME: 'Rudi',
                    age: 15,
                    active: true,
                    gender: 'M'
                });
            });
        });
    });

    describe('groupBy', function () {
        describe('groupBy function', function () {
            var params = datasets.groupBy();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
            });
            it('should contain array of numbers', function () {
                var array = params[0];

                expect(array.length).to.eql(7);
                array.forEach(function (i) {
                    expect(typeof i).to.eql('number');
                });
            });
            it('should return an object with grouped square root elements', function () {
                expect(_.groupBy.apply(_, datasets.groupBy())).to.eql({
                    '2': [4],
                    '3': [9],
                    '4': [16],
                    '5': [25],
                    '9': [81],
                    '11': [121],
                    '1.4142135623730951': [2]
                });
            });
        });
        describe('groupBy2 function', function () {
            var params = datasets.groupBy2();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params.length).to.eql(2);
            });
            it('should contain array of strings and numbers', function () {
                var array = params[0];
                var countString = 0;
                var countInt = 0;

                array.forEach(function (i) {
                    if (typeof i === 'string') {
                        countString++;
                    } else if (typeof i === 'number') {
                        countInt++;
                    }
                });
                expect(array.length).to.eql(6);
                expect(countInt).to.eql(3);
                expect(countString).to.eql(3);
            });
            it('should group element of array by length', function () {
                expect(_.groupBy.apply(_, datasets.groupBy2())).to.eql({
                    3: ['xyz', 'xyz'],
                    5: ['combi'],
                    undefined: [2, 4, 5]
                });
            });
        });
    });

    describe('includes', function () {
        describe('incloudes function', function () {
            var params = datasets.includes();
            var obj = params[0];
            var predicate = params[1];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Object;
                var element2 = params[1] instanceof Array;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
                expect(params[1].length).to.eql(2);
            });
            it('should contain an object with provided properties', function () {
                expect(Object.keys(obj).length).to.eql(4);
                expect(_.has(obj, 'firstName')).to.eql(true);
                expect(_.has(obj, 'lastName')).to.eql(true);
                expect(_.has(obj, 'users')).to.eql(true);
                expect(_.has(obj, 'running')).to.eql(true);
                expect(typeof obj.firstName).to.eql('string');
                expect(typeof obj.lastName).to.eql('string');
                expect(typeof obj.users).to.eql('number');
                expect(typeof obj.running).to.eql('boolean');
            });
            it('should include first value in the object', function () {
                expect(_.includes.apply(_, [obj, predicate[0]])).to.eql(true);
                expect(_.includes.apply(_, [obj, predicate[1]])).to.eql(false);
            });
        });
        describe('includes2 function', function () {
            var params = datasets.includes2();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params.length).to.eql(2);
            });
            it('should include \'stabli\' word in array of words', function () {
                var array = params[0];
                var predicate = params[1];

                expect(predicate).to.have.length(6);
                expect(array.length).to.eql(4);
                expect(array).to.contain('antidisestablishmentarianism');
                expect(array).to.not.contain('stabli');
                array.forEach(function (element, index) {
                    if (index !== 1) {
                        expect(_.includes.apply(_, [element, predicate])).to.eql(true);
                    }
                    if (index == 1) {
                        expect(element).to.have.length.above(5);
                        expect(element).to.have.length.below(9);
                        expect(_.includes.apply(_, [element, predicate])).to.eql(false);
                    } else if (index == 2) {
                        expect(element).to.have.length.above(10);
                        expect(element).to.have.length.below(16);
                    } else if (index == 3) {
                        expect(element).to.have.length.above(6);
                    }
                });
            });
        });
        describe('includes3 function', function () {
            var array = [1, true, 3, 'wood', 4, 2, false, true, 'wodo'];
            var params = datasets.includes3(array);
            var predicate1 = params[1][0];
            var predicate2 = params[1][1];
            var predicate3 = params[1][2];

            it('should match types of passing elements', function () {
                var element = params[1] instanceof Array;

                expect(element).to.eql(true);
                expect(params[1]).to.have.length(3);
                expect(params[1][0]).to.have.length(2);
            });
            it('should include relevant values as predicates(fromIndex)', function () {
                var checkValues = _.concat([], predicate1, predicate2, predicate3);
                expect(checkValues).to.include.members([5, 3, 1]);
            });
            it('should return true when predicates with fromIndex find the value', function () {
                expect(_.includes.apply(_, [array, predicate1[0], predicate1[1]])).to.eql(true);
                expect(_.includes.apply(_, [array, predicate2[0], predicate2[1]])).to.eql(true);
                expect(_.includes.apply(_, [array, predicate3[0], predicate3[1]])).to.eql(true);
            });
        });
    });

    describe('map', function () {
        describe('map function', function () {
            var params = datasets.map();

            it('should match types of passing elements', function () {
                var element = typeof params[1];

                expect(element).to.eql('string');
                expect(params[1]).to.have.length.above(0);
                expect(params.length).to.eql(2);
            });
            it('should map by one of the property name', function () {
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
                var testArray = _.fill(new Array(10), 1).map(testFunction);
                var params = datasets.map(testArray);
                var array = params[0];
                var result = _.map.apply(_, params);
                expect(result).to.not.include(undefined);
                expect(array.length).to.eql(10);
                expect(_.map.apply(_, datasets.map(testArray))).to.eql(result);
            });
        });
        describe('map2 function', function () {
            var params = datasets.map2();
            var spy = sinon.spy(params[1]);

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params.length).to.eql(2);
            });
            it('should return false if array contains not only number', function () {
                spy('as');
                expect(spy).to.have.returned(false);
                expect(spy).to.have.been.callCount(1);
            });
            it('should pass mock test', function () {
                var array = params[0];
                var testArray = [10, 12, 35, 40, 11, 16];
                var result = _.map.apply(_, [testArray, spy]);
                expect(array).to.have.length(6);
                expect(array).to.not.include.members([10, 12, 35, 40, 11, 16]);
                expect(spy).to.have.been.callCount(7);
                expect(result).to.eql([100, 144, 35, 1600, 11, 256]);
            });
            it('should square only even numbers in array', function () {
                expect(_.map.apply(_, datasets.map2())).to.eql([1, 4, 3, 16, 5, 36]);
            });
        });
    });

    describe('partition', function () {
        var users = [
            {name: 'Andrinio', age: 36, active: false},
            {name: 'Harry', age: 40, active: true},
            {name: 'Kodi', age: 1, active: false},
            {name: 'Francheska', age: 61, active: true}
        ];

        describe('partition function', function () {
            var params = datasets.partition(users);
            var spy = sinon.spy(params[1]);

            it('should match types of passing elements', function () {
                var element = params[1] instanceof Function;

                expect(element).to.eql(true);
                expect(params.length).to.eql(2);
            });
            it('should pass mock test', function () {
                var testObj = [
                    {qq: '123', ee: 10, active: false},
                    {qq: '456', ee: 40, active: true}
                ];
                var checkFunc = _.partition.apply(_, [testObj, spy]);

                expect(spy).to.have.been.callCount(2);
                expect(checkFunc).to.eql([
                    [{qq: '456', ee: 40, active: true}],
                    [{qq: '123', ee: 10, active: false}]
                ]);
            });
            it('should split persons to two tables using active property', function () {
                expect(_.partition.apply(_, datasets.partition(users))).to.eql([
                    [{name: 'Harry', age: 40, active: true}, {name: 'Francheska', age: 61, active: true}],
                    [{name: 'Andrinio', age: 36, active: false}, {name: 'Kodi', age: 1, active: false}]
                ]);
            });
        });
        describe('partition2 function', function () {
            var params = datasets.partition2(users);

            it('should match types of passing elements', function () {
                var element = typeof params[1];
                expect(element).to.eql('string');
                expect(element).to.have.length.above(1);
                expect(params.length).to.eql(2);
            });
            it('should split persons only to truthy table when predicate is true for all', function () {
                expect(_.partition.apply(_, datasets.partition2(users))).to.eql([[
                    {name: 'Andrinio', age: 36, active: false},
                    {name: 'Harry', age: 40, active: true},
                    {name: 'Kodi', age: 1, active: false},
                    {name: 'Francheska', age: 61, active: true}],
                    []]);
            });
        });
        describe('partition3 function', function () {
            var params = datasets.partition3(users);
            it('should match types of passing elements', function () {
                expect(typeof params[1]).to.be.oneOf(['number', 'string', 'object', 'boolean']);
            });
            it('should split persons only to falsy table when predicate is false for all', function () {
                expect(_.partition.apply(_, datasets.partition3(users))).to.eql([[],
                    [
                        {name: 'Andrinio', age: 36, active: false},
                        {name: 'Harry', age: 40, active: true},
                        {name: 'Kodi', age: 1, active: false},
                        {name: 'Francheska', age: 61, active: true}
                    ]
                ]);
            });
        });
    });

    describe('reduce', function () {
        var params = datasets.reduce();
        var array = params[0];
        var spy = sinon.spy(params[1]);

        it('should match types of passing elements', function () {
            var element1 = params[0] instanceof Array;
            var element2 = params[1] instanceof Function;
            var element3 = typeof params[2];

            expect(element1).to.eql(true);
            expect(element2).to.eql(true);
            expect(element3).to.eql('number')
            expect(params.length).to.eql(3);
        });
        it('should pass mock test', function () {
            var testArray = [10, 11, 12, 15];
            var accumulator = 0;
            var checkFunc = _.reduce.apply(_, [testArray, spy, accumulator]);
            expect(spy).to.have.been.callCount(4);
            expect(checkFunc).to.eql(590);
        });
        it('should count sum of squared numbers', function () {
            array.forEach(function (e) {
                expect(typeof e).to.eql('number');
            });
            expect(array.length).to.eql(5);
            expect(array).to.include(1);
            expect(array).to.include(5);
            expect(_.reduce.apply(_, datasets.reduce())).to.eql(55);
        });
    });

    describe('sortBy', function () {
        var params = datasets.sortBy();
        var array = params[0];

        it('should match types of passing elements', function () {
            var element1 = params[0] instanceof Array;
            var element2 = typeof params[1];

            expect(element1).to.eql(true);
            expect(element2).to.eql('string');
            expect(params.length).to.eql(2);
        });
        it('should contain array of random strings with different lenghts', function () {
            var checkLetters = array[0].substr(0, 3);
            var checkLetters2 = array[2].substr(2, 5);
            var checkLetters3 = array[3].substr(6, 10);
            var checkLetters4 = array[4].substr(3, 6);

            expect(array).to.have.length(6);
            array.forEach(function (item, index) {
                expect(typeof item).to.eql('string');
                if (index == 0) {
                    expect(item).to.have.length(4);
                    expect(item).to.not.contain(checkLetters2);
                    expect(item).to.not.contain(checkLetters3);
                    expect(item).to.not.contain(checkLetters4);
                } else if (index == 1) {
                    expect(item).to.have.length(2);
                } else if (index == 2) {
                    expect(item).to.have.length(6);
                    expect(item).to.not.contain(checkLetters);
                    expect(item).to.not.contain(checkLetters3);
                    expect(item).to.not.contain(checkLetters4);
                } else if (index == 3) {
                    expect(item).to.have.length(10);
                    expect(item).to.not.contain(checkLetters);
                    expect(item).to.not.contain(checkLetters2);
                    expect(item).to.not.contain(checkLetters4);
                } else if (index == 4) {
                    expect(item).to.have.length(8);
                    expect(item).to.not.contain(checkLetters);
                    expect(item).to.not.contain(checkLetters2);
                    expect(item).to.not.contain(checkLetters3);
                } else if (index == 5) {
                    expect(item).to.have.length(3);
                }
            })
        });
        it('should return sorted array by length of each string', function () {
            var item1 = array[0];
            var item2 = array[1];
            var item3 = array[2];
            var item4 = array[3];
            var item5 = array[4];
            var item6 = array[5];

            expect(_.sortBy.apply(_, datasets.sortBy())).to.eql([item2, item6, item1, item3, item5, item4]);
        });
    });
});
