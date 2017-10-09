# Basic JavaScript Part I

## Summary
JS Assessment for basic JavaScript knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
 
## Goals

Your solutions should be placed inside **app/exercise1.js** file(inside window.exercise1 object).

### getDescendingNumbers(numberFrom, numberTo)

Returns the string with numbers in descending order separated by ' ' (space). If `numberFrom` is lower than `numberTo` returns false. If the parameters aren't a numbers also should return false. 

### deleteString(string, array)

Removes all occurrences of `string` in `array` of strings. Returns update `array` of strings.

### stringCounter(array)

Returns a number of **String** elements in `array`.

### squareOdd(array)

Square value of every odd number inside of `array`. Returns update array and leaves the rest of items unaffected.

### areaOfTrapezoid(a,b,h)

Calculate the area of a trapezoid. If the parameters are incorrect the function should return false.

## Before you start...

JavaScript basic functions: 

[http://www.w3schools.com/jsref/](http://www.w3schools.com/jsref/)
    
Javascript EcmaScript5 tutorials and more: 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)    

## Setup

### To install dependencies

    yarn install

### JShint

To run verify jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    yarn test

Good luck!
