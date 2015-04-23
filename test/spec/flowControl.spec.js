var flowControlAnswers = exports.flowControlAnswers;

describe('flow control', function()
{
    it('you should be able to conditionally branch your code', function ()
    {
        var num = 0;

        while (num % 3 === 0 || num % 5 === 0) {
            num = Math.floor(Math.random() * 10) + 1;
        }

        expect(flowControlAnswers.fizzBuzz()).toBeFalsy();
        expect(flowControlAnswers.fizzBuzz('foo')).toBeFalsy();
        expect(flowControlAnswers.fizzBuzz(2)).toEqual(2);
        expect(flowControlAnswers.fizzBuzz(101)).toEqual(101);

        expect(flowControlAnswers.fizzBuzz(3)).toEqual('fizz');
        expect(flowControlAnswers.fizzBuzz(6)).toEqual('fizz');
        expect(flowControlAnswers.fizzBuzz(num * 3)).toEqual('fizz');

        expect(flowControlAnswers.fizzBuzz(5)).toEqual('buzz');
        expect(flowControlAnswers.fizzBuzz(10)).toEqual('buzz');
        expect(flowControlAnswers.fizzBuzz(num * 5)).toEqual('buzz');

        expect(flowControlAnswers.fizzBuzz(15)).toEqual('fizzbuzz');
        expect(flowControlAnswers.fizzBuzz(num * 3 * 5)).toEqual('fizzbuzz');
    });
});
