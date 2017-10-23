# JavaScript Function

## Summary

This is JS Assessment for JavaScript functions knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions, having only the 
function name and purpose provided.

## Goals

Your solutions should be placed inside **app/functions.js** file(inside window.functionsAnswers object).

### argsAsArray(fn, paramsArray)

It returns the result of calling `fn` function with the params from `paramsArray`.
i.e. 
given `paramsArray=[1,2,3], sayIt = function`
when `argsAsArray(sayIt, paramsArray)`
then result should be the same as callling `sayIt(1,2,3)`

### speak(fn, context)

It returns the result of calling `fn` function as a method of the `context`.

### functionFunction(firstPart)

It returns the function that accepts one param `secondParam`. This function should return a concatenated string "{firstPart}, {secondPart}".
i.e. functionFunction('a')('b') => 'a, b'

### makeClosures(valueArray)

It returns an array of functions that accept one param: `fn` function. The invocation of the function in the result array should return the result of calling `fn` with a
corresponding item from `valueArray` as a param.
i.e. makeClosures([1,3])[0](echo) === echo(1)
i.e. makeClosures([1,3])[1](echo) === echo(3)

### partial(fn, str1, str2)

It returns a function that accepts `str3` param and when called, it returns the result of `fn` called with str1, str2, str3.

### useArguments(...)

It returns the sum of all parameters.

### callIt(fn)

It returns the result of calling `fn` with the variable parameters.
i.e. callIt(fn, arg1, arg2, arg3) === fn(arg1, arg2, arg3)

### partialUsingArguments(fn, ...)

It returns the function which, when called, returns the result of `fn` called with concatenation of params of the `partialUsingArguments` invocation (without the first param) and 
the params of its own:

    expect(functionsAnswers.partialUsingArguments(partialMe)(a, b, c)).toEqual(partialMe(a, b, c));
    expect(functionsAnswers.partialUsingArguments(partialMe, a)(b, c)).toEqual(partialMe(a, b, c));
    expect(functionsAnswers.partialUsingArguments(partialMe, a, b)(c)).toEqual(partialMe(a, b, c));
    expect(functionsAnswers.partialUsingArguments(partialMe, a, b, c)()).toEqual(partialMe(a, b, c));

### curryIt

It implements more advanced function accepting only a single parameter:

    fn
    
This function is expected to call **fn** with the required number of parameters (depending on how many parameters the
function consumes). If there are not enough arguments, the function should return a new function that accepts the remaining parameter.
If there are still not enough parameters for this function it should return a new function similar to the previous one, but with decreased
parameters required remaining and so on. For example:

    curryIt(fn)(a)(b)(c)
    
should return the same value (calculated from fn with passed parameters) as the following call:

    curryIt(fn(a, b, c))

## Before you start...

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Setup

### To install dependencies

    npm install

### JShint

To run jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    npm test

Good luck!
 
