describe("filter", function ()
{
    beforeEach(module('myFilter'));

    describe("quote", function ()
    {
        it("should places the text in quotes", inject(function (quoteFilter)
        {
            expect(quoteFilter('To be, or not to be...')).toEqual('"To be, or not to be..."');
            expect(quoteFilter('Test test')).toEqual('"Test test"');
        }));
    });

    describe("withoutH", function ()
    {
        it("should removes all the letters H", inject(function (withoutHFilter)
        {
            expect(withoutHFilter('TestH test')).toEqual('Test test');
        }));
        it("should removes all the letters h", inject(function (withoutHFilter)
        {
            expect(withoutHFilter('Test testh')).toEqual('Test test');
        }));
        it("should removes all the letters H and h", inject(function (withoutHFilter)
        {
            expect(withoutHFilter('Testh testH')).toEqual('Test test');
        }));
    });

    describe("firstLetterUpp", function ()
    {
        it("should places the text in quotes", inject(function (firstLetterUppFilter)
        {
            expect(firstLetterUppFilter('the Hobbit: the Battle of the five Armies')).toEqual('The Hobbit: The Battle Of The Five Armies');
            expect(firstLetterUppFilter('test test')).toEqual('Test Test');
        }));
    });
});