(function ()
{
    'use strict';

    describe('exercise6', function ()
    {
        var exercise6 = window.exercise6;

        describe('isPalindrom', function () {
            it('"kajak" should return true', function () {
                expect(exercise6.isPalindrome('kajak')).toEqual(true);
            });
            it('"kajaki" should return false', function () {
                expect(exercise6.isPalindrome('kajaki')).toEqual(false);
            });
            it('"kaaa4jaaak" should return false', function () {
                expect(exercise6.isPalindrome('kaaa4jaaak')).toEqual(false);
            });
            it('"Kajak" should return true', function () {
                expect(exercise6.isPalindrome('Kajak')).toEqual(true);
            });
            it('" " should return false', function () {
                expect(exercise6.isPalindrome(' ')).toEqual(false);
            });
            it('"That tahT" should return true', function () {
                expect(exercise6.isPalindrome('That tahT')).toEqual(true);
            });
        });

        describe('onlyLetter', function () {
            it('should return only letter', function () {
                expect(exercise6.onlyLetter('a4l1f5a')).toBe('alfa');
            });
            it('should return empty string', function () {
                expect(exercise6.onlyLetter('45345')).toBe('');
            });
            it('number should return false', function () {
                expect(exercise6.onlyLetter(45345)).toEqual(false);
            });
        });

        describe('alphabetOrder', function () {
            it('should return letters in alphabetical order', function () {
                expect(exercise6.alphabetOrder('alfa')).toBe('aafl');
                expect(exercise6.alphabetOrder('bac')).toBe('abc');
            });
            it('should return lower case letters in alphabetical order', function () {
                expect(exercise6.alphabetOrder('AlfA')).toBe('aafl');
            });
            it('should return only letters in alphabetical order', function () {
                expect(exercise6.alphabetOrder('A1l2f3a')).toBe('aafl');
            });

        });
        describe('upperCase', function () {
            it('should converts the first letter each word in upper case', function () {
                expect(exercise6.upperCase('This is a sentence')).toBe('This Is A Sentence');
            });
            it('should not change upper case letter', function () {
                expect(exercise6.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            });
            it('should not change punctuation', function () {
                expect(exercise6.upperCase('This is,m Hard')).toBe('This Is,m Hard');
            });
        });

        describe('findTheLongestWord', function () {
            it('should return the longest word in the string', function () {
                expect(exercise6.findTheLongestWord('This is the end of the world')).toEqual(['world']);
                expect(exercise6.findTheLongestWord('a aaa aaaa aaaaa')).toEqual(['aaaaa']);
            });
            it('should return an array of the longest word in the string', function () {
                expect(exercise6.findTheLongestWord('This,i...i the@world of the world world')).toEqual(['world', 'world', 'world']);
            });
        });
    });

})();
