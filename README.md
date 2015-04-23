# Basic JavaScript Part II

## Summary

JS Assessment for basic JavaScript knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.

## Goals

Your solutions should be placed inside **app/exercise2.js** file(inside window.exercise2 object).

### reverseNumber(number)

Reverses digits in the `number`. If parameter is not a number return false.

### squareOrCube(array)

Squares every **odd** number and cube every **even** number in `array`. Returns the update array of numbers.

### replaceString(list, string, newString)

Searches `string` in the `list` and replaces it to `newString`. Returns corrected array or false (when **string** doesn't exist).

### maxArray(array)

Returns maximum number from `array` of numbers. If array contains other elements than number returns false;

### getObject(list, name)

Returns object with the specified `name` from `list` of  objects. If there are no such object on the list returns false.

## Before you start...

JavaScript basic functions: 

[http://www.w3schools.com/jsref/](http://www.w3schools.com/jsref/)
    
Javascript EcmaScript5 tutorials and more: 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

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
 
