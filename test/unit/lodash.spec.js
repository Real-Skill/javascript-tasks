'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var sinon = require('sinon');



describe('Lodash training Object', function ()
{

    describe('assign', function () {
        var params,
            elem1,
            elem2;
        before(function(){
            params = datasets.assign();
            elem1 = params[0];
            elem2 = params[1];
        });
        it('should check types ', function(){
            expect(typeof elem1).to.eql('object');
            expect(elem2 instanceof Object).to.eql(true);
        });
        it('should check if first object has right properties', function(){
            expect(elem1).to.have.ownProperty('number', 5);
            expect(elem1).to.have.ownProperty('square', 25);
            expect(elem1).to.have.ownProperty('ping');
            expect(elem1).to.have.ownProperty('pong');
        });
        it('should check if first object function (ping) return right value', function(){
            expect(elem1.ping()).to.eql('Number: 5');
        });
        it('should check if first object function (pong) return right value', function(){
            expect(elem1.pong()).to.eql('Number: 25');
        });
        it('should check if second object have right properties', function(){
            expect(elem2).to.have.ownProperty('number', 6);
            expect(elem2).to.have.ownProperty('string','default');
        });
        it('should check if second object have right prototype properties', function(){
            expect(elem2).to.have.property('square', 36);
            expect(elem2).not.to.have.ownProperty('square', 36);
        });
        it('should return new object with properties from both objects', function(){
            var assigmentResults = _.assign.apply(_, params);
            expect(assigmentResults).to.have.ownProperty('number', 6);
            expect(assigmentResults).to.have.ownProperty('square', 25);
            expect(assigmentResults).to.have.ownProperty('string', 'default');
            expect((assigmentResults).ping()).to.eql('Number: 6');
            expect((assigmentResults).pong()).to.eql('Number: 25');
        });
    });

    describe('assignIn', function () {
        var params,
            elem1,
            elem2;
        before(function(){
            params = datasets.assignIn();
            elem1 = params[0];
            elem2 = params[1];
        });
        it('should check types ', function(){
            expect(typeof elem1).to.eql('object');
            expect(elem2 instanceof Object).to.eql(true);
        });
        it('should first object have proper properties', function(){
            expect(elem1).to.have.ownProperty('number', 5);
            expect(elem1).to.have.ownProperty('square');
            expect(elem1.square()).to.eql('Square: ' + Math.pow(this.number, 2));
        });
        it('should check properties second object', function(){
            expect(elem2).to.have.ownProperty('number', 4);
            expect(elem2).to.have.ownProperty('cube', 64);
            expect(elem2).to.have.property('square');
            expect(elem2).not.to.have.ownProperty('square');
            expect(elem2.square()).to.eql('Square: ' + Math.pow(this.number, 2));
        });
        it('should check if second object have fourthPower as prototype property', function(){
            expect(elem2).not.to.have.ownProperty('fourthPower', 256);
            expect(elem2).to.have.property('fourthPower', 256);
        });
        it('should return new object with properties from both objects', function(){
            var assigmentResults = _.assignIn.apply(_, params);
            expect(assigmentResults).to.have.ownProperty('number', 4);
            expect(assigmentResults).to.have.ownProperty('cube', 64);
            expect(assigmentResults).to.have.ownProperty('fourthPower', 256);
            expect((assigmentResults).square()).to.eql('Square: ' + Math.pow(this.number, 2));
        });
    });

    describe('at', function () {
        describe('at1', function () {
            var params;
            before(function(){
                params = datasets.at1();
            });
            it('should check types', function(){
                var elem2 = params[1];

                expect(elem2 instanceof Array).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should check if return array with right value', function(){
                var rand = function(){
                    //function _.random Returns the random number between 1 and 100
                    return _.random(1, 100);
                };

                var randCover = function(){
                    //function _.random Returns the random number between 1 and 50
                    return _.random(1, 50);
                };

                var obj = {
                    'book': [{ 'count': randCover(), other: { 'pages': rand() }, 'ISBN': true}]
                };
                expect(_.at.apply(_, datasets.at1(obj))).to.eql([obj.book[0].other.pages, obj.book[0].count]);
            });
        });
        describe('at2', function () {
            var params,
                elem1,
                elem2;
            before(function(){
                params = datasets.at2();
                elem1 = params[0];
                elem2 = params[1];
            });
            it('should check types', function(){
                expect(elem1 instanceof Object).to.eql(true);
                expect(elem2 instanceof Object).to.eql(true);
            });
            it('should check elements of array', function(){
                expect(elem1[0]).to.eql('mate');
                expect(elem1[1]).to.eql('companion');
                expect(elem1[2]).to.eql('fellow');
                expect(elem1[3]).to.eql('worker');
                expect(elem1[4]).to.eql('friend');
                expect(elem1[5]).to.eql('helper');
            });
            it('should check values of returned array', function(){
                expect(_.at.apply(_, params)).to.eql(['mate', 'friend']);
            });
        });
    });

    describe('defaults', function () {
        var params,
            elem1,
            elem2,
            elem3;
        before(function(){
            params = datasets.defaults();
            elem1 = params[0];
            elem2 = params[1];
            elem3 = params[2];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Object).to.eql(true);
            expect(elem3 instanceof Object).to.eql(true);
        });
        it('should check properties first object', function(){
            expect(elem1).to.have.property('name', 'John');
            expect(elem1).to.have.property('surname', 'Smith');
            expect(elem1).to.have.property('age', 25);
        });
        it('should check properties second object', function(){
            expect(elem2).to.have.property('name', 'Tom');
            expect(elem2).to.have.property('gender', 'male');
        });
        it('should check properties third object', function(){
            expect(elem3).to.have.property('surname', 'Twist');
        });
        it('should return new object witch defaults values', function(){
            var defaultsResults = _.defaults.apply(_, params);
            expect(defaultsResults).to.have.property('name', 'John');
            expect(defaultsResults).to.have.property('surname', 'Smith');
            expect(defaultsResults).to.have.property('gender','male');
            expect(defaultsResults).to.have.property('age', 25);
        });
    });
    
    describe('defaultsDeep', function () {
        var params,
            elem1,
            elem2;
        before(function(){
            params = datasets.defaultsDeep();
            elem1 = params[0];
            elem2 = params[1];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Object).to.eql(true);
        });
        it('should check properties first object', function(){
            expect(elem1).to.have.property('data');
            expect(elem1).to.have.deep.property('data.text', 'Tim');
            expect(elem1).to.have.deep.property('data.reversedText', 'miT');
        });
        it('should check properties second object', function(){
            expect(elem2).to.have.property('data');
            expect(elem2).to.have.deep.property('data.text', 'mouse');
            expect(elem2).to.have.deep.property('data.reversedText', 'esuom');
            expect(elem2.data.lengthText()).to.equal(5);
        });
        it('should return new object with defaults properties', function(){
            var defaultsResults = _.defaultsDeep.apply(_, params);
            expect(defaultsResults).to.have.property('data');
            expect(defaultsResults).to.have.deep.property('data.text', 'Tim');
            expect(defaultsResults).not.to.have.deep.property('data.text', 'mouse');
            expect(defaultsResults).to.have.deep.property('data.reversedText', 'miT');
            expect(defaultsResults).not.to.have.deep.property('data.reversedText', 'esuom');
            expect(defaultsResults).to.have.deep.property('data.lengthText');
        });
    });

    describe('findKey', function () {
        describe('findKey1', function () {
            var params;
            before(function(){
                params = datasets.findKey1();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(elem2 instanceof Function).to.eql(true);
            });
            it('should return person who has number greather than 20', function(){
                var obj1 = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index) {

                    //function _.random Returns the random number between 0 and 20
                    obj1['key' + index] = {number: _.random(20)};
                });
                //function _.random Returns the random number between 0 and 99
                var expectedKey = _.keys(obj1)[_.random(99)];

                //function _.random Returns the random number between 0 and 10
                obj1[expectedKey]={number:21+ _.random(10)};

                expect(_.findKey.apply(_, datasets.findKey1(obj1))).to.eql(expectedKey);
            });
        });

        describe('findKey2', function () {
            var params;
            before(function(){
                params = datasets.findKey2();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('object');
            });
            it('should return keys with value { number: 15 }', function(){
                var obj1 = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index) {

                    //function _.random Returns the random number between 0 and 20
                    obj1['key' + index] = {number: _.random(20)};
                });

                //function _.random Returns the random number between 0 and 99
                var expectedKey = _.keys(obj1)[_.random(99)];

                //function _.random Returns the random number between 0 and 10
                obj1[expectedKey] = {number: 21 + _.random(10)};

                var expected = _.findKey(obj1, params[1]);
                expect(_.findKey.apply(_, datasets.findKey2(obj1))).to.eql(expected);
            });
        });

        describe('findKey3', function () {
            var params;
            before(function(){
                params = datasets.findKey3();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(elem2 instanceof Array).to.eql(true);
            });
            it('should return wanted value from object', function(){
                var obj1 = {};

                var randomBool = function(){
                    //function _.random will return 0 or 1 but result of comparision
                    // will be true or false
                    return _.random() < 0.5;
                };

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index) {
                    //function _.random Returns the random number between 0 and 20
                    obj1['key' + index] = {number: _.random(20), bool: randomBool()};
                });

                //function _.random Returns the random number between 0 and 99
                var expectedKey = _.keys(obj1)[_.random(99)];

                //function _.random Returns the random number between 0 and 10
                obj1[expectedKey] = {number: 21 + _.random(10)};

                var expected = _.findKey(obj1, params[1]);
                expect(_.findKey.apply(_, datasets.findKey3(obj1))).to.eql(expected);
            });
        });

        describe('findKey4', function () {
            var params;
            before(function(){
                params = datasets.findKey4();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('string');
            });
            it('should return key of matched element', function(){
                var obj1 = {},
                //function _.random Returns the random number between 0 and 20
                    random = _.random(20);

                var randomBool = function(){
                    //function _.random Returns 0 or 1
                    return _.random() < 0.5;
                };

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){
                    obj1['key' + index] = {number: random, square: random * random, cube: randomBool()};
                });

                expect(_.findKey.apply(_, datasets.findKey4(obj1))).to.eql(_.findKey(obj1, params[1]));
            });

        });
    });


    describe('findLastKey', function () {
        describe('findLastKey1', function () {
            var params;
            before(function(){
                params = datasets.findLastKey1();
            });
            it('should check types', function(){
                var element2 = params[1];
                expect(element2 instanceof Function).to.eql(true);
            });
            it('should return key of last element matching given criteria', function(){
                var randomBool = function(){
                    //function _.random Returns 0 or 1
                    return _.random() < 0.5;
                };

                var orders  = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){
                    orders['order' + index] = {pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey1(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });

        describe('findLastKey2', function () {
            var params;
            before(function(){
                params = datasets.findLastKey2();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('object');
            });
            it('should return new object filtred thru given object', function(){
                var randomBool = function(){
                    //function _.random Returns 0 or 1
                    return _.random() < 0.5;
                };

                var orders  = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){
                    orders['order' + index] = {pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey2(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });

        describe('findLastKey3', function () {
            var params;
            before(function(){
                params = datasets.findLastKey3();
            });
            it('should check types', function(){
                var elem2 = params[1];

                expect(elem2 instanceof Array).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should return object filtred thru given array', function(){
                var randomBool = function(){
                    //function _.random Returns 0 or 1
                    return _.random() < 0.5;
                };

                var orders  = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){
                    orders['order' + index] = {number: _.random(1,100), pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey3(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });

        describe('findLastKey4', function () {
            var params;
            before(function(){
                params = datasets.findLastKey4();
            });
            it('should check types', function(){
                var elem2 = params[1];

                expect(typeof elem2).to.eql('string');
                expect(params).to.have.length(2);
            });
            it('should return object filtred thru given array', function(){
                var randomBool = function(){
                    //function _.random Returns 0 or 1
                    return _.random() < 0.5;
                };

                var orders  = {};
                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){

                    //function _.random Returns the random number between 1 and 100
                    orders['order' + index] = {number: _.random(1,100), pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });
                expect(_.findLastKey.apply(_, datasets.findLastKey4(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });
    });

    describe('forIn', function () {
        var params,
            elem1,
            elem2,
            spy,
            test;
        before(function(){
            params = datasets.forIn();
            spy = sinon.spy(params[1]);
            elem1 = params[0];
            elem2 = params[1];
            params[1] = spy;
            test = params[1];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Function).to.eql(true);
        });
        it('should check own properties object', function(){
            expect(elem1).to.have.ownProperty('arms', 2);
            expect(elem1).to.have.ownProperty('legs', 2);
        });
        it('should check prototype properties object', function(){
            expect(elem1).to.have.property('head', 1);
            expect(elem1).not.to.have.ownProperty('head', 1);
        });
        it('should check filter function', function(){
            var obj = {
                'a': 2,
                'b': 4
            };

            test(obj.a, Object.keys(obj)[0], obj);
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.returned(4);
            test(obj.b, Object.keys(obj)[1], obj);
            expect(spy).to.have.been.callCount(2);
            expect(spy).to.have.been.returned(16);
        });
        it('should check properties of returned obj', function(){
            var forInResults = _.forIn.apply(_, params);
            expect(forInResults).to.have.property('arms', 4);
            expect(forInResults).to.have.property('legs', 4);
            expect(forInResults).to.have.property('head', 1);
        });
    });

    describe('forInRight', function () {
        var params,
            elem1,
            elem2,
            spy,
            test;
        before(function(){
            params = datasets.forInRight();
            spy = sinon.spy(params[1]);
            elem1 = params[0];
            elem2 = params[1];
            params[1] = spy;
            test = params[1];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Function).to.eql(true);
        });
        it('should check own properties object', function(){
            expect(elem1).to.have.ownProperty('arms');
            expect(elem1).to.have.ownProperty('legs');
        });
        it('should check prototype properties object', function(){
            expect(elem1).to.have.property('head', 1);
            expect(elem1).not.to.have.ownProperty('head', 1);
        });
        it('should check filter function', function(){
            var obj = {
                'a': 2,
                'b': 4
            };
            test(obj.a, Object.keys(obj)[0], obj);
            expect(spy).to.have.been.callCount(1);
            expect(spy).to.have.been.returned(4);
            test(obj.b, Object.keys(obj)[1], obj);
            expect(spy).to.have.been.callCount(2);
            expect(spy).to.have.been.returned(8);
        });
        it('should check properties of returned object', function(){
            var forInResults = _.forIn.apply(_, params);
            expect(forInResults).to.have.property('arms', 4);
            expect(forInResults).to.have.property('legs', 4);
            expect(forInResults).to.have.property('head', 2);
        });
    });

    describe('forOwn', function () {
        var params,
            elem1,
            elem2;
        before(function(){
            params = datasets.forOwn();
            elem1 = params[0];
            elem2 = params[1];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Function).to.eql(true);
        });
        it('should check properties object', function(){
            expect(elem1).to.have.ownProperty('r', 7);
            expect(elem1).to.have.ownProperty('d', 14);
            expect(elem1).to.have.property('l', 4.4);
            expect(elem1).not.to.have.ownProperty('l', 4.4);
        });
        it('should return modified own properties ', function(){
            var forOwn = _.forOwn.apply(_, params);
            expect(forOwn).to.have.ownProperty('r', 8);
            expect(forOwn).to.have.ownProperty('d', 14);
            expect(forOwn).to.have.property('l', 4.4);
        });
    });

    describe('forOwnRight', function () {
        var params,
            elem1,
            elem2;
        before(function(){
            params = datasets.forOwnRight();
            elem1 = params[0];
            elem2 = params[1];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Function).to.eql(true);
        });
        it('should check properties object', function(){
            expect(elem1).to.have.ownProperty('r', 7);
            expect(elem1).to.have.ownProperty('d', 14);
            expect(elem1).to.have.property('l', 4.4);
            expect(elem1).not.to.have.ownProperty('l', 4.4);
        });
        it('should return modified own properties ', function(){
            var forOwn = _.forOwnRight.apply(_, params);
            expect(forOwn).to.have.ownProperty('r', 8);
            expect(forOwn).to.have.ownProperty('d', 14);
            expect(forOwn).to.have.property('l', 4.4);
        });
    });
    
    describe('get', function () {
            var month,
                day,
                randNameMonth,
                randNameDay,
                randDay,
                obj;
            beforeEach(function(){
                month = ['January', 'February', 'March', 'Aprlil', 'May'];
                day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday'];

                randNameMonth = function(){
                    //function _.random Returns the random number between 0 and 4
                    return month[_.random(0, 4)];
                };

                randNameDay = function(){
                    //function _.random Returns the random number between 0 and 6
                    return day[_.random(0, 6)];
                };

                randDay = function(){
                    //function _.random Returns the random number between 1 and 31
                    return _.random(1,31);
                };

                obj = {
                    month: randNameMonth(),
                    nameDay: randNameDay(),
                    day: randDay(),
                    exercises: {tasks: [{firstTask: 'write a code'},{secondTask: 'learn lodash'}, {thirdTask: 'be cool'}]}
                };
        });
        describe('get1', function () {
            var params;
            before(function(){
                params = datasets.get1();
            });
            it('should check types', function(){
                expect(params).to.have.length(2);
                var elem = params[1];
                expect(typeof elem).to.eql('string');
            });
            it('should check filter value', function(){
                expect(params[1]).to.have.length(28);
            });
            it('should return the resolved value from second argument', function(){
                expect(_.get.apply(_, datasets.get1(obj))).to.eql('be cool');
            });
        });

        describe('get2', function () {
            var params;
            before(function(){
                params = datasets.get2();
            });
            it('should check types', function(){
                var elem = params[1];

                expect(elem instanceof Array).to.eql(true);
                expect(elem).to.have.length(4);
            });
            it('should return the resolved value from object', function(){
                expect(_.get.apply(_, datasets.get2(obj))).to.eql('be cool');
            });
        });

        describe('get3', function () {
            var params;
            before(function(){
                params = datasets.get3();
            });
            it('should check types', function(){
                var elem2 = params[1],
                    elem3 = params[2];

                expect(typeof elem2).to.eql('string');
                expect(typeof elem3).to.eql('string');
            });
            it('should return the resolved value from object', function(){
                expect(_.get.apply(_, datasets.get3(obj))).to.eql('default value');
            });
        });
    });

    describe('has', function () {
        describe('has1', function () {
            var params,
                elem1,
                elem2;
            before(function(){
                params = datasets.has1();
            });
            it('should check types', function(){
                elem1 = params[0];
                elem2 = params[1];

                expect(elem1 instanceof Object).to.eql(true);
                expect(typeof elem2).to.eql('string');
            });
            it('should check object properties', function(){
                expect(elem1).to.have.property('bike');
                expect(elem1).to.have.deep.property('bike.wheels', 2);
                expect(elem1).to.have.deep.property('bike.saddle', 1);
            });
            it('should check filter string', function(){
                expect(elem2).to.have.length(11);
            });
            it('should check returned value', function(){
                expect(_.has.apply(_, params)).to.eql(true);
            });
        });

        describe('has2', function () {
            var params,
                elem1,
                elem2;
            before(function(){
                params = datasets.has2();
                elem1 = params[0];
                elem2 = params[1];
            });
            it('should check types', function(){1
                expect(elem1 instanceof Object).to.eql(true);
                expect(elem2 instanceof Array).to.eql(true);
            });
            it('should check object properties', function(){
                expect(elem1).to.have.property('bike');
                expect(elem1).to.have.deep.property('bike.wheels', 2);
                expect(elem1).to.have.deep.property('bike.saddle', 1);
            });
            it('should check filter string', function(){
                expect(elem2).to.have.length(2);
            });
            it('should check returned value', function(){
                expect(_.has.apply(_, params)).to.eql(true);
            });
        });
    });

    describe('hasIn', function () {
        describe('hasIn1', function () {
            var params,
                elem1,
                elem2;
            before(function(){
                params = datasets.hasIn1();
                elem1 = params[0];
                elem2 = params[1];
            });
            it('should check types', function(){
                expect(elem1 instanceof Object).to.eql(true);
                expect(typeof elem2).to.eql('string');
            });
            it('should check object properties', function(){
                expect(elem1).to.have.property('bike');
                expect(elem1).to.have.deep.property('bike.wheels', 2);
                expect(elem1).to.have.deep.property('bike.saddle', 1);
            });
            it('should check filter string', function(){
                expect(elem2).to.have.length(11);
            });
            it('should check returned value', function(){
                expect(_.hasIn.apply(_, params)).to.eql(true);
            });
        });

        describe('hasIn2', function () {
            var params,
                elem1,
                elem2;
            before(function(){
                params = datasets.hasIn2();
                elem1 = params[0];
                elem2 = params[1];
            });
            it('should check types', function(){
                expect(elem1 instanceof Object).to.eql(true);
                expect(elem2 instanceof Array).to.eql(true);
            });
            it('should check object properties', function(){
                expect(elem1).to.have.property('bike');
                expect(elem1).to.have.deep.property('bike.wheels', 2);
                expect(elem1).to.have.deep.property('bike.saddle', 1);
            });
            it('should check filter string', function(){
                expect(elem2).to.have.length(2);
            });
            it('should check returned value', function(){
                expect(_.hasIn.apply(_, params)).to.eql(true);
            });
        });
    });
    
    describe('invert', function () {

        var params;
        before(function(){
            params = datasets.invert();
        });
        it('should returns inverted object', function(){
            var obj1 = {};

            //function _.times Returns the array. In this case 100 results.
            _.times(100, function(index){

                //function _.random Returns the random number between 0 and 20
                obj1['key' + index] = _.random(20);

            });

            var expected = _.invert(obj1);
            expect(_.invert.apply(_, datasets.invert(obj1))).to.eql(expected);
        });
    });

    describe('invertBy', function () {
        describe('invertBy1', function () {
            var params;
            before(function(){
                params = datasets.invertBy1();
            });
            it('should return inverted object', function(){

                var obj1 = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){
                    var indexInside = 0,
                        counter = 0;
                    //function _.random Returns the random number between 0 and 20
                    obj1['key' + indexInside] = _.random(20);

                    if(counter === 33 || counter === 66){
                        indexInside++;
                    }
                    counter++;
                });

                var expected = _.invertBy(obj1);
                expect(_.invertBy.apply(_, datasets.invertBy1(obj1))).to.eql(expected);

            });
        });
        describe('invertBy2', function () {
            var params;
            before(function(){
                params = datasets.invertBy2();
            });
            it('should return inverted object', function(){

                var obj1 = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index){
                    var indexInside = 0,
                        counter = 0;
                    //function _.random Returns the random number between 0 and 20
                    obj1['key' + indexInside] = _.random(20);

                    if(counter%10 === 0){
                        indexInside++;
                    }
                    counter++;
                });

                var expected = _.invertBy(obj1, params[1]);
                expect(_.invertBy.apply(_, datasets.invertBy2(obj1))).to.eql(expected);

            });
        });
    });

    describe('invoke', function () {
        var obj;
        before(function(){
            //function _.range makes array from 1 to 50 with step equal -3
            obj = {key: [{number: {random: _.range(50, 1, -3)}} ]};
        });
        describe('invoke1', function () {
            var params,
                elem2,
                elem3,
                spy;
            beforeEach(function(){
                params = datasets.invoke1();
                elem2 = params[1];
                elem3 = params[2];
                spy = sinon.spy();
            });
            it('should check types', function(){
                expect(typeof elem2).to.eql('string');
                expect(typeof elem3).to.eql('number');
                expect(elem3).to.equal(99);
                expect(elem2).to.have.length(28);
            });
            it('should check invoke function', function(){
                var regex = /\w+$/g,
                    search = elem2.match(regex),
                    searchFun = search[0];
                expect(searchFun).to.eql('unshift');
            });
            it('should return invoked object', function(){
                expect(_.invoke.apply(_, datasets.invoke1(obj))).to.eql(18);
                expect(obj.key[0].number.random[0]).to.equal(99);
            });
        });

        describe('invoke2', function () {
            var params,
                elem2;
            before(function(){
                params = datasets.invoke2();
            });
            it('should check types', function(){
                elem2 = params[1];
                expect(typeof elem2).to.eql('string');
                expect(elem2).to.have.length(24);
            });
            it('should check invoke function', function(){
                var regex = /\w+$/g,
                    search = elem2.match(regex),
                    searchFun = search[0];
                expect(searchFun).to.eql('pop');
            });
            it('should return invoked object', function(){
                expect(_.invoke.apply(_, datasets.invoke2(obj))).to.eql(2);
                expect(obj.key[0].number.random[(obj.key[0].number.random.length) - 1]).to.equal(5);
            });
        });
    });

    describe('keys', function () {
        var params,
            elem1;
        before(function(){
            params = datasets.keys();
            elem1 = params[0];
        });
        it('should check type', function(){
            expect(elem1 instanceof Object).to.eql(true);
        });
        it('should object have own properties', function(){
            expect(elem1).to.have.ownProperty('teacher');
            expect(elem1.teacher).to.eql('Mr. Tom');
            expect(elem1).to.have.ownProperty('students');
            expect(elem1.students).to.equal(27);
            expect(elem1).to.have.ownProperty('girls');
            expect(elem1.girls).to.equal(15);
            expect(elem1).to.have.ownProperty('boys');
            expect(elem1.boys).to.equal(12);
        });
        it('should object have prototype properties', function(){
            expect(elem1).not.to.have.ownProperty('animals');
            expect(elem1).to.have.property('animals');
            expect(elem1.animals).to.equal(1);
        });
        it('should return array of property names', function(){
            expect(_.keys.apply(_, params)).to.eql(['teacher', 'students', 'girls', 'boys']);
        });
    });

    describe('keysIn', function () {
        var params,
            elem1;
        before(function(){
            params = datasets.keysIn();
            elem1 = params[0];
        });
        it('should check type', function(){
            expect(elem1 instanceof Object).to.eql(true);
        });
        it('should object have own properties', function(){
            expect(elem1).to.have.ownProperty('arms');
            expect(elem1.arms).to.equal(4);
            expect(elem1).to.have.ownProperty('legs');
            expect(elem1.legs).to.equal(8);
            expect(elem1).to.have.ownProperty('heads');
            expect(elem1.heads).to.equal(2);
            expect(elem1).to.have.property('limbs');
            expect(elem1).not.to.have.ownProperty('limbs');
            expect(elem1.limbs()).to.eql(12);
            expect(elem1).to.have.property('tails');
            expect(elem1).not.to.have.ownProperty('tails');
            expect(elem1.tails).to.equal(1);
        });
        it('should return array of object\'s property names', function(){
            expect(_.keysIn.apply(_, datasets.keysIn(params))).to.eql(['arms', 'legs', 'heads', 'limbs', 'tails']);
        });
    });

    describe('mapKeys', function () {

        describe('mapKeys2', function () {
            var params;
            before(function(){
                params = datasets.mapKeys2();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(elem2 instanceof Function).to.eql(true);
            });
            it('should check returned object', function(){
                var obj1 = {};

                //function _.times Returns the array. In this case 100 results.
                _.times(100, function(index) {

                    //function _.random Returns the random number between 0 and 20
                    obj1['person: ' + index] = _.random(20);

                });

                var newObject = {};
                newObject =  _.assign(newObject, _.mapKeys(obj1, params[1]));
                expect(_.mapKeys.apply(_, datasets.mapKeys2(obj1))).to.eql(newObject);
            });
        });
    });

    describe('mapValues', function () {
        var obj;
        beforeEach(function(){
            obj = {
                'car1': { 'name': 'Ferrari', 'vmax': '250 km/h'},
                'car2': { 'name': 'Lamborghini', 'vmax': '350 km/h'},
                'car3': { 'name': 'Bugatti', 'vmax': '420 km/h'}
            };
        });
        describe('mapValues1', function () {
            var params;
            before(function(){
                params = datasets.mapValues1();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(elem2 instanceof Function).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should check returned object', function(){
                var mappedValue = _.mapValues.apply(_, datasets.mapValues1(obj));
                expect(mappedValue).to.have.property('car1', '250 km/h');
                expect(mappedValue).to.have.property('car2', '350 km/h');
                expect(mappedValue).to.have.property('car3', '420 km/h');
            });
        });

        describe('mapValues2', function () {
            var params;
            before(function(){
                params = datasets.mapValues2();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('string');
                expect(params).to.have.length(2);
            });
            it('should check filter string', function(){
                expect(params[1]).to.have.length(4);
            });
            it('should check returned object', function(){
                expect(_.mapValues.apply(_, datasets.mapValues2(obj))).to.have.property('car1', 'Ferrari');
                expect(_.mapValues.apply(_, datasets.mapValues2(obj))).to.have.property('car2', 'Lamborghini');
                expect(_.mapValues.apply(_, datasets.mapValues2(obj))).to.have.property('car3', 'Bugatti');
            });
        });
    });

    describe('merge', function () {
        var params,
            elem1,
            elem2;
        before(function(){
            params = datasets.merge();
            elem1 = params[0];
            elem2 = params[1];
        });
        it('should check types of arguments', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Object).to.eql(true);
            expect(params).to.have.length(2);
        });
        it('should first object has right properties', function(){
            expect(elem1).to.have.property('data');
            expect(elem1).to.have.deep.property('data[0].owner', 'Adam');
            expect(elem1).to.have.deep.property('data[1].owner', 'Tom');
            expect(elem1).to.have.deep.property('data[2].owner', 'John');
        });
        it('should second object has right properties', function(){
            expect(elem2).to.have.property('data');
            expect(elem2).to.have.deep.property('data[0].cats', 3);
            expect(elem2).to.have.deep.property('data[1].dogs', 5);
            expect(elem2).to.have.deep.property('data[2].ostrich', 1);
        });
        it('should return new object fold from two objects', function(){
            var mergeResult = _.merge.apply(_, params);
            expect(mergeResult).to.have.property('data');
            expect(mergeResult).to.have.deep.property('data[0].owner', 'Adam');
            expect(mergeResult).to.have.deep.property('data[0].cats', 3);
            expect(mergeResult).to.have.deep.property('data[1].owner', 'Tom');
            expect(mergeResult).to.have.deep.property('data[1].dogs', 5);
            expect(mergeResult).to.have.deep.property('data[2].owner', 'John');
            expect(mergeResult).to.have.deep.property('data[2].ostrich', 1);
        });
    });
    
    describe('mergeWith', function () {
        var params,
            elem1,
            elem2,
            elem3;
        before(function(){
            params = datasets.mergeWith();
            elem1 = params[0];
            elem2 = params[1];
            elem3 = params[2];
        });
        it('should check types', function(){
            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Object).to.eql(true);
            expect(elem3 instanceof Function).to.eql(true);
        });
        it('should check properties first object', function(){
            expect(elem1).to.have.property('website');
            expect(elem1).to.have.deep.property('website[0]', 'blog');
            expect(elem1).to.have.property('technique');
            expect(elem1).to.have.deep.property('technique[0]', 'HTML5');
        });
        it('should check properties second object', function(){
            expect(elem2).to.have.property('website');
            expect(elem2).to.have.deep.property('website[0]', 'shop');
            expect(elem2).to.have.property('technique');
            expect(elem2).to.have.deep.property('technique[0]', 'xHTML');
        });
        it('should return object with new properties', function(){
            var mergeResult = _.mergeWith.apply(_, params);
            expect(mergeResult).to.have.property('website');
            expect(mergeResult).to.have.deep.property('website[0]', 'blog');
            expect(mergeResult).to.have.deep.property('website[1]', 'shop');
            expect(mergeResult).to.have.property('technique');
            expect(mergeResult).to.have.deep.property('technique[0]', 'HTML5');
            expect(mergeResult).to.have.deep.property('technique[1]', 'xHTML');
        });
    });

    describe('omit', function () {
        describe('omit1', function () {
            var params;
            before(function(){
                params = datasets.omit1();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('string');
                expect(params).to.have.length(2);
            });
            it('should return ommited object', function(){
                var obj = {};

                //function _.times Returns the array. In this case 50 results.
                _.times(50, function(index){

                    //function _.random Returns the random number between 0 and 20
                    obj['number' + index] = _.random(20);

                });
                expect(_.omit.apply(_, datasets.omit1(obj))).to.eql(_.omit(obj, params[1]));
            });
        });

        describe('omit2', function () {
            var params;
            before(function(){
                params = datasets.omit2();
            });
            it('should check types', function(){
                var elem = params[1];
                expect(elem instanceof Array).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should return ommited object', function(){
                var obj = {};

                //function _.times Returns the array. In this case 50 results.
                _.times(50, function(index){
                    //function _.random Returns the random number between 0 and 20
                    obj['number' + index] = _.random(20);

                });

                var ommitResult = _.omit(obj, params[1]);
                expect(_.omit.apply(_, datasets.omit2(obj))).to.eql(ommitResult);
            });
        });
    });

    describe('omitBy', function () {
        var params;
        before(function(){
            params = datasets.omitBy();
        });
        it('should check types', function(){
            expect(params).to.have.length(2);
        });
        it('should return object with element where ', function(){
            var tallestBuildings = {'Burj Khalifa': '829', 'Tokyo Skytree': 634, 'Abraj Al Bait Towers': 601};
            var filter = _.isNumber;

            expect(_.omitBy.apply(_, datasets.omitBy(tallestBuildings, filter))).to.eql({'Burj Khalifa': '829'});
        });
    });

    describe('result', function () {
        var month,
                day,
                randNameMonth,
                randNameDay,
                randDay,
                obj;
        beforeEach(function()
        {
            month = ['January', 'February', 'March', 'Aprlil', 'May'];
            day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday'];

            randNameMonth = function ()
            {
                //function _.random Returns the random number between 0 and 4
                return month[_.random(0, 4)];
            };

            randNameDay = function ()
            {
                //function _.random Returns the random number between 0 and 6
                return day[_.random(0, 6)];
            };

            randDay = function ()
            {
                //function _.random Returns the random number between 1 and 31
                return _.random(1, 31);
            };
            obj = {
                month: randNameMonth(),
                nameDay: randNameDay(),
                day: randDay(),
                exercises: {tasks: [{firstTask: 'write a code'}, {secondTask: 'learn lodash'}, {thirdTask: 'be cool'}]}
            };
        });
        describe('result1', function () {
            var params;
            before(function(){
                params = datasets.result1();
            });
            it('should check types', function(){
                var elem = params[1];

                expect(params).to.have.length(2);
                expect(typeof elem).to.eql('string');
            });
            it('should check filter value', function(){
                expect(params[1]).to.have.length(28);
            });
            it('should return the resolved value from second argument', function(){
                expect(_.result.apply(_, datasets.result1(obj))).to.eql('be cool');
            });
        });

        describe('result2', function () {
            var params;
            before(function(){
                params = datasets.result2();
            });
            it('should check types', function(){
                var elem = params[1];

                expect(elem instanceof Array).to.eql(true);
                expect(elem).to.have.length(4);
            });
            it('should return the resolved value from object', function(){
                expect(_.result.apply(_, datasets.result2(obj))).to.eql('be cool');
            });
        });

        describe('result3', function () {
            var params;
            before(function(){
                params = datasets.result3();
            });

            it('should check types', function(){
                var elem2 = params[1],
                    elem3 = params[2];

                expect(typeof elem2).to.eql('string');
                expect(typeof elem3).to.eql('string');
            });
            it('should return the resolved value from object', function(){
                expect(_.result.apply(_, datasets.result3(obj))).to.eql('default value');
            });
        });
        describe('result4', function () {
            var params;
            beforeEach(function(){
                params = datasets.result4();
            });
            it('should check types', function(){
                var elem2 = params[1],
                    elem3 = params[2];

                expect(typeof elem2).to.eql('string');
                expect(elem3 instanceof Function).to.eql(true);
            });
            it('should return the resolved value from object', function(){
                expect(_.result.apply(_, datasets.result4(obj))).to.eql('default value');
            });
        });
    });
});
