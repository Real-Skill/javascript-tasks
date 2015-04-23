var regexAnswers = exports.regexAnswers;

describe('regular expressions', function() {
    it('you should be able to detect a number in a string', function() {
        expect(regexAnswers.containsNumber('abc123')).toEqual(true);
        expect(regexAnswers.containsNumber('abc')).toEqual(false);
    });

    it('you should be able to detect a repeating letter in a string', function() {
        expect(regexAnswers.containsRepeatingLetter('bookkeeping')).toEqual(true);
        expect(regexAnswers.containsRepeatingLetter('rattler')).toEqual(true);
        expect(regexAnswers.containsRepeatingLetter('ZEPPELIN')).toEqual(true);
        expect(regexAnswers.containsRepeatingLetter('cats')).toEqual(false);
        expect(regexAnswers.containsRepeatingLetter('l33t')).toEqual(false);
    });

    it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
        expect(regexAnswers.endsWithVowel('cats')).toEqual(false);
        expect(regexAnswers.endsWithVowel('gorilla')).toEqual(true);
        expect(regexAnswers.endsWithVowel('I KNOW KUNG FU')).toEqual(true);
    });

    it('you should be able to capture the first series of three numbers', function() {
        expect(regexAnswers.captureThreeNumbers('abc123')).toEqual('123');
        expect(regexAnswers.captureThreeNumbers('9876543')).toEqual('987');
        expect(regexAnswers.captureThreeNumbers('abcdef')).toEqual(false);
        expect(regexAnswers.captureThreeNumbers('12ab12ab')).toEqual(false);
    });

    it('you should be able to determine whether a string matches a pattern', function() {
        // the pattern is XXX-XXX-XXXX where all X's are digits
        expect(regexAnswers.matchesPattern('800-555-1212')).toEqual(true);
        expect(regexAnswers.matchesPattern('451-933-7899')).toEqual(true);
        expect(regexAnswers.matchesPattern('33-444-5555')).toEqual(false);
        expect(regexAnswers.matchesPattern('abc-def-hijk')).toEqual(false);
        expect(regexAnswers.matchesPattern('1800-555-1212')).toEqual(false);
        expect(regexAnswers.matchesPattern('800-555-12121')).toEqual(false);
        expect(regexAnswers.matchesPattern('800-5555-1212')).toEqual(false);
        expect(regexAnswers.matchesPattern('800-55-1212')).toEqual(false);
    });

    it('you should be able to detect correctly-formatted monetary amounts in USD', function() {
        expect(regexAnswers.isUSD('$132.03')).toEqual(true);
        expect(regexAnswers.isUSD('$32.03')).toEqual(true);
        expect(regexAnswers.isUSD('$2.03')).toEqual(true);
        expect(regexAnswers.isUSD('$1,023,032.03')).toEqual(true);
        expect(regexAnswers.isUSD('$20,933,209.93')).toEqual(true);
        expect(regexAnswers.isUSD('$20,933,209')).toEqual(true);
        expect(regexAnswers.isUSD('$459,049,393.21')).toEqual(true);
        expect(regexAnswers.isUSD('34,344.34')).toEqual(false);
        expect(regexAnswers.isUSD('$,344.34')).toEqual(false);
        expect(regexAnswers.isUSD('$34,344.3')).toEqual(false);
        expect(regexAnswers.isUSD('$34,344.344')).toEqual(false);
        expect(regexAnswers.isUSD('$34,344_34')).toEqual(false);
        expect(regexAnswers.isUSD('$3,432,12.12')).toEqual(false);
        expect(regexAnswers.isUSD('$3,432,1,034.12')).toEqual(false);
        expect(regexAnswers.isUSD('4$3,432,034.12')).toEqual(false);
    });
});
