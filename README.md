# Basic JavaScript Part II

## Summary

This is JS Assessment for basic JavaScript knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions having only the function name and purpose provided.

## Goals

Your solutions should be placed inside **app/exercise2.js** file(inside window.exercise2 object).

### reverseNumber(number)

It reverses digits in the `number`. If the parameter is not a number, it returns false.

### squareOrCube(array)

It squares every **odd** number and cube every **even** number in `array`. It returns the update array of numbers.

### replaceString(list, string, newString)

It searches the  `string` in the `list` and replaces it to `newString`. It returns the corrected array or false (when the **string** doesn't exist).

### maxArray(array)

It returns the maximal number from the `array` of numbers. If the array contains other elements than number, it returns false;

### getObject(list, name)

It returns the object with the specified `name` from the `list` of  objects. If there are no such object on the list, it returns false.

## Before you start...

JavaScript basic functions: 

[http://www.w3schools.com/jsref/](http://www.w3schools.com/jsref/)
    
Javascript EcmaScript5 tutorials and more: 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

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
 
