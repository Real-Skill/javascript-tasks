'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var Guy = require('./Guy');
var chance = require('chance').Chance();

describe('Lodash training', function ()
{
    describe('camelCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.camelCase();
        });
        it('should check if first parameter is a string', function(){
            expect(typeof params[0]).to.eql('string');
        });
        it('should check if first parameter contains required signs', function(){
            expect(params[0]).to.match(/[. _-]/);
        });
        it('should convert string to camel case.',function()
        {
            expect(_.camelCase.apply(_,params)).to.eql('testYourSkills');
        });
    });
    
    describe('capitalize',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.capitalize();
        });
        it('should check if first parameter is a string', function(){
            expect(typeof params[0]).to.eql('string');
        });
        it('should check parameter value',function()
        {
            expect(params[0]).to.equal('CAPITALIZE');
        });
        it('should convert the first character of string to upper case and the remaining to lower case.', function()
        {
            expect(_.capitalize.apply(_, params)).to.eql('Capitalize');
        });
    });
    describe('deburr',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.deburr();
        });
        it('should check if first parameter is a string', function(){
            expect(typeof params[0]).to.be.a('string');
        });
        it('should check if first parameter contain latin-1 supplementary letters', function(){
            expect(params[0]).to.match(/[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸ]/);
        });
        it('should debur string by converting latin-1 supplementary letters to basic latin letters and remove combining diacritical marks.', function()
        {
            expect(_.deburr.apply(_, params)).to.eql(_.deburr('schon resume and cafe'));
        });
    });

    describe('endsWith', function(){
        describe('endsWith1',function()
        {
            var params;
            beforeEach(function()
            {
                params =  datasets.endsWith1();
            });
            it('should check if there are two parameters', function(){
              expect(params.length).to.equal(2);
            });
            it('should check if first parameters are strings', function(){
                expect(typeof params[0]).to.be.a('string');
                expect(typeof params[1]).to.be.a('string');
            });
            it('should check strings lengths', function(){
                expect(params[0].length).to.eql(5);
                expect(params[1].length).to.eql(3);
            });
            it('should check if string ends with the given target string.', function()
            {
                expect(_.endsWith.apply(_, datasets.endsWith1(params))).to.eql(true);
            });
        });

        describe('endsWith2',function()
        {
            var params;
            beforeEach(function()
            {
                params =  datasets.endsWith2();
            });
            it('should check if there are three parameters', function(){
                expect(params.length).to.equal(3);
            });
            it('should check if first parameters types', function(){
                expect(typeof params[0]).to.be.a('string');
                expect(typeof params[1]).to.be.a('string');
                expect(params[2]).to.be.a('number');
            });
            it('should check strings lengths', function(){
                expect(params[0].length).to.eql(8);
                expect(params[1].length).to.eql(3);
            });
            it('should check if string ends with the given target string.', function()
            {
                expect(_.endsWith.apply(_, datasets.endsWith2(params))).to.eql(true);
            });
        });
    });


    describe('escape',function()
    {

        var params;
        beforeEach(function()
        {
            params =  datasets.escape();
        });
        it('should check if first parameter is a string', function(){
            expect(typeof params[0]).to.be.a('string');
        });
        it('should check if first parameter contains required signs', function(){
            expect(params[0]).to.match(/[&<>"'`]/);
        });
        it('should check if length of parameter is correct', function(){
            expect(params[0].length).to.equal(17);
        });
        it('should convert the characters "&", "<", ">"," '+"' "+', and "`" in string to their corresponding HTML entities. ', function()
        {
            expect(_.escape.apply(_, params)).to.eql('&lt;script&gt; R&amp;B &lt;&quot;&gt; ');
        });
    });

    describe('escapeRegExp',function()
    {
        var params
        beforeEach(function()
        {
            params =  datasets.escapeRegExp();
        });
        it('should check if first parameter is a string', function(){
            expect(typeof params[0]).to.be.a('string');
        });
        it('should check if first parameter contains required signs', function(){
            expect(params[0]).to.match(/[^$\.*+?()[]|]{"}"/);
        });
        it('should check if length of parameter is correct', function(){
            expect(params[0].length).to.equal(54);
        });
        it('Should escape the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.', function()
        {
            expect(_.escapeRegExp.apply(_, datasets.escapeRegExp(params))).to.eql('\\[url\\] /Reg\\(exp\\)\\{2\\}erience/ \\(https://google\\.com/\\) \\[url\\]');
        });
    });

    describe('kebabCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.kebabCase();
        });
        it('should check if first parameter is a string', function(){
            expect(typeof params[0]).to.be.a('string');
        });
        it('should check if length of parameter is correct', function(){
            expect(params[0].length).to.equal(20);
        });
        it('Should convert string to kebab case.', function()
        {
            expect(_.kebabCase.apply(_, params)).to.eql(_.kebabCase('keep-calm-and-eat-kebabs'));
        });
    });

    describe('lowerCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.lowerCase();
        });
        it('Should check if parameter is a string', function()
        {
            expect(params[0]).to.be.a('string');
        });
        it('should check if length of parameter is correct', function(){
            expect(params[0].length).to.equal(31);
        });
        it('Should convert string, as space separated words, to lower case.', function()
        {
            expect(_.lowerCase.apply(_, datasets.lowerCase(params))).to.eql('something random lorem ipsum');
        });
    });


    describe('pad',function()
    {
        describe('pad1',function()
        {
            var params;
            beforeEach(function()
            {
                params =  datasets.pad1();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(2);
            });
            it('should check types of parameters', function(){
                expect(typeof params[0]).to.be.a('string');
                expect(typeof params[1]).to.equal('number');
            });
            it('should check parameter length', function(){
                expect(params[0].length).to.equal(7);
            });
            it('Should pad string on the left and right side if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.', function()
            {
                expect(_.pad.apply(_, params)).to.eql(' padding  ');
            });
        });
        describe('pad2', function () {

            var params;
            beforeEach(function()
            {
                params =  datasets.pad2();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(3);
            });
            it('should check types of parametrs', function(){
                expect(typeof params[0]).to.be.a('string');
                expect(typeof params[1]).to.equal('number');
                expect(typeof params[2]).to.be.a('string');
            });
            it('should check first parameter length', function(){
                expect(params[0].length).to.equal(12);
            });
            it('Should pad string on the left and right side if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.', function()
            {
                expect(_.pad.apply(_, params)).to.eql('-=-otherPadding-=-');
            });
        });

    });

    describe('padEnd',function()
    {
        describe('padEnd1', function () {
            var params;
            beforeEach(function()
            {
                params =  datasets.padEnd1();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(2);
            });
            it('should check parameter types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('number');
            });
            it('should check first parameter length', function(){
                expect(params[0].length).to.equal(6);
            });
            it('Should pad string on the left and right side if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.', function()
            {
                expect(_.padEnd.apply(_,params)).to.eql('fooBar    ');
            });
        });

        describe('padEnd2', function () {
            var params;
            beforeEach(function()
            {
                params =  datasets.padEnd2();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(3);
            });
            it('should check parameter types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('number');
                expect(params[2]).to.be.a('string');
            });
            it('should check first parameter length', function(){
                expect(params[0].length).to.equal(10);
                expect(params[2].length).to.equal(2);
            });
            it('Should pad string on the left and right side if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.', function()
            {
                expect(_.padEnd.apply(_,params)).to.eql('randomWord->->->->');
            });
        });
    });

    describe('padStart',function()
    {
        describe('padStart1', function () {

            var params;
            beforeEach(function()
            {
                params =  datasets.padStart1();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(2);
            });
            it('should check parameter types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('number');
            });
            it('should check first parameter length', function(){
                expect(params[0].length).to.equal(9);
            });
            it('Should pad string on the left side if it’s shorter than length. Padding characters are truncated if they exceed length.', function()
            {
                expect(_.padStart.apply(_,params)).to.eql('     ConvertMe');
            });
        });

        describe('padStart2', function () {

            var params;
            beforeEach(function()
            {
                params =  datasets.padStart2();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(3);
            });
            it('should check parameter types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('number');
                expect(params[2]).to.be.a('string');
            });
            it('should check first parameter length', function(){
                expect(params[0].length).to.equal(12);
            });
            it('Should pad string on the left side if it’s shorter than length. Padding characters are truncated if they exceed length.', function()
            {
                expect(_.padStart.apply(_,params)).to.eql('.:.:.:.ConvertMeToo');
            });
        });

    });

    describe('parseInt',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.parseInt();
        });
        it('should check if parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if parameter contains leading zeros', function(){
            expect(params[0]).to.contain('00');
        });
        it('Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.', function()
        {
            expect(_.parseInt.apply(_, params)).to.eql(21);
        });
    });

    describe('repeat',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.repeat();
        });
        it('should check number of parameters', function(){
            expect(params.length).to.equal(2);
        });
        it('should check types of paramaters', function(){
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('number');
        });
        it('should check first parameter length', function(){
           // expect(params[0].length).to.equal(1);
        });
        it('should repeat the given string n times.', function(){
            expect(_.repeat.apply(_, params)).to.eql('*****');
        });

    });

    describe('replace',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.replace();
        });
        it('should check number of parameters', function(){
            expect(params.length).to.equal(3);
        });
        it('should check types of paramaters', function(){
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(params[2]).to.be.a('string');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(10);
            expect(params[1].length).to.equal(4);
            expect(params[2].length).to.equal(4);
        });
        it('Should replace matches for pattern in string with replacement', function()
        {
            expect(params[0]).to.contain(params[1]);
            expect(_.replace.apply(_, params)).to.eql('Hello Greg');
        });
    });

    describe('snakeCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.snakeCase();
        });
        it('should check if first parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(13);
        });
        it('Should convert string to snake case.', function()
        {
            expect(_.snakeCase.apply(_, params)).to.eql('i_am_python');
        });
    });

    describe('split',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.split();
        });
        it('should check parameters types', function(){
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(params[2]).to.be.a('number');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(14);
        });
        it('Should split string by separator.', function()
        {
            expect(_.split.apply(_, params)).to.eql([ 'cut', 'the', 'values' ]);
        });
    });


    describe('startCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.startCase();
        });
        it('should check if first parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(18);
        });
        it('Should return the start cased string.', function()
        {
            expect(_.startCase.apply(_, params)).to.eql('Start With Case');
        });
    });

    describe('startsWith',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.startsWith();
        });
        it('should check parameters types', function(){
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(15);
            expect(params[1].length).to.equal(2);
        });
        it('Should check if string starts with the given target string.', function()
        {
            expect(_.startsWith.apply(_, params)).to.eql(true);
        });
    });



    describe('toLower',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.toLower();
        });
        it('should check if first parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(14);
        });
        it('Should converts string, as a whole, to lower case just like String#toLowerCase.', function()
        {
            expect(_.toLower.apply(_, params)).to.eql('--another-one-');
        });
    });

    describe('toUpper',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.toUpper();
        });
        it('should check if first parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check first parameter length', function(){
            expect(params[0].length).to.equal(14);
        });
        it('Should converts string, as a whole, to lower case just like String#toLowerCase.', function()
        {
            expect(_.toLower.apply(_, params)).to.eql('--and another-');
        });
    });

    describe('trim',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.trim();
        });
        it('should check if parameters are strings', function(){
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
        });
        it('should check first parameter length', function() {
            expect(params[0].length).to.equal(23);
        });
        it('Removes leading and trailing whitespace or specified characters from string.', function()
        {
            expect(_.trim.apply(_, params)).to.eql('Thats interesting');
        });
    });

    describe('attempt',function(){

        var params = datasets.attempt();
        it('should bind methods of an object to the object itself, overwriting the existing method.')
        {
            var elements = _.attempt(function(selector) {
                return document.querySelectorAll(selector);
            }, '>_>');
            console.log(elements);
            if (_.isError(elements)) {
                elements = [];
                console.log(elemnts);
            }
        }

    });
});

