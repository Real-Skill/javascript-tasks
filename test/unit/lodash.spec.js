'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function ()
{
    describe('Lang functions', function ()
    {
        describe('castArray', function ()
        {
            var params, obj;

            before(function ()
            {
                params = datasets.castArray();
                obj = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(obj instanceof Object).to.have.eql(true);
                expect(Object.keys(obj)).to.have.length(4);
                expect(obj).to.have.property('name');
                expect(obj).to.have.property('surname');
                expect(obj).to.have.property('age');
                expect(obj).to.have.property('address');
                expect(obj.name).to.eql('Jack');
                expect(obj.age).to.eql(26);
            });

            it('should returns the cast array', function ()
            {
                expect(_.castArray([obj.name, obj.age])).to.eql(['Jack', 26]);
            });
        });

        describe('clone', function ()
        {
            var params, obj, copy;

            before(function ()
            {
                params = datasets.clone();
                obj = params[0];
                copy = _.clone(obj);
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(obj instanceof Array).to.have.eql(true);
                expect(obj).to.have.length(3);
                expect(copy[2]).to.eql({'name': 'Edwin', 'age': 27});
                _.forEach(obj, function (values)
                {
                    expect(Object.keys(values)).to.have.length(2);
                });
            });

            it('should returns the cloned values', function ()
            {
                expect(obj[2] === copy[2]).to.eql(true);
            });
        });

        describe('cloneDeep', function ()
        {
            var params, obj, deep;

            before(function ()
            {
                params = datasets.cloneDeep();
                obj = params[0];
                deep = _.cloneDeep(obj[1]);
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(obj instanceof Array).to.have.eql(true);
                expect(obj).to.have.length(2);
                expect(deep).to.eql(['Mark', {'age': 35}]);
                _.forEach(obj, function (values)
                {
                    expect(values).to.not.have.length(0);
                });
            });

            it('should return false if params is recursively clones values', function ()
            {
                expect(obj[1] === deep).to.eql(false);
            });
        });

        describe('eq', function ()
        {
            var params, fstObj, sndObj;

            before(function ()
            {
                params = datasets.eq();
                fstObj = params[0];
                sndObj = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(fstObj instanceof Object).to.eql(true);
                expect(sndObj instanceof Object).to.eql(true);
                expect(Object.keys(fstObj).length).to.not.eql(0);
                expect(Object.keys(sndObj).length).to.not.eql(0);
            });

            it('should returns true if the values are equivalent, else false.', function ()
            {
                expect(_.eq.apply(_, [fstObj, fstObj])).to.eql(true);
                expect(_.eq.apply(_, [fstObj, sndObj])).to.eql(false);
            });
        });

        describe('gt', function ()
        {
            var params, fst, snd;

            before(function ()
            {
                params = datasets.gt();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof fst).to.eql('number');
                expect(typeof snd).to.eql('number');
                expect(snd < 0).to.eql(true);
            });

            it('should returns true if value fst is greater than snd value', function ()
            {
                expect(_.gt.apply(_, datasets.gt(params))).to.eql(true);
            });
        });

        describe('gte', function ()
        {
            var params, fst, snd;

            before(function ()
            {
                params = datasets.gte();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof  fst).to.eql('number');
                expect(typeof snd).to.eql('number');
                expect(fst === snd).to.eql(true);
            });

            it('should returns true if value fst is greater than or equal to snd value', function ()
            {
                expect(_.gte.apply(_, datasets.gte(params))).to.eql(true);
            });
        });

        describe('isArguments', function ()
        {
            var params, args;

            before(function ()
            {
                params = datasets.isArguments();
                args = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(args instanceof Object).to.eql(true);
                expect(args).to.have.length(3);
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isArguments.apply(_, datasets.isArguments(params))).to.eql(true);
            });
        });

        describe('isArray', function ()
        {
            var params, args;

            before(function ()
            {
                params = datasets.isArray();
                args = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(params instanceof Array).to.eql(true);
                expect(args).to.have.length(3);

                expect(args[0]).to.have.length(3);
                expect(args[0] instanceof Array).to.eql(true);
                _(args[0]).forEach(function (value)
                {
                    expect(typeof value).to.eql('number');
                });

                expect(args[1]).to.have.length(2);
                expect(args[1] instanceof Array).to.eql(true);
                _(args[1]).forEach(function (value)
                {
                    expect(typeof value).to.eql('string');
                });

                expect(args[2]).to.have.length(2);
                expect(typeof args[2]).to.eql('string');
            });

            it('should return true when param is array', function ()
            {
                expect(_.isArray.apply(_, datasets.isArray(params))).to.eql(true);
            });
        });

        describe('isArrayBuffer', function ()
        {
            var params;
            var name;

            before(function ()
            {
                params = datasets.isArrayBuffer();
                name = params[0].constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(name).to.eql('ArrayBuffer');
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isArrayBuffer.apply(_, datasets.isArrayBuffer(params))).to.eql(true);
            });
        });

        describe('isArrayLike', function ()
        {
            var params, str;

            before(function ()
            {
                params = datasets.isArrayLike();
                str = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof str).to.eql('string');
                expect(str).to.have.length(25);
            });

            it('should return true if value is array-like', function ()
            {
                expect(_.isArrayLike.apply(_, datasets.isArrayLike(params))).to.eql(true);
            });
        });

        describe('isArrayLikeObject', function ()
        {
            var params, obj;

            before(function ()
            {
                params = datasets.isArrayLikeObject();
                obj = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(obj instanceof Array).to.eql(true);
                expect(Object.keys(obj)).to.have.length(3);
            });

            it('should return true if value is an array-like object', function ()
            {
                expect(_.isArrayLikeObject.apply(_, datasets.isArrayLikeObject(params))).to.eql(true);
            });
        });

        describe('isBoolean', function ()
        {
            var params, par1, par2;

            before(function ()
            {
                params = datasets.isBoolean();
                par1 = params[0];
                par2 = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof par1).to.eql('number');
                expect(typeof par2).to.eql('number');
                expect(par1 !== par2).to.eql(true);
            });

            it('should check return value ', function ()
            {
                expect(_.isBoolean.apply(_, ([par1 === par2]))).to.eql(true);
            });
        });

        describe('isBuffer', function ()
        {
            var params, name;

            before(function ()
            {
                params = datasets.isBuffer();
                name = params[0].constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(name).to.eql('Buffer');
            });

            it('should returns true if value is a buffer ', function ()
            {
                expect(_.isBuffer.apply(_, datasets.isBuffer(params))).to.eql(true);
            });
        });

        describe('isDate', function ()
        {
            var params, date;

            before(function ()
            {
                params = datasets.isDate();
                date = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(date instanceof Date).to.eql(true);
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isDate.apply(_, datasets.isDate(params))).to.eql(true);
            });
        });

        describe('isEmpty', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.isEmpty();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);
                expect(array).to.have.length(3);
                expect(typeof array[2]).to.eql('string');
            });

            it('should return false if array is not empty', function ()
            {
                expect(_.isEmpty.apply(_, datasets.isEmpty(params))).to.eql(false);
            });
        });

        describe('isEqual', function ()
        {
            var params, fstObj, sndObj;

            before(function ()
            {
                params = datasets.isEqual();
                fstObj = params[0];
                sndObj = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);

                expect(fstObj instanceof Object).to.have.eql(true);
                expect(sndObj instanceof Object).to.have.eql(true);

                expect(Object.keys(fstObj)).to.have.length(3);
                expect(Object.keys(sndObj)).to.have.length(3);

                expect(fstObj === sndObj).to.eql(false);
            });

            it('should returns true if the values are equivalent', function ()
            {
                expect(_.isEqual.apply(_, datasets.isEqual(params))).to.eql(true);
            });
        });

        describe('isEqualWith', function ()
        {
            var params, array, other, isGreeting, customizer;

            before(function ()
            {
                params = datasets.isEqualWith();
                array = params[0];
                other = params[1];

                isGreeting = function (value)
                {
                    return /^h(?:i|ello)$/.test(value);
                };

                customizer = function (objValue, othValue)
                {
                    if (isGreeting(objValue) && isGreeting(othValue)) {
                        return true;
                    }
                };
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(array instanceof Array).to.eql(true);
                expect(other instanceof Array).to.eql(true);
                expect(array).to.have.not.length(0);
                expect(other).to.have.not.length(0);
            });

            it('should return true if the values are equivalent', function ()
            {
                expect(_.isEqualWith.apply(_, ([array, other, customizer]))).to.eql(true);
            });
        });

        describe('isError', function ()
        {
            var params, name;

            before(function ()
            {
                params = datasets.isError();
                name = params[0].constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(name).to.eql('ReferenceError');
            });

            it('should return true if value is an error object', function ()
            {
                expect(_.isError.apply(_, datasets.isError(params))).to.eql(true);
            });

        });

        describe('isFinite', function ()
        {
            var params, value;

            before(function ()
            {
                params = datasets.isFinite();
                value = params[0];
            });

            it('should verify param', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof value).to.eql('number');
            });

            it('should return false when value is not finite number', function ()
            {
                expect(_.isFinite.apply(_, datasets.isFinite(params))).to.eql(false);
            });
        });

        describe('isFunction', function ()
        {
            var params, value;

            before(function ()
            {
                params = datasets.isFunction();
                value = params[0];
            });

            it('should verify param', function ()
            {
                expect(params).to.have.length(1);
                expect(value instanceof Function).to.eql(true);
            });

            it('should return true when param is function', function ()
            {
                expect(_.isFunction.apply(_, datasets.isFunction(params))).to.eql(true);
            });
        });

        describe('isInteger', function ()
        {
            var params, value;

            before(function ()
            {
                params = datasets.isInteger();
                value = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof value).to.eql('number');
                expect(Number.isInteger(value)).to.not.eql(true);
            });

            it('should returns false if value is not an integer', function ()
            {
                expect(_.isInteger.apply(_, datasets.isInteger(params))).to.eql(false);
            });
        });

        describe('isLength', function ()
        {
            var params, array;

            before(function ()
            {
                array = [1, 2, 3];
                params = datasets.isLength(array);
            });

            it('should verify param', function ()
            {
                expect(params).to.have.length(1);
            });

            it('should return true when value is lenght', function ()
            {
                expect(_.isLength.apply(_, datasets.isLength(params))).to.eql(true);
            });
        });

        describe('isMap', function ()
        {
            var params, name;

            before(function ()
            {
                params = datasets.isMap();
                name = params[0].constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(name).to.eql('Map');
            });

            it('should return true when value is map', function ()
            {
                expect(_.isMap.apply(_, datasets.isMap(params))).to.eql(true);
            });
        });


        describe('isMatch', function ()
        {
            var params, obj, source;

            before(function ()
            {
                params = datasets.isMatch();
                obj = {'name': 'Mark', 'email': 'mark@realskill.com', 'password': 'qwerty123', 'age': 34};
                source = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(source instanceof Object).to.eql(true);
                expect(Object.keys(source)).to.have.length(1);
            });

            it('should return true when object is a match', function ()
            {
                expect(_.isMatch.apply(_, datasets.isMatch(obj))).to.eql(true);
            });
        });

        describe('isMatchWith', function ()
        {
            var params, obj, src, isGreeting, customizer;

            before(function ()
            {
                params = datasets.isMatchWith();
                obj = params[0];
                src = params[1];

                isGreeting = function (value)
                {
                    return /^h(?:i|ello)$/.test(value);
                };

                customizer = function (objValue, srcValue)
                {
                    if (isGreeting(objValue) && isGreeting(srcValue)) {
                        return true;
                    }
                };
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(obj instanceof Object).to.eql(true);
                expect(src instanceof Object).to.eql(true);

                expect(obj).to.have.ownProperty('greeting', 'hello');
                expect(Object.keys(obj)).to.have.length(1);

                expect(src).to.have.ownProperty('greeting', 'hi');
                expect(Object.keys(obj)).to.have.length(1);
            });

            it('should return true if object is a match', function ()
            {
                expect(_.isMatchWith.apply(_, ([obj, src, customizer]))).to.eql(true);
            });
        });

        describe('isNaN', function ()
        {
            var params, value;

            before(function ()
            {
                params = datasets.isNaN();
                value = params[0];

            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(isNaN(value)).to.eql(true);
            });

            it('should return false when value is undefined', function ()
            {
                expect(_.isNaN.apply(_, datasets.isNaN(params))).to.eql(false);
            });
        });

        describe('isNative', function ()
        {
            var params, value;

            before(function ()
            {
                params = datasets.isNative();
                value = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
            });

            it('should return true if value is native function', function ()
            {
                expect(_.isNative.apply(_, datasets.isNative(params))).to.eql(true);
            });
        });

        describe('isNil', function ()
        {
            var params;

            before(function ()
            {
                params = datasets.isNil();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
            });

            it('should return true if value is null or undefined', function ()
            {
                expect(_.isNil.apply(_, datasets.isNil(params))).to.eql(true);
            });
        });

        describe('isNull', function ()
        {
            var params;

            before(function ()
            {
                params = datasets.isNull();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
            });

            it('should return true if value is null', function ()
            {
                expect(_.isNull.apply(_, datasets.isNull(params))).to.eql(true);
            });
        });

        describe('isNumber', function ()
        {
            var params, value;

            before(function ()
            {
                params = datasets.isNumber();
                value = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof value).to.eql('object');
                expect(value.constructor.name).to.eql('Number');
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isNumber.apply(_, datasets.isNumber(params))).to.eql(true);
            });
        });

        describe('isObject', function ()
        {
            var params;

            before(function ()
            {
                params = datasets.isObject();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof params[0]).to.eql('object');
            });

            it('should return true if value is an object', function ()
            {
                expect(_.isObject.apply(_, datasets.isObject(params))).to.eql(true);
            });
        });

        describe('isObjectLike', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.isObjectLike();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);
                expect(typeof array[0]).to.eql('string');
                expect(typeof array[1]).to.eql('number');
            });

            it('should return true if value is object-like', function ()
            {
                expect(_.isObjectLike.apply(_, datasets.isObjectLike(params))).to.eql(true);
            });
        });

        describe('isPlainObject', function ()
        {
            var params, obj;

            before(function ()
            {
                params = datasets.isPlainObject();
                obj = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(obj instanceof Object).to.eql(true);
                expect(Object.keys(obj)).to.have.length(3);
            });

            it('should return true if value is a plain object', function ()
            {
                expect(_.isPlainObject.apply(_, datasets.isPlainObject(params))).to.eql(true);
            });
        });

        describe('isRegExp', function ()
        {
            var params, reg;

            before(function ()
            {
                params = datasets.isRegExp();
                reg = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(reg instanceof RegExp).to.eql(true);
            });

            it('should return true if value is correctly classified ', function ()
            {
                expect(_.isRegExp.apply(_, datasets.isRegExp(params))).to.eql(true);
            });
        });

        describe('isSafeInteger', function ()
        {
            var params, number;

            before(function ()
            {
                params = datasets.isSafeInteger();
                number = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof number).to.eql('number');
            });

            it('should return false if number is not safe integer', function ()
            {
                expect(_.isSafeInteger.apply(_, datasets.isSafeInteger(params))).to.eql(false);
            });
        });

        describe('isSet', function ()
        {
            var params, name;

            before(function ()
            {
                params = datasets.isSet();
                name = params[0].constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(name).to.eql('Set');
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isSet.apply(_, datasets.isSet(params))).to.eql(true);
            });

        });

        describe('isString', function ()
        {
            var params, str;

            before(function ()
            {
                params = datasets.isString();
                str = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof str).to.eql('string');
                expect(str).to.have.length(9);

            });

            it('should return true if elements in array are string', function ()
            {
                expect(_.isString.apply(_, datasets.isString(params))).to.eql(true);
            });
        });

        describe('isSymbol', function ()
        {
            var params, name;

            before(function ()
            {
                params = datasets.isSymbol();
                name = params[0].constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(name).to.eql('Symbol');
            });

            it('should retrun true if value is correctly classified', function ()
            {
                expect(_.isSymbol.apply(_, datasets.isSymbol(params))).to.eql(true);
            });
        });

        describe('isTypedArray', function ()
        {
            var params, typedArray, name;

            before(function ()
            {
                params = datasets.isTypedArray();
                typedArray = params[0];
                name = typedArray.constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typedArray instanceof Uint16Array).to.eql(true);
                expect(name).to.eql('Uint16Array');
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isTypedArray.apply(_, datasets.isTypedArray(params))).to.eql(true);
            });
        });

        describe('isUndefined', function ()
        {
            var params, par;

            before(function ()
            {
                params = datasets.isUndefined();
                par = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof par).to.eql('undefined');
            });

            it('should return true if value is undefined', function ()
            {
                expect(_.isUndefined.apply(_, datasets.isUndefined(params))).to.eql(true);
            });
        });

        describe('isWeakMap', function ()
        {
            var params, map, name;

            before(function ()
            {
                params = datasets.isWeakMap();
                map = params[0];
                name = map.constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(map instanceof Object).to.eql(true);
                expect(name).to.eql('WeakMap');
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isWeakMap.apply(_, datasets.isWeakMap(params))).to.eql(true);
            });
        });

        describe('isWeakSet', function ()
        {
            var params, wSet, name;

            before(function ()
            {
                params = datasets.isWeakSet();
                wSet = params[0];
                name = wSet.constructor.name;
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(wSet instanceof Object).to.eql(true);
                expect(name).to.eql('WeakSet');
            });

            it('should return true if value is correctly classified', function ()
            {
                expect(_.isWeakSet.apply(_, datasets.isWeakSet(params))).to.eql(true);
            });
        });

        describe('lt', function ()
        {
            var params, fst, snd;

            before(function ()
            {
                params = datasets.lt();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof fst).to.eql('number');
                expect(typeof snd).to.eql('number');
                expect(fst < 0).to.eql(true);
                expect(fst <= snd).to.eql(true);
            });

            it('should returns true if fst value is less than snd value', function ()
            {
                expect(_.lt.apply(_, datasets.lt(params))).to.eql(true);
            });
        });

        describe('lte', function ()
        {
            var params, fst, snd;

            before(function ()
            {
                params = datasets.lte();
                fst = params[0];
                snd = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof fst).to.eql('number');
                expect(typeof snd).to.eql('number');
                expect(fst === snd).to.eql(true);
            });

            it('should return true if fst value is less or equal than snd value', function ()
            {
                expect(_.lte.apply(_, datasets.lte(params))).to.eql(true);
            });
        });

        describe('toArray', function ()
        {
            var params, obj;

            before(function ()
            {
                params = datasets.toArray();
                obj = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof obj).to.eql('object');
                expect(Object.keys(obj)).to.have.length(2);
                expect(obj).to.have.ownProperty('name');
                expect(obj).to.have.ownProperty('age');
            });

            it('should return the converted array ', function ()
            {
                expect(_.toArray.apply(_, datasets.toArray(params))).to.eql(['Jack', 26]);
            });
        });

        describe('toInteger', function ()
        {
            var params, str;

            before(function ()
            {
                params = datasets.toInteger();
                str = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof str).to.eql('string');
                expect(parseFloat(str)).to.eql(36.6);
                expect(str).to.have.length(4);
            });

            it('should return the converted integer', function ()
            {
                expect(_.toInteger.apply(_, datasets.toInteger(params))).to.eql(36);
            });
        });

        describe('toLength', function ()
        {
            var params, number;

            before(function ()
            {
                params = datasets.toLength();
                number = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof number).to.eql('number');
                expect(Number.isInteger(number)).to.eql(false);
            });

            it('should return the converted integer', function ()
            {
                expect(_.toLength.apply(_, datasets.toLength(params))).to.eql(3);
            });
        });

        describe('toNumber', function ()
        {
            var params, str;

            before(function ()
            {
                params = datasets.toNumber();
                str = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof str).to.eql('string');
                expect(str).to.have.length(4);
            });

            it('should return the converted integer', function ()
            {
                expect(_.toNumber.apply(_, datasets.toNumber(params))).to.eql(2016);
            });
        });

        describe('toPlainObject', function ()
        {
            var params, obj, fun;

            before(function ()
            {
                params = datasets.toPlainObject();
                obj = params[0];
                fun = params[1];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(2);
                expect(fun instanceof Object).to.eql(true);
                expect(obj instanceof Object).to.eql(true);

                expect(Object.keys(obj)).to.have.length(1);
                expect(obj).to.have.ownProperty('a', 1);
                expect(fun).to.have.ownProperty('b', 2);
                expect(fun).to.have.property('c', 3);
                expect(fun).not.to.have.ownProperty('c', 3);
            });

            it('should return the converted plain object', function ()
            {
                expect(_.toPlainObject.apply(_, ([_.assign(obj, _.toPlainObject(fun))]))).to.eql({a: 1, b: 2, c: 3});
            });
        });

        describe('toSafeInteger', function ()
        {
            var params, number;

            before(function ()
            {
                params = datasets.toSafeInteger();
                number = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(typeof number).to.eql('number');
                expect(number).to.not.eql(9007199254740991);
            });

            it('should return SafeInteger from value', function ()
            {
                expect(_.toSafeInteger.apply(_, datasets.toSafeInteger(params))).to.eql(9007199254740991);
            });
        });

        describe('toString', function ()
        {
            var params, array;

            before(function ()
            {
                params = datasets.toString();
                array = params[0];
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array).to.have.length(3);
                expect(array instanceof Array).to.eql(true);
            });

            it('should return the string', function ()
            {
                expect(_.toString.apply(_, datasets.toString(params))).to.eql('1,12,2015');
            });
        });
    });
});