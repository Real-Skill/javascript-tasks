'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function ()
{
    describe('Lodash seq', function ()
    {
        describe('_', function ()
        {
            var params, array, sqrt, roots, wrapped, subs;

            before(function ()
            {
                params = datasets._();
                array = params[0];
                sqrt = function (n)
                {
                    return Math.sqrt(n);
                };
                wrapped = _._.apply(_, params);
                subs = wrapped.reduce(_.subtract);
                roots = wrapped.map(sqrt);
            });

            it('should verify params and return the new lodash wrapper instance', function ()
            {
                expect(array instanceof Array).to.eql(true);
                expect(array).to.have.length(4);
                expect(subs).to.eql(-8);

                _(wrapped).forEach(function (values)
                {
                    expect(typeof values).to.eql('number');
                    expect(values >= 0).to.eql(true);
                });

                expect(_.isArray(roots)).to.eql(false);
                expect(_.isArray(roots.value())).to.eql(true);
            });
        });

        describe('chain', function ()
        {
            var params, obj, fun, richest, users;

            before(function ()
            {
                users = [
                    {'user': 'Mark', 'gold': 1500000},
                    {'user': 'Freddy', 'gold': 2000000},
                    {'user': 'John', 'gold': 250000}
                ];
                params = datasets.chain(users);
                obj = params[0];

                fun = function (o)
                {
                    return o.user + ' is the richest and has $' + o.gold;
                };
                richest = _
                        .chain.apply(_, params)
                        .sortBy('gold')
                        .map(fun)
                        .reverse()
                        .head()
                        .value();
            });

            it('should verify params', function ()
            {
                expect(obj instanceof Object).to.eql(true);
                expect(Object.keys(obj)).to.have.length(3);
            });

            it('should return the new lodash wrapper instance', function ()
            {
                expect(richest).to.eql('Freddy is the richest and has $2000000');
            });
        });

        describe('tap', function ()
        {
            var params, array, interceptor, value;

            before(function ()
            {
                params = datasets.tap();
                array = params[0];
                interceptor = params[1];
            });

            it('should verify params', function ()
            {
                expect(interceptor instanceof Function).to.eql(true);
                expect(params).to.have.length(2);
                expect(array).to.have.length(4);
                _(array).forEach(function (values)
                {
                    expect(typeof values).to.eql('number');
                });
            });

            it('should return reverse wrapped array', function ()
            {
                value = _(array).tap(interceptor).chain().reverse().value();
                expect(value).to.eql([10, 8, 6, 4, 2]);
            });
        });

        describe('thru', function ()
        {
            var params, str, interceptor, value;

            before(function ()
            {
                params = datasets.thru();
                str = params[0];
                interceptor = params[1];
                value = _(str).chain().lowerCase().thru(interceptor).value();
            });
            it('should match types of passing elements', function ()
            {
                expect(params).to.have.length(2);
                expect(typeof str).to.eql('string');
                expect(interceptor instanceof Function).to.eql(true);
            });
            it('should return reverse wrapped array', function ()
            {
                expect(value).to.eql(['roses are red']);
            });
        });

        describe('prototype', function ()
        {
            var params, array, wrapped;

            before(function ()
            {
                params = datasets._prototype();
                array = params[0];
                wrapped = _(params[0]);
            });

            it('should verify params', function ()
            {
                expect(array instanceof Array).to.eql(true);
                _(array).forEach(function (values)
                {
                    expect(typeof values).to.eql('string');
                });
                expect(array).to.have.length(4);
            });

            it('should returns the wrapper object', function ()
            {
                expect(Array.from(wrapped)).to.eql(['a', 'b', 'c', 'd']);
                expect(wrapped[Symbol.iterator]()).to.eql(wrapped);
            });
        });

        describe('prototype.at', function ()
        {
            var params, object, wrapper, string;

            before(function ()
            {
                params = datasets.prototypeAt();
                string = params[0];
                object = {'Address': [{'person': {'name': 'Bob', 'surname': 'Smith'}}, {'st': {'name': 'Flower st.', 'number': 'C/105'}}, {'city': 'London'}]};
                wrapper = _(object).at(string).value();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(string).to.have.length(5);
                _(string).forEach(function (values)
                {
                    expect(typeof values).to.eql('string');
                });
            });

            it('should return the new lodash wrapper instance', function ()
            {
                expect(wrapper).to.eql(['Bob', 'Smith', 'C/105', 'Flower st.', 'London']);
            });
        });

        describe('prototype.chain', function ()
        {
            var params, obj, wrapper, users;

            before(function ()
            {
                users = [
                    {'name': 'Mark', 'age': 26},
                    {'name': 'Jack', 'age': 32},
                    {'name': 'Kate', 'age': 38, 'gender': 'female'}
                ];
                params = datasets.prototypeChain(users);
                obj = params[0];
                wrapper = _(obj)
                        .chain()
                        .head()
                        .pick('name')
                        .value();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(Object.keys(obj)).to.have.length(3);
                _(obj).forEach(function (values)
                {
                    expect(values).to.have.ownProperty('name');
                    expect(values).to.have.ownProperty('age');
                });

            });

            it('should return the new lodash wrapper instance', function ()
            {
                expect(wrapper).to.eql({name: 'Mark'});
            });
        });

        describe('prototype.commit', function ()
        {
            var params, array, wrapped;

            before(function ()
            {
                params = datasets.prototypeCommit();
                array = params[0];
                wrapped = _(array).push('new commit');
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array).to.have.length(2);
                expect(array instanceof Array).to.eql(true);
                _(array).forEach(function (values)
                {
                    expect(typeof values).to.eql('string');
                });
                expect(array).to.eql(['old commit', 'commit']);
            });

            it('should return the new lodash wrapper instance', function ()
            {
                wrapped = wrapped.commit();
                expect(array).to.have.length(3);
                expect(array).to.eql(['old commit', 'commit', 'new commit']);
            });
        });

        describe('prototype.next', function ()
        {
            var params, array, wrapped;

            before(function ()
            {
                params = datasets.prototypeNext();
                array = params[0];
                wrapped = _(array);
            });

            it('should verify params', function ()
            {
                expect(array instanceof Array).to.eql(true);
                expect(array).to.have.length(3);
            });

            it('should returns the next iterator value', function ()
            {
                expect(wrapped.next()).to.eql({done: false, value: 'Kate'});
                expect(wrapped.next()).to.eql({done: false, value: 'Smith'});
                expect(wrapped.next()).to.eql({done: false, value: 30});
                expect(wrapped.next()).to.eql({done: true, value: undefined});
            });
        });

        describe('prototype.plant', function ()
        {
            var params, array, sqrt, wrapped, other;

            before(function ()
            {
                params = datasets.prototypePlant();
                array = params[0];
                sqrt = function (n)
                {
                    return Math.sqrt(n);
                };
                wrapped = _([1, 4]).map(sqrt);
                other = wrapped.plant(array);
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);
                expect(array).to.have.length(2);
                _(array).forEach(function (values)
                {
                    expect(typeof values).to.eql('number');
                });
            });

            it('should return the new lodash wrapper instance', function ()
            {
                expect(wrapped.value()).to.eql([1, 2]);
                expect(other.value()).to.eql([3, 4]);
            });
        });

        describe('prototype.reverse', function ()
        {
            var params, array, reverse;

            before(function ()
            {
                params = datasets.prototypeReverse();
                array = params[0];
                reverse = _(array).reverse().value();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);
                expect(array).to.have.length(4);
                _(array).forEach(function (value)
                {
                    expect(typeof value).to.eql('number');
                });
            });

            it('should return reverse string', function ()
            {
                expect(reverse).to.eql([4, 7, 3, 5]);
            });
        });

        describe('prototype.value', function ()
        {
            var params, array, wrapped, unwrapped;

            before(function ()
            {
                params = datasets.prototypeValue();
                array = params[0];
                wrapped = _(array);
                unwrapped = wrapped.value();
            });

            it('should verify params', function ()
            {
                expect(params).to.have.length(1);
                expect(array instanceof Array).to.eql(true);
                expect(array).to.have.length(4);

                expect(wrapped instanceof Object).to.eql(true);
                expect(wrapped instanceof Array).to.eql(false);
                expect(unwrapped instanceof Array).to.eql(true);
            });

            it('should return the resolved unwrapped value ', function ()
            {
                expect(unwrapped).to.eql(['Andy', 'Flower', 30, 4600]);
            });
        });
    });
});
