var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function ()
{

    describe('constant', function()
    {
        var params,
            elem1,
            constant;
        before(function()
        {
            params = datasets.constant();
            elem1 = params[0];
            constant = _.constant.apply(_, params);
        });
        it('should verify params',function()
        {
            expect(params[0 instanceof Object]).to.eql(true);
        });
        it('should create a function that returns value', function()
        {
            expect(constant()).to.eql({ John: 20 })
        });
    });

    describe('conforms', function()
    {
        var params,
            elem1,
            conforms;
        before(function()
        {
            params = datasets.conforms();
            elem1 = params[0];
            conforms = _.conforms.apply(_, params);
        });
        it('should verify params',function()
        {
            expect(params[0] instanceof Object).to.eql(true);
        });
        it('should return true or false accordind corresponding property values of a given object ', function()
        {
            expect(conforms({temperature: 20, pressure: 1000})).to.eql(true);
            expect(conforms({temperature: 3, pressure: 2000})).to.eql(false);
        });
    });

    describe('flow', function ()
    {
        var params,
            elem1,
            elem2,
            flow;
        before(function ()
        {
            params = datasets.flow();
            elem1 = params[0];
            elem2 = params[1];
            flow = _.flow.apply(_, params);
        });
        it('should verify params', function ()
        {
            expect(elem1 instanceof Function).to.eql(true);
            expect(elem2 instanceof Function).to.eql(true);
        });
        it('should return added first elem power second ', function ()
        {
            expect(flow(2, 3)).to.eql(16);
        });
    });

    describe('flowRight', function ()
    {
        var params,
            elem1,
            elem2,
            flowRight;
        before(function ()
        {
            params = datasets.flowRight();
            elem1 = params[0];
            elem2 = params[1];
            flowRight = _.flowRight.apply(_, params);
        });

        it('should verify params', function ()
        {
            expect(elem1 instanceof Function).to.eql(true);
            expect(elem2 instanceof Function).to.eql(true);
        });
        it('should return square added first elem to second', function ()
        {
            expect(flowRight(2, 2)).to.eql(16);
            expect(flowRight(10, 2)).to.eql(144);
        });
    });

    describe('matches', function ()
    {
        var params,
            elem1,
            matches;
        before(function ()
        {
            params = datasets.matches();
            elem1 = params[0];
            matches = _.matches.apply(_, params);
        });
        it('should verify params', function ()
        {
            expect(params.length).to.equal(1);
            expect(elem1 instanceof Object).to.eql('object');
        });
        it('should check object keys', function ()
        {
            expect(params[0]).to.have.all.keys('number', 'pass');
        });
        it('should return matches property', function ()
        {
            expect(matches({'day': 'Monday', 'number': 1, 'pass': true})).to.equal(true);
            expect(matches({'day': 'Tuesday', 'number': 2, 'pass': false})).to.equal(false);
        });
    });

    describe('matchesProperty', function ()
    {
        var params,
            elem1,
            elem2,
            matchesProperty;
        before(function()
        {
            params = datasets.matchesProperty();
            elem1 = params[0];
            elem2 = params[1];
            matchesProperty = _.matchesProperty.apply(_, params);
        });

        it('should verify params', function ()
        {
            expect(params.length).to.equal(2);
            expect(typeof params[0]).to.eql('string');
            expect(typeof params[1]).to.eql('string');
        });
        it('should return true or false if property are matches', function ()
        {
            expect(matchesProperty({'type': 'banana'})).to.equal(true);
            expect(matchesProperty({'type': 'avocado'})).to.equal(false);
        });
    });

});
