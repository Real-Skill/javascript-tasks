'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var chance = require('chance').Chance();
var _ = require('lodash');
var datasets = require('../../app/datasets');
var generator = require('./Generator');
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
                expect(params).to.have.length(2);
            });
            it('should contain array of numbers and floating numbers', function () {
                var arr = params[0];
                var countInt = 0;
                var countFloat = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') {
                        expect(typeof arr[i]).to.eql('number');
                    }
                    if (arr[i] === parseInt(arr[i], 10)) {
                        countInt++;
                    } else if (arr[i] === parseFloat(arr[i])) {
                        countFloat++;
                        if (arr[i] === arr[i + 1]) {
                            countFloat--;
                        }
                    }
                }

                expect(arr.length).to.eql(8);
                expect(countInt).to.eql(5);
                expect(countFloat).to.eql(3);
            });
            it('should pass function test', function () {
                var providedFunc = params[1];
                var result = Math.floor;
                var randomValue = chance.floating({min: 0, max: 100});

                expect(providedFunc(2.3)).to.eql(result(2.3));
                expect(providedFunc(7.1)).to.eql(result(7.1));
                expect(providedFunc(7.6)).to.eql(result(7.6));
                expect(providedFunc(5.9)).to.eql(result(5.9));
                expect(providedFunc(randomValue)).to.eql(result(randomValue));
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
                expect(params).to.have.length(2);
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
                expect(params).to.have.length(2);
            });
            it('should contain array of objects where each object is length of 2', function () {
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
                expect(_.every.apply(_, params)).to.eql(true);
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
                expect(params).to.have.length(2);
                expect(params[1]).to.have.length(1);
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
                expect(params).to.have.length(2);
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
            it('should invoke passed function and return objects with age lower than 40 otherwise return false', function () {
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
                var providedFunc = params[1];

                users.forEach(function (item, index) {
                    if (index === 0) {
                        expect(providedFunc(item)).to.eql(10);
                    } else if (index === 1) {
                        expect(providedFunc(item)).to.eql(false);
                    } else if (index === 2) {
                        expect(providedFunc(item)).to.eql(22);
                    } else if (index === 3) {
                        expect(providedFunc(item)).to.eql(false);
                    } else if (index === 4) {
                        expect(providedFunc(item)).to.eql(35);
                    } else if (index === 5) {
                        expect(providedFunc(item)).to.eql(false);
                    }
                });
                expect(providedFunc(users)).to.eql(false);
                expect(providedFunc.apply(providedFunc, users)).to.eql(10);
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
                expect(params).to.have.length(2);
                expect(Object.keys(params[1]).length).to.eql(2);
            });
            it('should contain array of 5 object with length of 4, each', function () {
                var array = params[0];

                expect(array.length).to.eql(5);
                array.forEach(function (obj) {
                    if (Object.keys(obj).length < 4 || Object.keys(obj).length > 4) {
                        expect(Object.keys(obj).length).to.eql(4);
                    }
                    expect(typeof obj.name).to.eql('string');
                    expect(typeof obj.amount).to.eql('number');
                    expect(typeof obj.available).to.eql('boolean');
                    expect(typeof obj.type).to.eql('string');

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
        describe('filter3 function', function () {
            var arr = {
                C4: {explosionPower: 999, throwable: false},
                Grenade: {explosionPower: 212, throwable: true},
                Molotov: {explosionPower: 150, throwable: true},
                BOMB: {explosionPower: 550, throwable: false},
                Sheep: {explosionPower: 0, throwable: false}
            };
            var params = datasets.filter3(arr);

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Object;
                var element2 = params[1] instanceof Array;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(Object.keys(params[0])).to.have.length(5);
                expect(params[1]).to.have.length(2);
                expect(params).to.have.length(2);
            });
            it('should match proper predicate', function () {
                var predicate = params[1];

                expect(typeof predicate[0]).to.eql('string');
                expect(predicate[0]).to.have.length.above(5);
                expect(typeof predicate[1]).to.eql('boolean');
            });
            it('should return object relevant to the predicate match', function () {
                expect(_.filter.apply(_, params)).to.eql(
                    [{explosionPower: 212, throwable: true},
                        {explosionPower: 150, throwable: true}]);
            });
        });
        describe('filter4 function', function () {
            var arr = {
                C4: {explosionPower: 999, throwable: false},
                Grenade: {explosionPower: 212, throwable: true},
                Molotov: {explosionPower: 150, throwable: true},
                BOMB: {explosionPower: 550, throwable: false},
                Sheep: {explosionPower: 0, throwable: false}
            };
            var params = datasets.filter4(arr);

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Object;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(Object.keys(params[0])).to.have.length(5);
                expect(params).to.have.length(2);
            });
            it('should match proper predicate', function () {
                var predicate = params[1];

                expect(predicate).to.have.length.above(7);
            });
            it('should return object relevant to the predicate match', function () {
                expect(_.filter.apply(_, params)).to.eql([{explosionPower: 999, throwable: false},
                    {explosionPower: 212, throwable: true},
                    {explosionPower: 150, throwable: true},
                    {explosionPower: 550, throwable: false}]);
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
                var predicate = params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params).to.have.length(2);
                expect(predicate).to.have.length(4);
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
        describe('find3 function', function () {
            var params = datasets.find3(generator.keysGenerator('', '', '', ''));

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Object;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should pass tests for predicate function where function returns object with code length above 22', function () {
                var predicate = params[1];
                var test1 = generator.keysGenerator(50, 2, 4, 3);
                var test2 = generator.keysGenerator(21, 30, 12, 19);
                var test3 = generator.keysGenerator(7, 22, 9, 921);

                expect(_.find.apply(_, [test1, predicate])).to.eql(generator.findObj(test1));
                expect(_.find.apply(_, [test2, predicate])).to.eql(generator.findObj(test2));
                expect(_.find.apply(_, [test3, predicate])).to.eql(generator.findObj(test3));
            });
            it('should find and return object where code length is above 22', function () {
                expect(_.find.apply(_, params)).to.eql({code: 'SbK9WMQJ-2AA2S2Dio317iD'});
            });
        });

        describe('find4 function', function () {
            var users = [
                {nickName: 'Dragon', VIP: true, points: 212, age: 20},
                {nickName: 'Demon', VIP: false, points: 12, age: 20},
                {nickName: 'Eragon', VIP: true, points: 212, age: 20},
                {nickName: 'Pino', VIP: true, points: 111, age: 10},
                {nickName: 'Fallen', VIP: true, points: 212, age: 20}
            ];
            var params = datasets.find4(users);
            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Array;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
                expect(params[1]).to.have.length(2);
            });
            it('should contain relevant predicate', function () {
                var predicate = params[1];

                expect(typeof predicate[0]).to.eql('string');
                expect(typeof predicate[1]).to.eql('string');
                expect(predicate[0]).to.have.length.above(2);
                expect(predicate[1]).to.have.length.above(2);
            });
            it('should find Eragon using proper predicate', function () {
                expect(_.find.apply(_, params)).to.eql({nickName: 'Eragon', VIP: true, points: 212, age: 20});
            });
        });
    });

    describe('groupBy ', function () {
        describe('groupBy function', function () {
            var params = datasets.groupBy();

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should contain array of numbers', function () {
                var array = params[0];

                expect(array.length).to.eql(7);
                array.forEach(function (i) {
                    expect(typeof i).to.eql('number');
                });
            });
            it('should pass the test for provided function', function () {
                var providedFunc = params[1];

                expect(providedFunc(49)).to.eql(49);
                expect(providedFunc(16)).to.eql(4);
                expect(_.ceil(providedFunc(32), 2)).to.eql(5.66);
                expect(_.ceil(providedFunc(68), 3)).to.eql(8.247);
                expect(_.ceil(providedFunc(35), 2)).to.eql(35);
                expect(_.ceil(providedFunc(71), 3)).to.eql(71);
            });
            it('should return an object with grouped square root elements', function () {
                expect(_.groupBy.apply(_, datasets.groupBy())).to.eql({
                    '2': [4],
                    '3': [3],
                    '4': [16],
                    '9': [9],
                    '121': [121],
                    '5.0990195135927845': [26],
                    '9.055385138137417': [82]
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
                expect(params).to.have.length(2);
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
                var element1 = obj instanceof Object;
                var element2 = predicate instanceof Array;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
                expect(predicate).to.have.length(2);
                expect(predicate[0]).to.have.length(3);
                expect(predicate[1]).to.have.length(2);
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
                expect(obj.firstName).to.have.length.above(0);
                expect(obj.lastName).to.have.length.above(3);
                expect(obj.users).to.be.above(5000);
            });
            it('should include first predicate in the object', function () {
                expect(_.includes.apply(_, [obj, predicate[0]])).to.eql(true);
            });
            it('should not include second predicate in the object', function () {
                expect(_.includes.apply(_, [obj, predicate[1]])).to.eql(false);
            });
        });
        describe('includes2 function', function () {
            var params = datasets.includes2();
            var array = params[0];
            var predicate = params[1];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params).to.have.length(2);
            });
            describe('array of random words', function () {
                it('should include array of random words where three words consist of stabli', function () {
                    expect(array.length).to.eql(4);
                    expect(array).to.contain('antidisestablishmentarianism');
                    expect(array).to.not.contain('stabli');
                });
                it('should have each word with different length', function () {
                    expect(array[1]).to.have.length.above(5);
                    expect(array[1]).to.have.length.below(9);
                    expect(array[2]).to.have.length.above(10);
                    expect(array[2]).to.have.length.below(16);
                    expect(array[3]).to.have.length.above(6);
                });
            });
            it('should include proper predicate', function () {
                expect(predicate).to.have.length(6);
                expect(predicate.substr(0, 2)).to.eql('st');
                expect(predicate.substr(3, 1)).to.eql('b');
                expect(predicate.substr(5, 6)).to.eql('i');
            });
            it('should return true if predicate is found', function () {
                array.forEach(function (element, index) {
                    if (index !== 1) {
                        expect(_.includes.apply(_, [element, predicate])).to.eql(true);
                    }
                });
            });
            it('should return false if predicate is not found', function () {
                expect(_.includes.apply(_, [array[1], predicate])).to.eql(false);
            });
        });
        describe('includes3 function', function () {
            var array = [1, true, 3, 'wood', 4, 2, false, true, 'wodo'];
            var params = datasets.includes3(array);
            var predicate1 = params[1];
            var predicate2 = params[2];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];
                var element3 = typeof params[2];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(element3).to.eql('number');
                expect(params).to.have.length(3);
            });
            it('should include relevant values as predicates(fromIndex)', function () {
                expect(predicate1).to.have.length(4);
                expect(predicate2).to.be.above(1);
            });
            it('should return true when predicates with fromIndex find the value', function () {
                expect(_.includes.apply(_, params)).to.eql(true);
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
                expect(params).to.have.length(2);
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
            var providedFunc = params[1];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should return false if passing arguments is not a number', function () {
                expect(providedFunc('asd')).to.eql(false);
                expect(providedFunc([])).to.eql(false);
                expect(providedFunc({})).to.eql(false);
                expect(providedFunc(true)).to.eql(false);
                expect(providedFunc(false)).to.eql(false);
                expect(providedFunc(undefined)).to.eql(false);
                expect(providedFunc(null)).to.eql(false);
            });
            it('should pass test for provided function', function () {
                var randomNumber = chance.natural({min: 50, max: 190});
                var randomNumber2 = chance.natural({min: 20, max: 44});
                var randomNumber3 = chance.natural({min: 210, max: 245});
                var testArray = [randomNumber, randomNumber2, randomNumber3];
                var result = [];

                testArray.forEach(function (item) {
                    if (item % 2 === 0) {
                        expect(providedFunc(item)).to.eql(item * item);
                        return result.push(item * item);
                    } else {
                        expect(providedFunc(item)).to.eql(item + 1);
                        return result.push(item + 1);
                    }
                });
                expect(_.map.apply(_, [testArray, providedFunc])).to.eql(result);
                expect(_.difference(testArray, result)).to.have.length(3);
            });
            it('should square even numbers otherwise add +1 to the odd numbers in the array', function () {
                expect(_.map.apply(_, datasets.map2())).to.eql([2, 4, 4, 16, 6, 36]);
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
        var users2 = [
            {name: 'LadyM', age: 10, status: {membership: 'Deluxe', newOne: true}},
            {name: 'Powpo', age: 22, status: {membership: 'VIP', newOne: false}},
            {name: 'Lamia', age: 27, status: {membership: 'Normal', newOne: false}},
            {name: 'Scale', age: 69, status: {membership: 'VIP', newOne: true}}
        ];

        describe('partition function', function () {
            var params = datasets.partition(users2);
            var spy = sinon.spy(params[1]);

            it('should match types of passing elements', function () {
                var element = params[1] instanceof Function;

                expect(element).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should pass mock test using newOne property', function () {
                var testObj = [
                    {qq: '123', ee: 10, status: {membership: 'Deluxe', newOne: true}},
                    {qq: '45621', ee: 40, status: {membership: 'VIP', newOne: false}},
                    {qq: '456', ee: 132, status: {membership: 'VIP', newOne: true}}
                ];
                var checkFunc = _.partition.apply(_, [testObj, spy]);

                expect(spy).to.have.been.callCount(3);
                expect(checkFunc).to.eql([
                    [{qq: '123', ee: 10, status: {membership: 'Deluxe', newOne: true}},
                        {qq: '456', ee: 132, status: {membership: 'VIP', newOne: true}}],
                    [{qq: '45621', ee: 40, status: {membership: 'VIP', newOne: false}}]
                ]);
            });
            it('should split persons to two tables using newOne property', function () {
                expect(_.partition.apply(_, datasets.partition(users2))).to.eql([
                    [{name: 'LadyM', age: 10, status: {membership: 'Deluxe', newOne: true}},
                        {name: 'Scale', age: 69, status: {membership: 'VIP', newOne: true}}],
                    [{name: 'Powpo', age: 22, status: {membership: 'VIP', newOne: false}},
                        {name: 'Lamia', age: 27, status: {membership: 'Normal', newOne: false}}]
                ]);
            });
        });
        describe('partition2 function', function () {
            var params = datasets.partition2(users);

            it('should match types of passing elements', function () {
                var element = typeof params[1];
                expect(element).to.eql('string');
                expect(element).to.have.length.above(1);
                expect(params).to.have.length(2);
            });
            it('should split persons only to truthy table when predicate is true for all', function () {
                expect(_.partition.apply(_, datasets.partition2(users))).to.eql(
                    [
                        [{name: 'Andrinio', age: 36, active: false},
                            {name: 'Harry', age: 40, active: true},
                            {name: 'Kodi', age: 1, active: false},
                            {name: 'Francheska', age: 61, active: true}], []
                    ]);
            });
        });
        describe('partition3 function', function () {
            var params = datasets.partition3();
            var element1 = params[0] instanceof Object;
            var element2 = params[1] instanceof Function;

            it('should match types of passing elements', function () {
                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
            });
            if (element1 && element2) {
                var providedObj = params[0];
                var providedFunc = params[1];
                var objLength = Object.keys(providedObj).length;

                if (objLength < 5 || providedFunc({age: 20}) === undefined) {
                    it('should contain some values in the object', function () {
                        expect(objLength).to.be.above(4);
                    });
                    it('should return object age +10 when age is lower than 40', function () {
                        var randomAge1 = chance.integer({min: -99, max: 39});
                        var randomAge2 = chance.integer({min: -99, max: 39});
                        var randomAge3 = chance.integer({min: -99, max: 39});
                        expect(providedFunc({age: randomAge1})).to.eql(randomAge1 + 10);
                        expect(providedFunc({age: randomAge2})).to.eql(randomAge2 + 10);
                        expect(providedFunc({age: randomAge3})).to.eql(randomAge3 + 10);
                    });
                } else {
                    it('should contain proper properties in object', function () {
                        Object.keys(providedObj).forEach(function (item, index) {
                            if (index === 0) {
                                expect(item).to.have.length(5);
                            } else if (index === 1) {
                                expect(item).to.have.length(4);
                            } else if (index === 2) {
                                expect(item).to.have.length(6);
                            } else if (index === 3) {
                                expect(item).to.have.length(3);
                            } else if (index === 4) {
                                expect(item).to.have.length(7);
                            }
                        });
                    });
                    it('should contain proper age values in object', function () {
                        for (var i in providedObj) {
                            if (providedObj.hasOwnProperty(i)) {
                                if (i.length === 3) {
                                    expect(providedObj[i].age).to.eql(45);
                                } else if (i.length === 4) {
                                    expect(providedObj[i].age).to.eql(43);
                                } else if (i.length === 5) {
                                    expect(providedObj[i].age).to.eql(39);
                                } else if (i.length === 6) {
                                    expect(providedObj[i].age).to.eql(11);
                                } else if (i.length === 7) {
                                    expect(providedObj[i].age).to.eql(-8);
                                }
                            }
                        }
                    });
                    it('should add +10 to the age when age is lower than 40 and split changed values to truthy table', function () {
                        expect(_.partition.apply(_, datasets.partition3())).to.eql([
                            [{age: 49}, {age: 21}, {age: 2}],
                            [{age: 43}, {age: 45}]
                        ]);
                    });
                }
            }
        });
    });

    describe('reduce', function () {
        describe('reduce function', function () {
            var params = datasets.reduce();
            var array = params[0];
            var spy = sinon.spy(params[1]);

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;
                var element3 = typeof params[2];

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(element3).to.eql('number');
                expect(params).to.have.length(3);
            });
            it('should pass mock test', function () {
                var randomValues = function () {
                    return chance.natural();
                };
                var testArray = [randomValues(), randomValues(), randomValues(), randomValues()];
                var accumulator = 0;
                var checkFunc = _.reduce.apply(_, [testArray, spy, accumulator]);

                testArray.forEach(function (item) {
                    accumulator += item * item;
                });
                expect(spy).to.have.been.callCount(4);
                expect(spy).to.have.been.returned(accumulator);
                expect(checkFunc).to.eql(accumulator);
            });
            it('should contain proper values in the array', function () {
                array.forEach(function (e) {
                    expect(typeof e).to.eql('number');
                });
                expect(array.length).to.eql(5);
                expect(array).to.include(1);
                expect(array).to.include(5);
            });
            it('should count sum of squared numbers', function () {
                expect(_.reduce.apply(_, datasets.reduce())).to.eql(55);
            });
        });
        describe('reduce2 function', function () {
            var obj = {name: 'Ala', pet: 'Cat', age: 'Young'};
            var params = datasets.reduce2(obj);
            var spy = sinon.spy(params[1]);

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Object;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
                expect(params[0]).to.eql(obj);
            });
            it('should pass mock test for predicate function', function () {
                spy();
                expect(spy).to.not.have.been.returned('AlaCatYoung');
            });
            it('should reduce and convert object to the concatenated string', function () {
                expect(_.reduce.apply(_, params)).to.eql('AlaCatYoung');
            });
        });
    });

    describe('sortBy', function () {
        describe('sortBy function', function () {
            var params = datasets.sortBy();
            var array = params[0];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = typeof params[1];

                expect(element1).to.eql(true);
                expect(element2).to.eql('string');
                expect(params).to.have.length(2);
            });
            it('should contain array of random strings with different lenghts', function () {
                expect(array).to.have.length(6);
                array.forEach(function (item, index) {
                    expect(typeof item).to.eql('string');
                    if (index === 0) {
                        expect(item).to.have.length(4);
                    } else if (index === 1) {
                        expect(item).to.have.length(2);
                    } else if (index === 2) {
                        expect(item).to.have.length(6);
                    } else if (index === 3) {
                        expect(item).to.have.length(10);
                    } else if (index === 4) {
                        expect(item).to.have.length(8);
                    } else if (index === 5) {
                        expect(item).to.have.length(3);
                    }
                });
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

        describe('sortBy2 function', function () {
            var data = [
                {login: 'Kooa', pass: 1234, tickets: 22, date: '05-11-16'},
                {login: 'Allu', pass: 2391, tickets: 5, date: '12-11-16'},
                {login: 'Demon', pass: 2342, tickets: 3, date: '17-10-16'},
                {login: 'Koasow', pass: 1234, tickets: 10, date: '06-11-16'},
                {login: 'Bausa', pass: 2184, tickets: 5, date: '10-11-16'},
                {login: 'Zaodi', pass: 7431, tickets: 11, date: '15-11-16'},
                {login: 'Butoiw', pass: 1234, tickets: 10, date: '09-11-16'},
                {login: 'Abero', pass: 2184, tickets: 10, date: '02-11-16'}
            ];
            var params = datasets.sortBy2(data);
            var iteratees = params[1];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Array;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(Object.keys(params[0])).to.have.length(8);
                expect(params[1]).to.have.length(3);
                expect(params[0]).to.eql(data);
            });
            it('should match proper iteratees for sorting purpose', function () {
                iteratees.forEach(function (item, index) {
                    expect(typeof item).to.eql('string');
                    if (index === 0) {
                        expect(item).to.have.length.above(2);
                    } else if (index === 1) {
                        expect(item).to.have.length.above(5);
                    } else if (index === 2) {
                        expect(item).to.have.length.above(2);
                    }
                });
            });
            it('should return sorted array using correct iteratees', function () {
                expect(_.sortBy.apply(_, params)).to.eql([{login: 'Butoiw', pass: 1234, tickets: 10, date: '09-11-16'},
                    {login: 'Koasow', pass: 1234, tickets: 10, date: '06-11-16'},
                    {login: 'Kooa', pass: 1234, tickets: 22, date: '05-11-16'},
                    {login: 'Bausa', pass: 2184, tickets: 5, date: '10-11-16'},
                    {login: 'Abero', pass: 2184, tickets: 10, date: '02-11-16'},
                    {login: 'Demon', pass: 2342, tickets: 3, date: '17-10-16'},
                    {login: 'Allu', pass: 2391, tickets: 5, date: '12-11-16'},
                    {login: 'Zaodi', pass: 7431, tickets: 11, date: '15-11-16'}]);
            });
        });
        describe('sortBy3 function', function () {
            var data = [
                {login: 'Kooa', pass: 1234, tickets: 22, date: '05-11-16'},
                {login: 'Allu', pass: 1234, tickets: 10, date: '12-11-16'},
                {login: 'Demon', pass: 2184, tickets: 3, date: '17-10-16'},
                {login: 'Koasow', pass: 1234, tickets: 12, date: '06-11-16'},
                {login: 'Bausa', pass: 1234, tickets: 5, date: '10-11-16'},
                {login: 'Zaodi', pass: 7431, tickets: 11, date: '15-11-16'},
                {login: 'Butoiw', pass: 1234, tickets: 10, date: '09-11-16'},
                {login: 'Abero', pass: 2184, tickets: 10, date: '02-11-16'}
            ];
            var params = datasets.sortBy3(data);
            var iteratees = params[1];

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Object;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(Object.keys(params[0])).to.have.length(8);
                expect(Object.keys(params[1])).to.have.length(2);
                expect(params[0]).to.eql(data);
            });
            it('should contain object with proper iteratee keys', function () {
                expect(Object.keys(iteratees)).to.have.length(2);

                Object.keys(iteratees).forEach(function (item, index) {
                    if (index === 0) {
                        expect(item).to.have.length(4);
                    } else if (index === 1) {
                        expect(item).to.have.length(7);
                    }
                });
            });
            it('should contain object with proper iteratee value types', function () {
                for (var i in iteratees) {
                    if (iteratees.hasOwnProperty(i)) {
                        expect(typeof iteratees[i]).to.eql('number');
                    }
                }
            });
            it('should return sorted array using proper values as iteratees', function () {
                expect(_.sortBy.apply(_, params)).to.eql([
                    {login: 'Kooa', pass: 1234, tickets: 22, date: '05-11-16'},
                    {login: 'Demon', pass: 2184, tickets: 3, date: '17-10-16'},
                    {login: 'Koasow', pass: 1234, tickets: 12, date: '06-11-16'},
                    {login: 'Bausa', pass: 1234, tickets: 5, date: '10-11-16'},
                    {login: 'Zaodi', pass: 7431, tickets: 11, date: '15-11-16'},
                    {login: 'Abero', pass: 2184, tickets: 10, date: '02-11-16'},
                    {login: 'Allu', pass: 1234, tickets: 10, date: '12-11-16'},
                    {login: 'Butoiw', pass: 1234, tickets: 10, date: '09-11-16'}
                ]);
            });
        });
        describe('sortBy4 function', function () {
            var data = [
                {login: 'Abero', pass: 2184, tickets: 10, date: '12-11-16'},
                {login: 'Kooa', pass: 1234, tickets: 22, date: '15-11-16'},
                {login: 'Kooa', pass: 1234, tickets: -150, date: '15-11-16'},
                {login: 'Bausa', pass: 2184, tickets: 5, date: '10-11-16'},
                {login: 'Bsasa', pass: 2184, tickets: 52, date: '12-11-12'},
                {login: 'Butoiw', pass: 1234, tickets: 10, date: '15-11-16'},
                {login: 'Allu', pass: 2202, tickets: 5, date: '12-11-06'}
            ];
            var result = [
                {login: 'Kooa', pass: 1234, tickets: -150, date: '15-11-16'},
                {login: 'Butoiw', pass: 1234, tickets: 10, date: '15-11-16'},
                {login: 'Kooa', pass: 1234, tickets: 22, date: '15-11-16'},
                {login: 'Bausa', pass: 2184, tickets: 5, date: '10-11-16'},
                {login: 'Abero', pass: 2184, tickets: 10, date: '12-11-16'},
                {login: 'Allu', pass: 2202, tickets: 5, date: '12-11-06'},
                {login: 'Bsasa', pass: 2184, tickets: 52, date: '12-11-12'}
            ];
            var params = datasets.sortBy4(data);
            var providedFunc = sinon.spy(params[1]);

            it('should match types of passing elements', function () {
                var element1 = params[0] instanceof Array;
                var element2 = params[1] instanceof Function;

                expect(element1).to.eql(true);
                expect(element2).to.eql(true);
                expect(params).to.have.length(2);
                expect(params[0]).to.eql(data);
            });
            it('should pass the function check', function () {
                expect(providedFunc).to.not.have.been.returned(result);
            });
            it('should function return sum of pass and tickets', function () {
                var randomNumber = chance.integer({min: -99, max: 99});
                var randomNumber2 = chance.integer({min: -99, max: 99});
                expect(providedFunc({pass: 10, tickets: 3})).to.eql(13);
                expect(providedFunc({pass: -23, tickets: 20})).to.eql(-3);
                expect(providedFunc({pass: 1, tickets: 99})).to.eql(100);
                expect(providedFunc({pass: randomNumber, tickets: randomNumber2})).to.eql(randomNumber+randomNumber2);
            });
            it('should return sorted array using function that add pass to the tickets', function () {
                expect(_.sortBy.apply(_, params)).to.eql(result);
            });
        });
    });

});
