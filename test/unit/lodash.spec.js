
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function()
{

    describe('constant', function()
    {
        var params = datasets.constant();
        var fun = _.constant.apply(_, params);

        it('should check if first parameter is an object',function()
        {
            expect(params[0]).to.be.an('object');
        });
        it('should check if function returns proper type', function()
        {
            expect(fun).to.be.a('function');
        });
        it('should check if function returns an object', function()
        {
             expect(fun()).to.be.an('object');
        });
        it('should create a function that returns value', function()
        {
             expect(fun()).to.eql({ John: 20 })
        });
    });

    describe('conforms', function()
    {
        var params = datasets.conforms();
        var fun = _.conforms.apply(_, params);

        it('should check if first parameter is an object',function()
        {
           expect(params[0]).to.be.an('object');
        });
        it('should check if object returns a function', function()
        {
            expect(fun).to.be.a('function');
        });
        it('should create a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false.', function()
        {
          expect(fun({Temperature: 20, Pressure: 1000})).to.be.true;
          expect(fun({Temperature: 3, Pressure: 2000})).to.be.false;
        });
    });

    describe('flow', function ()
    {
        var params = datasets.flow();
        var diff = params[0];
        var square = params[1];
        var fun = _.flow.apply(_, params);

        it('should check if parameters are functions',function()
        {
           expect(diff).to.be.a('function');
           expect(square).to.be.a('function');
        });
        it('should check if function returns proper type', function()
        {
            expect(fun).to.be.a('function');
        });
        it('should create a function that returns the result of invoking the subtract function and then square function with supplied return value from the previous function', function (){
            expect(fun(10,2)).to.eql(64);
            expect(fun(20,16)).to.eql(16);
        });
    });

    describe('flowRight', function()
    {
        var params = datasets.flowRight();
        var square = params[0];
        var add = params[1];
        var fun = _.flowRight.apply(_, params);

        it('should check if parameters are functions',function()
        {
            expect(add).to.be.a('function');
            expect(square).to.be.a('function');
        });
        it('should check if function returns proper type', function(){
            expect(fun).to.be.a('function');
        });
        it('should create a function that invokes square and add function from right to left and returns value.', function ()
        {
            expect(fun(2,2)).to.eql(16);
            expect(fun(10,2)).to.eql(144);
        });
    });
    describe('identity', function()
    {
        var params = datasets.identity();
        var fun = _.identity.apply(_, params);

        it('should check if first parameter is an object')
        {
          expect(params[0]).to.be.an('object');
        }
        it('should check if function returns proper type', function()
        {
          expect(fun).to.be.an('object');
        });
        it('should return the first argument given to it.', function()
        {
          expect(fun).to.be.eql({value: 10});
        });
    });
    describe('matches', function()
    {
        var params = datasets.matches();
        var fun = _.matches.apply(_, params);

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

            expect( fun({'day': 'Monday', 'number': 1, 'pass': true})).to.equal(true);
            expect( fun({'day': 'Tuesday', 'number': 2, 'pass': false})).to.equal(false);
        });
    });

    describe('matchesProperty', function()
    {
        var params = datasets.matchesProperty();
        var fun =_.matchesProperty.apply(_, params);

        it('should check number of parameters', function()
        {
            expect(params.length).to.equal(2);
        });
        it('should check if parameters are strings', function()
        {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
        });
        it('should check if function returns proper type', function(){
            expect(fun).to.be.a('function');
        });
        it('Should perform a partial deep comparison between the value at path of a given object to src Value, returning true if the object value is equivalent, else false.', function(){
            expect( fun({'type':'banana'})).to.equal(true);
            expect( fun({'type':'avocado'})).to.equal(false);
        });
    });

});

