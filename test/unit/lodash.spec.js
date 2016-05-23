'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function() {
    var params;
    describe('Object functions', function() {
        describe('functions', function() {
            beforeEach(function() {
                params = datasets.functions();
            });
            it('should match types of passing elements', function() {
                var obj = params[0];
                expect(obj).to.be.an('object');
                expect(params).to.have.length(1);
            });
            it('should contain one property square', function() {
                var obj = params[0];
                var i = 0;
                expect(obj.hasOwnProperty('square')).to.eql(true);
            });
            it('should not contain own property cube', function() {
                var obj = params[0];
                expect(obj).to.not.have.ownProperty('cube');
            });
            it('should return array property names of functions', function() {
                expect(_.functions.apply(_, params)).to.eql(['square']);
            });
        });

        describe('functionsIn', function() {
            beforeEach(function() {
                params = datasets.functionsIn();
            });
            it('should match types of passing elements', function() {
                var element = params[0];
                expect(element).to.be.an('object');
                expect(params).to.have.length(1);
            });
            it('should contain one property square', function() {
                var obj = params[0];
                var i = 0;
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (obj[key] instanceof Function) {
                            i++;
                        }
                    }
                }
                expect(i).to.eql(1);
            });
            it('should not contain own property cube', function() {
                var obj = params[0];
                expect(obj).to.have.property('cube');
                expect(obj.cube).to.be.an('function');
            });
            it('should return array property names of functions', function() {
                expect(_.functionsIn.apply(_, params)).to.eql(['square', 'cube']);
            });
        });

        describe('pick', function() {
            describe('pick1', function() {
                before(function() {
                    params = datasets.pick1({
                        'red': 1,
                        'green': 2,
                        'blue': 3,
                        'yellow': 4
                    });
                });
                it('should match types of passing elements', function() {
                    var param1 = params[0];
                    var param2 = params[1];
                    expect(param1).to.be.an('object');
                    expect(param2).to.be.an('Array');
                    expect(params).to.have.length(2);
                    for (var i = 0; i < param2.length; i++) {
                        expect(param2[i]).to.be.a('string');
                    }
                });
                it('should pick red and yellow colors', function() {
                    expect(_.pick.apply(_, params)).to.eql({
                        'red': 1,
                        'yellow': 4
                    });
                });
            });

            describe('pick2', function() {
                before(function() {
                    params = datasets.pick2({
                        'red': 1,
                        'green': 2,
                        'blue': 3,
                        'yellow': 4
                    });
                });
                it('should match types of passing elements', function() {
                    var param1 = params[0];
                    var param2 = params[1];
                    expect(param1).to.be.an('object');
                    expect(param2).to.be.an('string');
                    expect(params.length).to.eql(2);
                });
                it('should pick green colors', function() {
                    expect(_.pick.apply(_, params)).to.eql({
                        'green': 2,
                    });
                });
            });
        });

        describe('pickBy', function() {
            describe('pickBy2', function() {
                before(function() {
                    params = datasets.pickBy2();
                });
                it('should match types of passing elements', function() {
                    var param1 = params[0];
                    var param2 = params[1];
                    expect(param1).to.be.an('object');
                    expect(param2).to.be.a('Function');
                    expect(params.length).to.eql(2);
                });
                it('should pick ', function() {
                    expect(_.pickBy.apply(_, params)).to.eql({
                        'x': 16,
                    });
                });
            });
        });

        describe('set', function() {
            describe('set1', function() {
                beforeEach(function() {
                    params = datasets.set1({
                        'rectangle': [{
                            'rect1': {
                                'width': 4,
                                'height': 4
                            },
                            'rect2': {
                                'width': 6,
                                'height': 6
                            }
                        }]
                    });
                });
                it('should match types of passing elements', function() {
                    var param1 = params[0];
                    var param2 = params[1];
                    expect(param1).to.be.an('object');
                    expect(param2).to.be.a('string');
                    expect(params.length).to.eql(3);
                });
                it('pattern should not contain empty string', function() {
                    var str = params[1];
                    expect(str).to.not.be.empty;
                    expect(str).to.have.length.above(0);
                });
                it('should modify height value of rect1 to 8', function() {
                    expect(_.set.apply(_, params)).to.eql({
                        'rectangle': [{
                            'rect1': {
                                'width': 4,
                                'height': 8
                            },
                            'rect2': {
                                'width': 6,
                                'height': 6
                            }
                        }]
                    });
                });
            });

            describe('set2', function() {
                beforeEach(function() {
                    params = datasets.set2({
                        'rectangle': [{
                            'rect1': {
                                'width': 4,
                                'height': 4
                            },
                            'rect2': {
                                'width': 6,
                                'height': 6
                            }
                        }]
                    });
                });
                it('should match types of passing elements', function() {
                    var param1 = params[0];
                    var param2 = params[1];
                    expect(param1).to.be.an('object');
                    expect(param2).to.be.an('array');
                    expect(params.length).to.eql(3);
                });
                it('pattern should not contain empty string', function() {
                    var str = params[1];
                    expect(str).to.not.be.empty;
                    expect(str).to.have.length.above(0);
                });
                it('should set height value of rect1 to 8', function() {
                    expect(_.set.apply(_, params)).to.eql({
                        'rectangle': [{
                            'rect1': {
                                'width': 4,
                                'height': 8
                            },
                            'rect2': {
                                'width': 6,
                                'height': 6
                            }
                        }]
                    });
                });
            });
        });

        describe('setWith', function() {
            beforeEach(function() {
                params = datasets.setWith();
            });
            it('should match types of passing elements', function() {
                expect(params[0]).to.be.an('object');
                expect(params[1]).to.be.a('string');
                expect(params[3]).to.be.a('Function');
                expect(params.length).to.eql(4);
            });
            it('should set height value of rect1 to square of 7', function() {
                expect(_.setWith.apply(_, params)).to.eql({
                    'num': 7
                });
            });
        });

        describe('toPairs', function() {
            beforeEach(function() {
                params = datasets.toPairs();
            });
            it('should be an object', function() {
                expect(params[0]).to.be.an('object');
            });
            it('should contain property but not own property', function() {
                var obj = params[0];
                expect(obj).to.not.have.ownProperty('cherry');
                expect(obj).to.have.property('cherry');
            });
            it('should contain 3 properties including 2 own property', function() {
                var obj = params[0];
                expect(Object.keys(obj)).to.have.length(2);
                expect(obj).to.have.ownProperty('apple', 'green');
                expect(obj).to.have.ownProperty('banana', 'yelow');
                expect(obj).to.not.have.ownProperty('cherry', 'red');
                expect(obj).to.have.property('cherry', 'red');
            });
            it('should return new array of key-value pairs', function() {
                expect(_.toPairs.apply(_, params)).to.eql([
                    ['apple', 'green'],  ['banana', 'yellow']
                ]);
            });
        });

        describe('toPairsIn', function() {
            beforeEach(function() {
                params = datasets.toPairsIn();
            });
            it('should be an object', function() {
                expect(params[0]).to.be.an('object');
            });
            it('should contain 2 properties including 1 own property', function() {
                var obj = params[0];
                expect(obj).to.have.ownProperty('weight', 0.2);
                expect(obj).to.not.have.ownProperty('eatable', true);
                expect(obj).to.have.property('eatable', true);
            });
            it('should return new array of key-value pairs', function() {
                expect(_.toPairsIn.apply(_, params)).to.eql([
                    ['weight', 0.2], ['eatable', true]
                ]);
            });
        });

        describe('transform', function() {

            describe('transform1', function() {
                before(function() {
                    params = datasets.transform1();
                });
                it('should match types of passing elements', function() {
                    expect(params[0]).to.be.an('array');
                    expect(params).to.have.length(3);
                    var acc = params[2];
                    expect(acc).to.eql([]);
                    expect(_.isEmpty(acc)).to.eql(true);
                });
                it('should contain array with 5 Integer values', function() {
                    var array = params[0];
                    expect(array).to.have.length(5);
                    array.forEach(function(key) {
                        expect(Number.isInteger(key)).to.be.ok;
                    });
                });
                it('should contain function with 2 parameters', function() {
                    var fun = params[1];
                    expect(fun).to.have.length(2);
                });

                it('should return accumulated value', function() {
                    expect(_.transform.apply(_, params)).to.eql(['3', '5', '7']);
                });
            });

            describe('transform2', function() {
                before(function() {
                    params = datasets.transform2();
                });
                it('should match types of passing elements', function() {
                    expect(params[0]).to.be.an('object');
                    expect(params).to.have.length(3);
                    var acc = params[2];
                    expect(acc).to.eql({});
                    expect(_.isEmpty(acc)).to.eql(true);
                });
                it('should contain 2 own properties', function() {
                    var obj = params[0];
                    expect(Object.keys(obj)).to.have.length(3);
                });
                it('should contain function with 3 parameters', function() {
                    var fun = params[1];
                    expect(fun).to.have.length(3);
                });

                it('should return accumulated value', function() {
                    expect(_.transform.apply(_, params)).to.eql({
                        '5': ['width'],
                        '10': ['weight'],
                        '600': ['height']
                    });
                });
            });
        });

        describe('unset', function() {
            describe('unset1', function() {
                beforeEach(function() {
                    params = datasets.unset1();
                });
                it('should match types of passing elements', function() {
                    expect(params[0]).to.be.an('object');
                    expect(params[1]).to.be.a('string');
                    expect(params.length).to.eql(2);
                });
                it('should not contain undefined pattern', function() {
                    var pattern = params[1];
                    expect(pattern).to.not.be.undefined;
                });
                it('should remove 4 from height', function() {
                    var obj = params[0];
                    var pattern = params[1];
                    expect(obj.rectangle[0].square.height).to.eql(4);
                    _.unset(obj, pattern);
                    expect(obj.rectangle[0].square.height).to.be.undefined;
                });
                it('should return true after removing property at path of object', function() {
                    expect(_.unset.apply(_, params)).to.eql(true);
                });
            });

            describe('unset2', function() {
                beforeEach(function() {
                    params = datasets.unset2();
                });
                it('should match types of passing elements', function() {
                    expect(params[0]).to.be.an('object');
                    expect(params[1]).to.be.an('array');
                    expect(params).to.have.length(2);
                });
                it('should not contain undefined pattern', function() {
                    var pattern = params[1];
                    expect(pattern).to.not.be.undefined;
                });
                it('should unset given element and return true', function() {
                    expect(_.unset.apply(_, params)).to.equal(true);
                });
                it('should remove additional property', function() {
                    var obj = params[0];
                    expect(obj.triangle[0].deminsions.d).to.eql(5);
                    _.unset.apply(_, params);
                    expect(obj.triangle[0].deminsions.d).to.be.undefined;
                });
            });
        });

        describe('update', function() {
            before(function() {
                params = datasets.update();
            });
            it('should match types', function() {
                expect(params[0]).to.be.an('object');
                expect(params[1]).to.be.a('string');
                expect(params[2]).to.be.a('function');
            });
            it('should not contain direct answer', function() {
                expect(params[0].rectangle[0].rect1.height).to.not.eql(8);
            });
            it('should return double height property', function() {
                expect(_.update.apply(_, params)).to.eql({
                    'rectangle': [{
                        'rect1': {
                            'width': 4,
                            'height': 8
                        }
                    }]
                });
            });
        });

        describe('updateWith', function() {
            before(function() {
                params = datasets.updateWith();
            });
            it('should be an object', function() {
                expect(params[0]).to.be.an('object');
                expect(params[1]).to.be.a('string');
                expect(params[2]).to.be.a('function');
            });
            it('should not contain direct answer', function() {
                expect(params[0].rectangle[0].rect2.height).to.not.eql(12);
            });
            it('should return triple height property', function() {
                expect(_.updateWith.apply(_, params)).to.eql({
                    'rectangle': [{
                        'rect2': {
                            'width': 4,
                            'height': 12
                        }
                    }]
                });
            });
        });

        describe('values', function() {
            describe('values', function() {
                before(function() {
                    params = datasets.values();
                });
                it('should be an object', function() {
                    var obj = params[0];
                    expect(obj).to.be.an('object');
                });
                it('should contain only 1 parameter', function() {
                    expect(params.length).to.eql(1);
                });
                it('should check of properties are right', function() {
                    var obj = params[0];
                    expect(obj).to.have.ownProperty('a', null);
                    expect(obj).to.have.ownProperty('b', 2);
                    expect(obj).to.not.have.ownProperty('c', '3');
                    expect(obj).to.have.property('c', '3');
                });
                it('has 2 own properties', function() {
                    var obj = params[0];
                    expect(Object.keys(obj)).to.have.length(2);
                });
                it('should return array of own properties', function() {
                    expect(_.values.apply(_, params)).to.eql([ null, 2 ]);
                });
            });
        });

        describe('valuesIn', function() {
            describe('valuesIn', function() {
                before(function() {
                    params = datasets.valuesIn();
                });
                it('should be an object', function() {
                    expect(params[0]).to.be.an('object');
                });
                it('should check of properties are right', function() {
                    var obj = params[0];
                    expect(obj).to.have.ownProperty('a', 6);
                    expect(obj).to.not.have.ownProperty('c', 7);
                    expect(obj).to.have.property('c', 7);
                });
                it('should not contain own property with value 2', function() {
                    var obj = params[0];
                    expect(Object.keys(obj)).to.have.length(1);
                });
                it('should return array of all properties', function() {
                    expect(_.valuesIn.apply(_, params)).to.eql([ 6,7 ]);
                });
            });

        });
    });

});
