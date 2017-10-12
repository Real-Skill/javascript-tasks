# Basic JavaScript Part III

## Summary

JS Assessment for basic JavaScript knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.

## Goals

Your solutions should be placed inside **app/exercise3.js** file(inside window.exercise3 object).

### doAdult(array)

Modify every person from `array` which has the age property less than 18 and increases it to 18. It doesn't return any value.

### findTheBiggerBox(x,y,z)

Calculate capacity of three box objects with the provided dimensions:
 
    boxX:
        bX = 3 * x
        bY = y
        bZ = z
    boxY:
        bX = x
        bY = y * y
        bZ = z
    boxZ:
        bX = x
        bY = y
        bZ = y + z
  
 and returns **number** of the box that has the largest capacity upon calculation (boxX -> **1**, boxY -> **2**, boxZ = **3**). If parameters `x`,`y`,`z` are not numbers returns false.

### reverseText(text)

Returns the inverted `text`. If `text` is not a string returns false.

### factorial(N)

Calculates factorial of `N` number. Returns array of numbers starting from `0`. For example passing `3`, array should looks like `[1,1,2,6]`.

### sumValueOfObjectProperties(object)

Return sum of all objects properties values.

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
 
