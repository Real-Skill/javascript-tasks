(function ()
{
    'use strict';
    var numbersAnswers = window.numbersAnswers;

    describe('numbers', function ()
    {
        describe('binary operations', function ()
        {
            it('you should be able to find the value of a given bit', function ()
            {
                expect(numbersAnswers.valueAtBit(128, 8)).toEqual(1);
                expect(numbersAnswers.valueAtBit(65, 1)).toEqual(1);
                expect(numbersAnswers.valueAtBit(65, 7)).toEqual(1);
                expect(numbersAnswers.valueAtBit(128, 1)).toEqual(0);
            });

            it('you should be able to return the base10 representation of a binary string', function ()
            {
                expect(numbersAnswers.base10('-1')).toEqual(-1);
                expect(numbersAnswers.base10('1')).toEqual(1);
                expect(numbersAnswers.base10('10')).toEqual(2);
                expect(numbersAnswers.base10('11')).toEqual(3);
                expect(numbersAnswers.base10('11000000')).toEqual(192);
            });

            it('you should be able to convert an eight-bit number to a binary string', function ()
            {
                expect(numbersAnswers.convertToBinary(128)).toEqual('10000000');
                expect(numbersAnswers.convertToBinary(65)).toEqual('01000001');
            });
        });
    });
})();
