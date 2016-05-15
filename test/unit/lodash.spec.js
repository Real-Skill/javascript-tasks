'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
// var sinon = require('sinon');

describe('Lodash training', function() {
    var params;
    // ----------------------- LANG ----------------------- //

    // describe('cloneWith', function() {
    //     beforeEach(function() {
    //         params = datasets.cloneWith();
    //     });
    //     it('should match types of passing elements', function() {
    //         var param1 = params[0];
    //         var param2 = params[1];
    //         expect(param1).to.be.an('Array');
    //         // expect(param2).to.be.a('Function');
    //         // expect(params).to.have.length(2);
    //     });
    //     it('should return reverse wrapped array', function() {
    //         var param1 = params[0];
    //         var param2 = params[1];
    //         var test = _.cloneWith(param1);
    //         console.log(test === param1);
    //         // expect(_.cloneWith.apply(_, params)).to.equal(2);
    //     });
    // });

    // ----------------------- SEQ ----------------------- //

    // describe('prototype.tap', function() {
    //     beforeEach(function() {
    //         params = datasets.prototypeTap();
    //     });
    //     it('should match types of passing elements', function() {
    //         var param1 = params[0];
    //         var param2 = params[1];
    //         expect(param2).to.be.a('Function');
    //         expect(params).to.have.length(2);
    //     });
    //     it('should return reverse wrapped array', function() {
    //         var param1 = params[0];
    //         var param2 = params[1];
    //         expect(_(param1).tap(param2).chain().reverse().value()).to.eql([ 10, 8, 6, 4, 2]);
    //     });
    // });
    //
    // describe('prototype.thru', function() {
    //     beforeEach(function() {
    //         params = datasets.prototypeThru();
    //     });
    //     it('should match types of passing elements', function() {
    //         var param1 = params[0];
    //         var param2 = params[1];
    //         expect(param2).to.be.a('Function');
    //         expect(params).to.have.length(2);
    //     });
    //     it('should return reverse wrapped array', function() {
    //         var param1 = params[0];
    //         var param2 = params[1];
    //         expect(_(param1).chain().lowerCase().thru(param2).value()).to.eql([ 'roses are red' ]);
    //     });
    // });

    // ----------------------- UTIL ----------------------- //

    // describe('bindAll', function() {
    //     describe('bindAll1', function() {
    //         beforeEach(function() {
    //             params = datasets.bindAll1();
    //         });
    //         it('should match types of passing elements', function() {
    //             var param1 = params[0];
    //             expect(param1).to.be.an('Array');
    //             expect(params).to.have.length(2);
    //         });
    //     });
    //     describe('bindAll2', function() {
    //         beforeEach(function() {
    //             params = datasets.bindAll2();
    //         });
    //         it('should match types of passing elements', function() {
    //             var param1 = params[0];
    //             expect(param1).to.be.an('Array');
    //             expect(params).to.have.length(2);
    //         });
    //     });
    // });

    describe('cond', function() {
        beforeEach(function() {
            params = datasets.cond();
        });
        it('should match types of passing elements', function() {
            var param1 = params[0];
            expect(param1).to.be.an('Array');
            expect(params).to.have.length(1);
        });
        it('should contain array of pairs', function() {
            var param1 = params[0];
            for(var i=0; i < param1.length; i++){
                expect(param1[i].length).to.eql(2);
            }
        });
    });

    describe('runInContext', function() {
        beforeEach(function() {
            params = datasets.runInContext();
        });
        it('should match types of passing elements', function() {
            var param1 = params[0];
            expect(param1).to.be.an('Object');
            expect(params).to.have.length(1);
        });
        it('should have parameter object with one property function', function() {
            var param1 = params[0];
            expect(Object.keys(param1).length).to.eql(1);
            for(var key in param1){
                expect(param1[key]).to.be.a('Function');
            }
        });
    });

    describe('mixin', function() {
        describe('mixin1', function() {
            beforeEach(function() {
                params = datasets.mixin1();
            });
            it('should match types of passing elements', function() {
                var param1 = params[0];
                var param2 = params[1];
                if(param2 !== undefined && params.length == 2){
                    expect(param2).to.be.an('Object');
                    expect(Object.keys(param2)).to.have.length(1);
                }
                //         var param1 = params[0];
                //         var param2 = params[1];
                //         var param3 = params[2];
                //         expect(param1).to.be.an('Object');
                //         expect(param1).to.be.an('Object');
                //         expect(param1).to.be.an('Object');
                //         expect(params).to.have.length.within(2,3);
            });
            it('should contain option with one property', function() {
                var param2 = params[1];
                if(param2 !== undefined && params.length == 2){
                    expect(param2).to.have.property('chain');
                    expect(param2['chain']).to.be.a('boolean');
                }
            });
        });
        // describe('mixin2', function() {
        //     beforeEach(function() {
        //         params = datasets.mixin2();
        //     });
        //     it('should match types of passing elements', function() {
        //         var param1 = params[0];
        //         var param2 = params[1];
        //         var param3 = params[2];
        //         expect(param1).to.be.an('Object');
        //         expect(param1).to.be.an('Object');
        //         expect(param1).to.be.an('Object');
        //         expect(params).to.have.length.within(2,3);
        //     });
        //     it('should contain array of pairs', function() {
        //         var param1 = params[0];
        //         for(var i=0; i < param1.length; i++){
        //             expect(param1[i].length).to.eql(2);
        //         }
        //     });
        // });
    });

    // ----------------------- STRING ----------------------- //

    describe('template', function() {
        beforeEach(function() {
            params = datasets.template();
        });
        it('should match types of passing elements', function() {
            var param1 = params[0];
            var param2 = params[1];
            expect(param1).to.be.a('string');
            expect(params).to.have.length.within(1,2);
            if(param2 !== undefined && params.length == 2){
                expect(param2).to.be.an('object');
                expect(Object.keys(param2)).to.have.length.within(1,6);
            }
        });
        it('should check options', function() {
            var options = params[1];
            expect(options).to.have.any.keys('escape', 'evaluate', 'imports' ,'interpolate', 'sourceURL', 'variable');
            for(var key in options){
                // expect(key).to.be.oneOf(['escape', 'evaluate', 'imports' ,'interpolate', 'sourceURL', 'variable']);
                if(key == 'escape'){
                    expect(key).to.be.a('RegExp');
                }
                if(key == 'evaluate'){
                    expect(key).to.be.a('RegExp');
                }
                if(key == 'imports'){
                    expect(key).to.be.an('Object');
                }
                if(key == 'interpolate'){
                    expect(key).to.be.a('RegExp');
                }
                if(key == 'variable'){
                    expect(key).to.be.a('string');
                }
                if(key == 'variable'){
                    expect(key).to.be.a('string');
                    expect(options[key]).to.not.be.empty;
                }
            }
        });
        it('should return array property names of functions', function() {
            // expect(_.template.apply(_, params)).to.eql(true);
        });
    });

    // ----------------------- OBJECTS ----------------------- //

    describe('functions', function() {
        beforeEach(function() {
            params = datasets.functions();
        });
        it('should match types of passing elements', function() {
            var obj = params[0];
            expect(obj).to.be.an('object');
            expect(params).to.have.length(1);
        });
        it('should contain only one property square', function() {
            var obj = params[0];
            var i = 0;
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && key === 'square') {
                    if (obj[key] instanceof Function) {
                        i++;
                    }
                }
            }
            expect(i).to.eql(1);
        });
        it('should not contain own property cube', function() {
            var obj = params[1];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(key).to.not.eql('cube');
                }
            }
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
        it('should contain only one property square', function() {
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
            beforeEach(function() {
                params = datasets.pick1({
                    'red': 1,
                    'green': 2,
                    'blue': 3,
                    'yellow': 4
                });
            });
            it('should match types of passing elements', function() {
                var element = params[0];
                var element1 = params[1] instanceof Array;
                expect(element).to.be.an('object');
                expect(element1).to.eql(true);
                expect(params).to.have.length(2);
                for (var i = 0; i < params[1].length; i++) {
                    expect(params[1][i]).to.be.a('string');
                }
            });
            it('should pick red and yellow apples', function() {
                expect(_.pick.apply(_, params)).to.eql({
                    'red': 1,
                    'yellow': 4
                });
            });
        });

        describe('pick2', function() {
            beforeEach(function() {
                params = datasets.pick2({
                    'red': 1,
                    'green': 2,
                    'blue': 3,
                    'yellow': 4
                });
            });
            it('should match types of passing elements', function() {
                var element = params[0];
                var element1 = params[1];
                expect(element).to.be.an('object');
                expect(element1).to.be.an('string');
                expect(params.length).to.eql(2);
            });
            it('should pick green apples', function() {
                expect(_.pick.apply(_, params)).to.eql({
                    'green': 2,
                });
            });
        });
    });

    describe('pickBy', function() {
        describe('pickBy1', function() {
            beforeEach(function() {
                params = datasets.pickBy1();
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
        describe('pickBy2', function() {
            beforeEach(function() {
                params = datasets.pickBy2();
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
        describe('pickBy3', function() {
            beforeEach(function() {
                params = datasets.pickBy3();
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
        describe('pickBy4', function() {
            beforeEach(function() {
                params = datasets.pickBy4();
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
    });

    describe('set', function() {
        describe('set1', function() {
            beforeEach(function() {
                params = datasets.set1();
            });
            it('should match types of passing elements', function() {
                var element1 = params[0];
                var element2 = params[1];
                expect(element1).to.be.an('object');
                expect(element2).to.be.a('string');
                expect(params.length).to.eql(3);
            });
            it('pattern should not contain empty string', function() {
                var str = params[1];
                expect(str).to.have.length.above(0);
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
                var element1 = params[0];
                var element2 = params[1] instanceof Object;
                expect(element1).to.be.an('object');
                expect(element2).to.eql(true);
                expect(params.length).to.eql(3);
            });
            it('pattern should not contain empty string', function() {
                var str = params[1];
                expect(str).to.have.length.above(0);
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
    });

    describe('setWith', function() {
        beforeEach(function() {
            params = datasets.setWith();
        });
        it('should match types of passing elements', function() {
            var element1 = params[0];
            var element2 = params[1];
            var element4 = params[3];
            expect(element1).to.be.an('object');
            expect(element2).to.be.a('string');
            expect(element4).to.be.a('function');
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
            var e1 = params[0];
            expect(e1).to.be.an('object');
        });
        it('should contain property but not own property', function() {
            var obj = params[0];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    expect(key).to.not.eql('red');
                }
            }
            expect(obj).to.have.property('cherry');
        });
        it('should contain only 2 own properties', function() {
            var obj = params[0];
            expect(Object.keys(obj).length).to.eql(2);
        });
        it('should return new array of key-value pairs', function() {
            expect(_.toPairs.apply(_, params)).to.eql([
                ['apple', 'green'],
                ['banana', 'yellow']
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

        describe('transform1', function() {
            beforeEach(function() {
                params = datasets.transform1();
            });
            it('should match types of passing elements', function() {
                var element1 = params[0];
                var element2 = params[1];
                expect(element1).to.be.an('array');
                expect(element2).to.be.a('function');
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

        describe('transform2', function() {
            beforeEach(function() {
                params = datasets.transform2();
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
    });

    describe('unset', function() {
        describe('unset1', function() {
            beforeEach(function() {
                params = datasets.unset1();
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

        describe('unset2', function() {
            beforeEach(function() {
                params = datasets.unset2();
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
        describe('values1', function() {
            beforeEach(function() {
                params = datasets.values1();
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

        describe('values2', function() {

            beforeEach(function() {
                params = datasets.values2();
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
    });

    describe('valuesIn', function() {
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
        });

        describe('valuesIn2', function() {
            beforeEach(function() {
                params = datasets.valuesIn2();
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
            it('should return values', function() {
                expect(_.valuesIn.apply(_, params)).to.eql([null, undefined]);
            });
        });
    });

});