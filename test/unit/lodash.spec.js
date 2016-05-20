'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function()
{

    describe('constant', function()
    {
        var params = datasets.constant();
        it('should check if first parameter is an object',function()
        {
            expect(params[0]).to.be.an('object');
        });
        it('should check objects values',function()
        {
            expect(params[0]).to.have.property('fred');
            expect(params[0]).to.have.property('pebbles');
            expect(params[0]).to.have.deep.property('john.age', 36);
        });
        it('should check if function returns an object', function(){
             var getter = _.constant(params[0]);
             expect(getter()).to.be.an('object');
        });
        it('should create a function that returns value', function(){
                expect(_.constant.apply(_, params)).to.be.a('function');
        });
    });

    describe('conforms', function()
    {
        var params = datasets.conforms();
        var fun = _.conforms({ 'number': _.partial(_.gt, _, 38) });

        it('should check if first parameter is an object',function()
        {
           expect(params[0]).to.be.an('object');
        });
        it('should check objects values',function()
        {
           expect(params[0]).to.have.property('day');
           expect(params[0]).to.have.property('number',1);
        });
        it('should check if it returns a function', function(){
            expect(fun).to.be.a('function');
        });
        it('Creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false.', function()
        {
            expect(fun()).to.be.false;
        });
    });

    describe('flow', function ()
    {
        var params = datasets.flow();
        it('should check if first parameter is a function',function()
        {
           expect(params[0]).to.be.a('function');
        });
        it('should create a function that returns value.', function()
        {
            expect(_.flow.apply(_, params)).to.be.a('function');
        });
        it('should create a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.', function (){
            var addDivide = _.flow(_.divide, params[0]);
            expect(addDivide(1, 2)).to.equal(0.125);
        });
    });

    describe('flowRight', function()
    {
        var params = datasets.flowRight();
        it('should check if first parameter is a function',function()
        {
           expect(params[0]).to.be.a('function');
        });
        it('should check if function return proper value', function(){
           var addTriple = _.flowRight(params[0],_.divide);
           expect(addTriple(1, 2)).to.equal(0.125);
        });
        it('should create a function that invokes the given functions from right to left and returns value.', function ()
        {
           expect(_.flowRight.apply(_, params)).to.be.a('function');
        });
    });
    describe('identity', function()
    {
        var params = datasets.identity();
        it('should check if first parameter is an object')
        {
          expect(params[0]).to.be.an('object');
        }
        it('should check objects values', function()
        {
          expect(params[0]).to.have.property('first');
          expect(params[0]).to.have.property('second');
          expect(params[0]).to.have.deep.property('third.set', true);
        });
        it('should return the first argument given to it.', function()
        {
          expect(_.identity.apply(_, params)).to.be.an('object');
        });
    });
    describe('matches', function()
    {
        var params = datasets.matches();

        it('should check number of parameters', function()
        {
            expect(params.length).to.equal(1);
        });
        it('should check parameter type', function()
        {
            expect(params[0]).to.be.a('object');
        });
        it('should check object keys', function()
        {
            expect(params[0]).to.have.all.keys('number', 'pass');
        });
        it('Should create a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false. ', function(){

            var matcher =_.matches.apply(_, params);
            expect( matcher({'day': 'Monday', 'number': 1, 'pass': true})).to.equal(true);
            expect( matcher({'day': 'Tuesday',   'number': 2, 'pass': false})).to.equal(false);
        });
    });

    describe('matchesProperty', function()
    {
        var params = datasets.matchesProperty();

        it('should check number of parameters', function()
        {
            expect(params.length).to.equal(2);
        });
        it('should check if parameters are strings', function()
        {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
        });
        it('should check parameters length', function()
        {
            expect(params[0].length).to.equal(4);
            expect(params[1].length).to.equal(6);
        });
        it('Should  function that performs a partial deep comparison between the value at path of a given object to src Value, returning true if the object value is equivalent, else false.', function(){
            var propertyMatcher =_.matchesProperty.apply(_, params);
            expect( propertyMatcher({'type':'banana'})).to.equal(true);
            expect( propertyMatcher({'type':'avocado'})).to.equal(false);
        });
    });

    
});

