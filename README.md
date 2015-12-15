# JavaScript Function

## Summary

JS Assessment for JavaScript functions knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only the 
function name and purpose.

## Goals

Your solutions should be placed inside **app/functions.js** file(inside window.functionsAnswers object).

### argsAsArray(fn, paramsArray):

Returns result of calling `fn` function with params from `paramsArray`.
i.e. 
given `paramsArray=[1,2,3], sayIt = function`
when `argsAsArray(sayIt, paramsArray)`
then result should be the same as calllin `sayIt(1,2,3)`

### speak(fn, context):

Returns result of calling `fn` function as a method of `context`.

### functionFunction(firstPart):

Returns function that accepts one param `secondParam`. That function should return concatenated string "{firstPart}, {secondPart}".
i.e. functionFunction('a')('b') => 'a, b'

### makeClosures(valueArray):

Returns array of functions that accept one param: `fn` function. Invocation of function in result array should return result of calling `fn` with
corresponding item from `valueArray` as a param.
i.e. makeClosures([1,3])[0](echo) === echo(1)
i.e. makeClosures([1,3])[1](echo) === echo(3)

### partial(fn, str1, str2):

Returns a function that accepts `str3` param and when called, returns result of `fn` called with str1, str2, str3.

### useArguments(...):

Returns sum of all parameters.

### callIt(fn):

Returns result of calling `fn` with variable parameters.
i.e. callIt(fn, arg1, arg2, arg3) === fn(arg1, arg2, arg3)

### partialUsingArguments(fn, ...):

Returns function that when called returns result of `fn` called with concatenation of params of `partialUsingArguments` invocation (without first param) and 
params of it's own:

    expect(functionsAnswers.partialUsingArguments(partialMe)(a, b, c)).toEqual(partialMe(a, b, c));
    expect(functionsAnswers.partialUsingArguments(partialMe, a)(b, c)).toEqual(partialMe(a, b, c));
    expect(functionsAnswers.partialUsingArguments(partialMe, a, b)(c)).toEqual(partialMe(a, b, c));
    expect(functionsAnswers.partialUsingArguments(partialMe, a, b, c)()).toEqual(partialMe(a, b, c));

### curryIt:

Implement more advanced function accepting only single parameter:

    fn
    
This function is expected to call **fn** with required number of parameters(depending on how many parameters 
function consumes). If there are not enough arguments, function should return new function that accepts remaining parameter.
If there were still not enough parameters for this function it should return new function similar to previous, but with decreased
parameters required remaining and so on. For example:

    curryIt(fn)(a)(b)(c)
    
should return same value(calculated from fn with passed parameters) as following call:

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

To run verify jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    npm test

Good luck!
 
