# Basic JavaScript Part I

## Summary
This is JS Assessment for basic JavaScript knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions, having only the function name and purpose provided.
 
## Goals

Your solutions should be placed inside **app/exercise1.js** file(inside window.exercise1 object).

### getDescendingNumbers(numberFrom, numberTo)

It returns a string with numbers in the descending order and separated by ' ' (space). If the `numberFrom` is lower than the `numberTo` , it returns false. If the parameters aren't numbers, it should also return false. 

### deleteString(string, array)

It removes all the occurrences of the `string` in an `array` of strings. It returns the update `array` of strings.

### stringCounter(array)

It returns a number of **String** elements in the `array`.

### squareOdd(array)

It squares the value of every odd number inside the `array`. It returns an update array and leaves the rest of items unaffected.

### areaOfTrapezoid(a,b,h)

It calculates the area of a trapezoid. If the parameters are incorrect the function should return false.

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
