(function ()
{
    'use strict';
    var functionsAnswers = window.functionsAnswers;

    describe('functions', function ()
    {
        function sayIt(greeting, name, punctuation)
        {
            return greeting + ', ' + name + (punctuation || '!');
        }

        function concat()
        {
            return Array.prototype.slice.apply(arguments);
        }

        it('you should be able to use an array as arguments when calling a function', function ()
        {
            expect(functionsAnswers.argsAsArray(sayIt, ['Hello', 'Ellie'])).toEqual('Hello, Ellie!');
            expect(functionsAnswers.argsAsArray(sayIt, ['Hello', 'Ellie', '!'])).toEqual('Hello, Ellie!');
            expect(functionsAnswers.argsAsArray(sayIt, ['Hello', 'Rocky'])).toEqual('Hello, Rocky!');
            expect(functionsAnswers.argsAsArray(sayIt, ['Hello', 'Rocky', '.'])).toEqual('Hello, Rocky.');
            expect(functionsAnswers.argsAsArray(concat, ['Hello', 'Ellie', '!', 1, 2, 3])).toEqual(['Hello', 'Ellie', '!', 1, 2, 3]);
        });

        it('you should be able to change the context in which a function is called', function ()
        {
            function speak()
            {
                /*jshint -W040*/
                return sayIt(this.greeting, this.name, '!!!');
            }

            expect(functionsAnswers.speak(speak, {greeting: 'Hello', name: 'Rebecca'})).toEqual('Hello, Rebecca!!!');
            expect(functionsAnswers.speak(speak, {greeting: 'Cheers', name: 'Man'})).toEqual('Cheers, Man!!!');
        });

        it('you should be able to return a function from a function', function ()
        {
            expect(functionsAnswers.functionFunction('Hello')('world')).toEqual('Hello, world');
            expect(functionsAnswers.functionFunction('Hai')('can i haz funxtion?')).toEqual('Hai, can i haz funxtion?');
        });

        it('you should be able to use closures', function ()
        {
            var arr = [Math.random(), Math.random(), Math.random(), Math.random()];

            function square(x)
            {
                return x * x;
            }

            function negate(x)
            {
                return -1 * x;
            }

            var funcs = functionsAnswers.makeClosures(arr);
            expect(funcs.length).toBe(arr.length);

            arr.forEach(function (item, index)
            {
                expect(funcs[index](square)).toEqual(square(item));
            });

            arr.forEach(function (item, index)
            {
                expect(funcs[index](negate)).toEqual(negate(item));
            });
        });

        it('you should be able to create a "partial" function', function ()
        {
            expect(functionsAnswers.partial(sayIt, 'Hello', 'Ellie')('!!!')).toEqual('Hello, Ellie!!!');
            expect(functionsAnswers.partial(sayIt, 'Hello', 'Rick')('?')).toEqual('Hello, Rick?');
        });

        it('you should be able to use arguments', function ()
        {
            var a = Math.random();
            var b = Math.random();
            var c = Math.random();
            var d = Math.random();

            expect(functionsAnswers.useArguments(a)).toEqual(a);
            expect(functionsAnswers.useArguments(a, b)).toEqual(a + b);
            expect(functionsAnswers.useArguments(a, b, c)).toEqual(a + b + c);
            expect(functionsAnswers.useArguments(a, b, c, d)).toEqual(a + b + c + d);
        });

        it('you should be able to apply functions with arbitrary numbers of arguments', function ()
        {
            var a = Math.random();
            var b = Math.random();
            var c = Math.random();

            var wasITake2ArgumentsCalled = false;
            var iTake2Arguments = function (firstArgument, secondArgument)
            {
                expect(arguments.length).toEqual(2);
                expect(firstArgument).toEqual(a);
                expect(secondArgument).toEqual(b);

                wasITake2ArgumentsCalled = true;
            };

            var wasITake3ArgumentsCalled = false;
            var iTake3Arguments = function (firstArgument, secondArgument, thirdArgument)
            {
                expect(arguments.length).toEqual(3);
                expect(firstArgument).toEqual(a);
                expect(secondArgument).toEqual(b);
                expect(thirdArgument).toEqual(c);

                wasITake3ArgumentsCalled = true;
            };

            functionsAnswers.callIt(iTake2Arguments, a, b);
            functionsAnswers.callIt(iTake3Arguments, a, b, c);

            expect(wasITake2ArgumentsCalled).toBeTruthy();
            expect(wasITake3ArgumentsCalled).toBeTruthy();
        });

        it('you should be able to create a "partial" function for variable number of applied arguments', function ()
        {
            var partialMe = function (x, y, z)
            {
                return x / y * z;
            };

            var a = Math.random();
            var b = Math.random();
            var c = Math.random();
            expect(functionsAnswers.partialUsingArguments(partialMe)(a, b, c)).toEqual(partialMe(a, b, c));
            expect(functionsAnswers.partialUsingArguments(partialMe, a)(b, c)).toEqual(partialMe(a, b, c));
            expect(functionsAnswers.partialUsingArguments(partialMe, a, b)(c)).toEqual(partialMe(a, b, c));
            expect(functionsAnswers.partialUsingArguments(partialMe, a, b, c)()).toEqual(partialMe(a, b, c));
        });

        it('you should be able to curry existing functions', function ()
        {
            var curryMe = function (x, y, z)
            {
                return x / y * z;
            };

            var a = Math.random();
            var b = Math.random();
            var c = Math.random();
            var result;

            result = functionsAnswers.curryIt(curryMe);
            expect(typeof result).toEqual('function');
            expect(result.length).toEqual(1);

            result = functionsAnswers.curryIt(curryMe)(a);
            expect(typeof result).toEqual('function');
            expect(result.length).toEqual(1);

            result = functionsAnswers.curryIt(curryMe)(a)(b);
            expect(typeof result).toEqual('function');
            expect(result.length).toEqual(1);

            result = functionsAnswers.curryIt(curryMe)(a)(b)(c);
            expect(typeof result).toEqual('number');
            expect(result).toEqual(curryMe(a, b, c));
        });
    });
})();
