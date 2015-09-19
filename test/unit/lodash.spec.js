'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
// var sinon = require('sinon');

describe('Lodash training', function() {
    var params;

    // ----------------------- OBJECTS ----------------------- //

    describe('functions', function() {
        beforeEach(function() {
            params = datasets.functions();
        });
        it('should match types of passing elements', function() {
            var element = params[0] instanceof Object;
            expect(element).to.eql(true);
            expect(params).to.have.length(1);
        });
        it('should contain only one function', function() {
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
        it('should return array property names of functions', function() {
            expect(_.functions.apply(_, params)).to.eql(['x']);
        });
    });

    describe('functionsIn', function() {
        beforeEach(function() {
            params = datasets.functionsIn();
        });
        it('should match types of passing elements', function() {
            var element = params[0] instanceof Object;
            expect(element).to.eql(true);
            expect(params).to.have.length(1);
        });
        it('should not contain proper11111111111111111111111', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    // co tu wpisac ...
                }
            }
        });
        it('should return array property names of functions', function() {
            expect(_.functionsIn.apply(_, params)).to.eql(['x', 'z']);
        });
    });

    describe('pick', function() {
        beforeEach(function() {
            params = datasets.pick();
        });
        it('should match types of passing elements', function() {
            var element = params[0] instanceof Object;
            var element1 = params[1] instanceof Object;
            expect(element).to.eql(true);
            expect(element1).to.eql(true);
            expect(params.length).to.eql(2);
        });
        it('should pick red and yellow apples', function() {
            expect(_.pick.apply(_, params)).to.eql({
                'red': 6,
                'yellow': 2
            });
        });
    });

    describe('pick1', function() {
        beforeEach(function() {
            params = datasets.pick1();
        });
        it('should match types of passing elements', function() {
            var element = params[0] instanceof Object;
            var element1 = typeof params[1];
            expect(element).to.eql(true);
            expect(element1).to.eql('string');
            expect(params.length).to.eql(2);
        });
        it('should pick green apples', function() {
            expect(_.pick.apply(_, params)).to.eql({
                'green': 4,
            });
        });
    });

    describe('pickBy', function() {
        beforeEach(function() {
            params = datasets.pickBy();
        });
        it('should match types of passing elements', function() {
            var element = params[0] instanceof Object;
            var element1 = params[1] instanceof Function;
            expect(element).to.eql(true);
            expect(element1).to.eql(true);
            expect(params.length).to.eql(2);
        });
        it('should pick ', function() {
            expect(_.pickBy.apply(_, params)).to.eql({
                'x': 16,
            });
        });
    });

    describe('set', function() {
        beforeEach(function() {
            params = datasets.set();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = typeof params[1];
            expect(element1).to.eql(true);
            expect(element2).to.eql('string');
            expect(params.length).to.eql(3);
        });
        it('should set height value of rect1 to 8', function() {
            expect(_.set.apply(_, params)).to.eql({
                'rectangle': [{
                    'rect1': {
                        'width': 4,
                        'height': 8
                    }
                }]
            });
        });
    });

    describe('set2', function() {
        beforeEach(function() {
            params = datasets.set2();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = params[1] instanceof Object;
            expect(element1).to.eql(true);
            expect(element2).to.eql(true);
            expect(params.length).to.eql(3);
        });
        it('should set height value of rect1 to 8', function() {
            expect(_.set.apply(_, params)).to.eql({
                'rectangle': [{
                    'rect1': {
                        'width': 4,
                        'height': 8
                    }
                }]
            });
        });
    });

    describe('setWith', function() {
        beforeEach(function() {
            params = datasets.setWith();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = typeof params[1];
            expect(element1).to.eql(true);
            expect(element2).to.eql('string');
            expect(params.length).to.eql(4);
        });
        it('should set height value of rect1 to 8', function() {
            // expect(_.set.apply(_, params)).to.eql({ 'rectangle': [{ 'rect1': { 'width': 4, 'height': 8 } }] });
        });
    });

    describe('toPairs', function() {
        beforeEach(function() {
            params = datasets.toPairs();
        });
        it('should be an object', function() {
            var e1 = params[0] instanceof Object;
            expect(e1).to.eql(true);
        });
        it('should contain 3 properties', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(key).to.not.eql('red');
                }
            }
            expect(Object.keys(obj).length).to.eql(2);
        });
        it('should return new array of key-value pairs', function() {
            expect(_.toPairs.apply(_, params)).to.eql([
                ['apple', 'green'],
                ['banana', 2]
            ]);
        });
    });

    describe('toPairsIn', function() {
        beforeEach(function() {
            params = datasets.toPairsIn();
        });
        it('should be an object', function() {
            var e1 = params[0] instanceof Object;
            expect(e1).to.eql(true);
        });
        it('should contain 2 properties', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(key).to.not.eql('red');
                }
            }
            expect(Object.keys(obj).length).to.eql(1);
        });
        it('should return new array of key-value pairs', function() {
            expect(_.toPairs.apply(_, params)).to.eql([
                ['weight', 0.2]
            ]);
        });
    });

    describe('transform', function() {
        beforeEach(function() {
            params = datasets.transform();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = params[1] instanceof Function;
            expect(element1).to.eql(true);
            expect(element2).to.eql(true);
            expect(params).to.have.length(3);
            var acc = params[2];
            expect(acc).to.eql([]);
            expect(_.isEmpty(acc)).to.eql(true);
        });
        it('should contain array with 5 Integer values', function() {
            var array = params[0];
            expect(array.length).to.eql(5);
            array.forEach(function(key) {
                expect(Number.isInteger(key)).to.eql(true);
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

    describe('transform1', function() {
        beforeEach(function() {
            params = datasets.transform1();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = params[1] instanceof Function;
            var acc = params[2];
            expect(element1).to.eql(true);
            expect(element2).to.eql(true);
            expect(params).to.have.length(3);
            expect(acc).to.eql({});
            expect(_.isEmpty(acc)).to.eql(true);
        });
        it('should contain 2 own properties', function() {
            var obj = params[0];
            expect(Object.keys(obj).length).to.eql(3);
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

    describe('unset', function() {
        beforeEach(function() {
            params = datasets.unset();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = typeof params[1];
            expect(element1).to.eql(true);
            expect(element2).to.eql('string');
            expect(params.length).to.eql(2);
        });
        it('should remove 4 from height', function() {
            var obj = params[0];
            var pattern = params[1];
            expect(obj.rectangle[0].square.height).to.eql(4);
            _.unset(obj, pattern);
            expect(obj.rectangle[0].square.height).to.eql(undefined);
        });
        it('should return true after removing property at path of object', function() {
            expect(_.unset.apply(_, params)).to.eql(true);
        });
    });

    describe('unset1', function() {
        beforeEach(function() {
            params = datasets.unset1();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0] instanceof Object;
            var element2 = params[1] instanceof Object;
            expect(element1).to.eql(true);
            expect(element2).to.eql(true);
            expect(params).to.have.length(2);
        });
        it('should unset given element and return true', function() {
            expect(_.unset.apply(_, params)).to.equal(true);
        });
        it('should', function() {
            // sprawdzić czy ilosc elementów jest mniejsza po usunieciu
            var obj = params[0];
            var temp = obj;
            var pattern = params[1];
            _.unset(obj, pattern);
            expect(obj).to.eql(temp);
        });
    });

    describe('update', function() {
        beforeEach(function() {
            params = datasets.update();
        });
        it('should be an object', function() {
            var element = params[0] instanceof Object;
            var element1 = typeof params[1];
            var element2 = params[2] instanceof Function;
            expect(element).to.eql(true);
            expect(element1).to.eql('string');
            expect(element2).to.eql(true);
        });
        it('should double height', function() {
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
        beforeEach(function() {
            params = datasets.updateWith();
        });
        it('should be an object', function() {
            var element = params[0] instanceof Object;
            var element1 = typeof params[1];
            var element2 = params[2] instanceof Function;
            expect(element).to.eql(true);
            expect(element1).to.eql('string');
            expect(element2).to.eql(true);
        });
        it('should triple height', function() {
            expect(_.updateWith.apply(_, params)).to.eql({
                'rectangle': [{
                    'rect1': {
                        'width': 4,
                        'height': 12
                    }
                }]
            });
        });
    });

    describe('values', function() {
        beforeEach(function() {
            params = datasets.values();
        });
        it('should be an object', function() {
            var element1 = params[0] instanceof Object;
            expect(element1).to.eql(true);
        });
        it('should have 1 parameter', function() {
            expect(params.length).to.eql(1);
        });
        it('should not contain own property with value 2', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(obj[key]).to.not.eql(2);
                }
            }
        });
        it('has 2 own properties', function() {
            var obj = params[0];
            if (Object.keys(obj).length < 2 || Object.keys(obj).length > 2) {
                expect(Object.keys(obj).length).to.eql(2);
            }
        });
        it('should return [null]', function() {
            expect(_.values.apply(_, params)).to.eql([null, {
                'b': 2
            }]);
        });
    });

    describe('values1', function() {

        beforeEach(function() {
            params = datasets.values1();
        });
        it('should be an object', function() {
            var element1 = params[0] instanceof Object;
            expect(element1).to.eql(true);
        });
        it('should not contain own property with value 2', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(obj[key]).to.not.eql(2);
                }
            }
        });
    });

    describe('valuesIn', function() {
        beforeEach(function() {
            params = datasets.valuesIn();
        });
        it('should be an object', function() {
            var element1 = params[0] instanceof Object;
            expect(element1).to.eql(true);
        });
        it('should not contain own property with value 2', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(obj[key]).to.not.eql(2);
                }
            }
        });
    });

    describe('valuesIn1', function() {
        beforeEach(function() {
            params = datasets.valuesIn1();
        });
        it('should be an object', function() {
            var element1 = params[0] instanceof Object;
            expect(element1).to.eql(true);
        });
        it('should not contain own property with value 2', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(obj[key]).to.not.eql(2);
                }
            }
        });
        it('should return [null, undefined]', function() {
            expect(_.valuesIn.apply(_, params)).to.eql([null, undefined]);
        });
    });
});
