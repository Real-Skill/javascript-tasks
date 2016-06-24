'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

chai.Assertion.addProperty('uppercase', function() {
    var obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');
    this.assert(
        obj === obj.toUpperCase()
        , 'expected #{this} to be uppercase'
        , 'expected #{this} to not be uppercase'
    );
});

chai.Assertion.addProperty('lowercase', function() {
    var obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');
    this.assert(
        obj === obj.toLowerCase()
        , 'expected #{this} to be lowercase'
        , 'expected #{this} to not be lowercase'
    );
});

describe('Lodash training', function()
{
    describe('camelCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.camelCase();
        });
        it('should check if first parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if string starts with lowercase', function()
        {
            expect(params[0][0]).to.be.uppercase;
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
            expect(params[0]).to.be.a('string');
        });
        it('should check if letters are uppercase', function(){
            expect(params[0]).to.be.uppercase;
        });
        it('should check string length',function(){
            expect(params[0].length).to.be.eql(10);
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
            expect(params[0]).to.be.a('string');
        });
        it('should check string length',function(){
            expect(params[0].length).to.be.eql(21);
        });
        it('should check if first parameter contain latin-1 supplementary letters', function(){
            expect(params[0]).to.match(/[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸ]/);
        });
        it('should debur string by converting latin-1 supplementary letters to basic latin letters and remove combining diacritical marks.', function()
        {
            expect(_.deburr.apply(_, params)).to.eql('schon resume and cafe');
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
            it('should check if parameters are strings', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('string');
            });
            it('should check if first string contains second one',function(){
                expect(params[0]).to.contain(params[1]);
            });
            it('should check if string ends with the given target string.', function()
            {
                expect(_.endsWith.apply(_,params)).to.eql(true);
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
            it('should check parameters types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('string');
                expect(params[2]).to.be.a('number');
            });
            it('should check if first string contains second one',function(){
                expect(params[0]).to.contain(params[1]);
            });
            it('should check if string ends with the given target string.', function()
            {
                expect(_.endsWith.apply(_, params)).to.eql(true);
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
            expect(params[0]).to.be.a('string');
        });
        it('should check if first parameter contains required signs', function(){
            expect(params[0]).to.match(/[&<>"'`]/);
        });
        it('should convert the characters "&", "<", ">"," '+"' "+', and "`" in string to their corresponding HTML entities. ', function()
        {
            expect(_.escape.apply(_, params)).to.eql('&lt;script&gt;');
        });
    });

    describe('escapeRegExp',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.escapeRegExp();
        });
        it('should check if first parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if first parameter contains required signs', function(){
            expect(params[0]).to.match(/[^$\.*+?()[]|]{"}"/);
        });
        it('should convert the characters "&", "<", ">"," '+"' "+', and "`" in string to their corresponding HTML entities. ', function()
        {
             expect(_.escapeRegExp.apply(_, params)).to.eql("\\[url\\]\\(https://google\\.com/\\)");
        });
    });

    describe('kebabCase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.kebabCase();
        });
        it('should check if parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if there are some big letters in a string', function()
        {
            expect(params[0]).to.match(/[A-Z]/);
        });
        it('should convert string from camel case to kebab case.', function()
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
        it('should check if parameter is a string', function()
        {
            expect(params[0]).to.be.a('string');
        });
        it('should check if there are some big letters in a string', function()
        {
            expect(params[0]).to.match(/[A-Z]/);
        });
        it('should convert string, as space separated words, to lower case.', function()
        {
            expect(_.lowerCase.apply(_, params)).to.eql('something random lorem ipsum');
        });
    });

    describe('lowerFirst',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.lowerFirst();
        });
        it('should check if parameter is a string', function()
        {
            expect(params[0]).to.be.a('string');
        });
        it('should check if first letter is uppercase', function(){
            expect(params[0][0]).to.be.uppercase;
        });
        it('should convert string, as space separated words, to lower case.', function()
        {
            expect(_.lowerFirst.apply(_, params)).to.eql('lOWER FIRST');
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
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('number');
            });
            it('should check parameter length', function(){
                expect(params[0].length).to.equal(7);
            });
            it('should pad string on the left and right side if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.', function()
            {
                expect(_.pad.apply(_, params)).to.eql(' padding  ');
            });
        });
        describe('pad2', function() {

            var params;
            beforeEach(function()
            {
                params =  datasets.pad2();
            });
            it('should check number of parameters', function(){
                expect(params.length).to.equal(3);
            });
            it('should check types of parametrs', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('number');
                expect(params[2]).to.be.a('string');
            });
            it('should check strings length', function(){
                expect(params[0].length).to.equal(12);
                expect(params[2].length).to.equal(2);
            });
            it('should pad string on the left and right side if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.', function()
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
            it('should check parameters length', function(){
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
            it('should check strings lengths', function(){
                expect(params[0].length).to.equal(12);
                expect(params[2].length).to.equal(2);
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
            expect(params[0]).to.contain('0');
        });
        it('should check strings lengths', function(){
            expect(params[0].length).to.equal(3);
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
            expect(params[0].length).to.equal(1);
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
        it('should check parameters lengths', function(){
            expect(params[1].length).to.equal(5);
            expect(params[2].length).to.equal(4);
        });
        it('should check if first argument contains second argument',function(){
            expect(params[0]).to.contain(params[1]);
        });
        it('Should replace matches for pattern in string with replacement', function()
        {
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
        it('should check if string doesnt contain underscores',function()
        {
            expect(params[0]).to.not.match(/_/);
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
            expect(params[1].length).to.equal(1);
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
        it('Should check if string begins with lowercase letter',function()
        {
            expect(params[0][0]).to.be.lowercase;
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
        it('should check if first string contains second one',function(){
            expect(params[0]).to.contain(params[1]);
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
        it('should check if there are some big letters in a string', function()
        {
            expect(params[0]).to.match(/[A-Z]/);
        });
        it('Should convert string, as a whole, to lower case', function()
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
        it('should check if first letter is uppercase', function(){
           expect(params[0][0]).to.be.lowercase;
        });
        it('Should converts string, as a whole, to lower case just like String#toLowerCase.', function()
        {
            expect(_.toUpper.apply(_, params)).to.eql('AND ANOTHER');
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
        it('should check if first string contains whitespace',function(){
            expect(params[0]).to.contain(params[1]);
        });
        it('should check if first parameter has required symbol', function()
        {
            expect(params[0]).to.match(/[-_ ]/);
        });
        it('Removes leading and trailing whitespace or specified characters from string.', function()
        {
            expect(_.trim.apply(_, params)).to.eql('Leading');
        });
    });

    describe('trimEnd',function()
    {

        describe('trimEnd1',function()
        {
            var params;
            beforeEach(function()
            {
                params =  datasets.trimEnd1();
            });
            it('should check number of parameters', function()
            {
                expect(params.length).to.be.eql(1);
            });
            it('should check if parameter is a string', function()
            {
                expect(params[0]).to.be.a('string');
            });
            it('should check string length', function()
            {
                expect(params[0].length).to.be.eql(15);
            });
            it('should remove trailing whitespace or specified characters from string.',function(){
                expect(_.trimEnd.apply(_,params)).to.eql('  in the end');
            });
        });
        describe('trimEnd2',function()
        {
            var params;
            beforeEach(function()
            {
                params =  datasets.trimEnd2();
            });
            it('should check number of parameters', function()
            {
                expect(params.length).to.be.eql(2);
            });
            it('should check if parameter is a string', function()
            {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('string');
            });
            it('should check string length', function()
            {
                expect(params[0].length).to.be.eql(21);
                expect(params[1].length).to.be.eql(2);
            });
            it('should check if string has  required symbol', function()
            {
                expect(params[0]).to.match(/[-+]/);
            });
            it('should remove trailing whitespace or specified characters from string.',function(){
                expect(_.trimEnd.apply(_,params)).to.eql('+-+-Pros and cons');
            });

        });
    });

    describe('trimStart',function()
    {
        describe('trimStart1',function() {
            var params;
            beforeEach(function () {
                params = datasets.trimStart1();
            });
            it('should number of parameters', function()
            {
                expect(params.length).to.be.eql(1);
            });
            it('should check if parameter is a string', function()
            {
                expect(params[0]).to.be.a('string');
            });
            it('should check string length', function()
            {
                expect(params[0].length).to.be.eql(11);
            });
            it('should remove leading whitespace or specified characters from string.', function () {
                expect(_.trimStart.apply(_, params)).to.eql('Beginning');
            });
        });

        describe('trimStart2',function() {
            var params;
            beforeEach(function () {
                params = datasets.trimStart2();
            });
            it('should number of parameters', function()
            {
                expect(params.length).to.be.eql(2);
            });
            it('should check if parameter is a string', function()
            {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('string');
            });
            it('should check if string has required symbol', function()
            {
                expect(params[0]).to.match(/[<^>]/);
            });
            it('should check if first string contains second one',function(){
                expect(params[0]).to.contain(params[1]);
            });
            it('should remove leading whitespace or specified characters from string.', function () {
                expect(_.trimStart.apply(_, params)).to.eql('Starting');
            });
        });
    });


    describe('truncate',function()
    {
        describe('truncate1',function() {
            var params;
            beforeEach(function () {
                params = datasets.truncate1();
            });
            it('should check if parameter is a string', function(){
                expect(params[0]).to.be.a('string');
            });
            it('should check first string length', function() {
                expect(params[0].length).to.equal(31);
            });
            it('should truncate string if it’s longer than the given maximum string length. The last characters of the truncated string should be replaced with the omission string which defaults to "…".', function()
            {
                expect(_.truncate.apply(_, params)).to.eql('This is  very, very long st...');
            });

        });

        describe('truncate2',function() {
            var params;
            beforeEach(function () {
                params = datasets.truncate2();
            });
            it('should check parameters types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.an('object');
            });
            it('should check object keys',function()
            {
                expect(params[1]).to.contains.all.keys(['length','separator']);
            });
            it('should truncate string if it’s longer than the given maximum string length. The last characters of the truncated string should be replaced with the omission string which defaults to "…".', function() {
                expect(_.truncate.apply(_,params)).to.eql('Lorem...');
            });
        });

        describe('truncate3',function() {
            var params;
            beforeEach(function () {
                params = datasets.truncate3();
            });
            it('should check parameters types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.an('object');
            });
            it('should check object keys',function()
            {
                expect(params[1]).to.contains.all.keys(['length','separator']);
            });
            it('should check if separator is RegExp',function()
            {
                expect(params[1].separator instanceof RegExp).to.eql(true);
            });
            it('should check if first parameter hasnt got required symbol', function()
            {
                expect(params[0]).to.not.match(/['...']/);
            });
            it('should truncate string if it’s longer than the given maximum string length. The last characters of the truncated string should be replaced with the omission string which defaults to "…".', function() {
                expect(_.truncate.apply(_,params)).to.eql('Truncate me with comma...');
            });

        });

        describe('truncate4',function() {
            var params;
            beforeEach(function () {
                params = datasets.truncate4();
            });
            it('should check parameter types', function(){
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.an('object');
            });
            it('should check object keys',function()
            {
                expect(params[1]).to.contains.all.keys(['omission']);
            });
            it('should check if first parameter hasnt got required symbol', function()
            {
                expect(params[0]).to.not.match(/['[']/);
            });
            it('should truncate string if it’s longer than the given maximum string length. The last characters of the truncated string should be replaced with the omission string which defaults to "…".', function() {
                expect(_.truncate.apply(_,params)).to.eql('Lorem ipsum dolor_sit_amet […]');
            });

        });

    });

    describe('unescape',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.unescape();
        });
        it('should check if parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if string contains semicolon', function() {
            expect(params[0]).to.match(/[;]/);
        });
        it('should convert the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96; in string to their corresponding characters. ', function()
        {
            expect(_.unescape.apply(_, params)).to.eql('Unescape this &');
        });
    });

    describe('uppercase',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.uppercase();
        });
        it('should check if parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if string is lowercase', function()
        {
            expect(params[0]).to.be.lowercase;
        });
        it('should convert string, as space separated words, to upper case.', function()
        {
            expect(_.upperCase.apply(_, params)).to.eql('THE STRING TO CONVERT');
        });
    });


    describe('upperFirst',function()
    {
        var params;
        beforeEach(function()
        {
            params =  datasets.upperFirst();
        });
        it('should check if parameter is a string', function(){
            expect(params[0]).to.be.a('string');
        });
        it('should check if first character is lowercase', function()
        {
            expect(params[0][0]).to.be.lowercase;
        });
        it('should convert the first character of string to upper case.', function()
        {
            expect(_.upperFirst.apply(_, params)).to.eql('Make me upper');
        });
    });

    describe('words',function()
    {
        describe('words1',function(){
            var params;
            beforeEach(function()
            {
                params =  datasets.words1();
            });
            it('should check if parameter is a string', function(){
                expect(params[0]).to.be.a('string');
            });
            it('should split string into an array containing its words.', function()
            {
                var arr = _.words.apply(_, params);
                expect(arr[0]).to.equal('Could');
                expect(arr[1]).to.equal('you');
                expect(arr[2]).to.equal('cut');
                expect(arr[3]).to.equal('this');
                expect(arr[4]).to.equal('in');
                expect(arr[5]).to.equal('pieces');
            });
        });

        describe('words2',function(){
            var params;
            beforeEach(function()
            {
                params =  datasets.words2();
            });
            it('should check number of parameters', function()
            {
                expect(params.length).to.be.eql(2);
            });
            it('should check if first parameter is a string', function(){
                expect(params[0]).to.be.a('string');
            });
            it('should check if second parameter is RegExp', function() {
                expect(params[1] instanceof RegExp).to.eql(true);
            });
            it('should check if string contains comma', function() {
                expect(params[0]).to.match(/[,]/);
            });
            it('should split string into an array of its words.', function()
            {
                var arr = _.words.apply(_, params);
                expect(arr[0]).to.equal('Cut');
                expect(arr[1]).to.equal('me');
                expect(arr[2]).to.equal('too');
                expect(arr[3]).to.equal('&');
            });

        });

    });

});

