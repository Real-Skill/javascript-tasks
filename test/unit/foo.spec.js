'use strict';

var expect = require('chai').expect;
var foo = require('../../app/foo');
var bar = require('../../app/bar');

describe('foo', function ()
{
    describe('greet', function ()
    {
        describe('default bar', function ()
        {
            it('should greet bar', function ()
            {
                expect(foo.greet()).to.equal('Hello bar');
            });
        });
        describe('when bar got renamed', function ()
        {
            beforeEach(function ()
            {
                bar.setName('Barman');
            });
            it('should greet Barman', function ()
            {
                expect(foo.greet()).to.equal('Hello Barman');
            });
        });
    });
});
