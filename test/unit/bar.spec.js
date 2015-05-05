'use strict';

var expect = require('chai').expect;
var foo = require('../../app/foo');
var bar = require('../../app/bar');

describe('bar', function ()
{
    describe('greet', function ()
    {
        describe('default bar', function ()
        {
            it('should greet foo', function ()
            {
                expect(bar.greet()).to.equal('Hello foo');
            });
        });
        describe('when bar got renamed', function ()
        {
            beforeEach(function ()
            {
                foo.setName('Fooman');
            });
            it('should greet Fooman', function ()
            {
                expect(bar.greet()).to.equal('Hello Fooman');
            });
        });
    });
});
