# Basic JavaScript Part III

## Summary

This is JS Assessment for basic JavaScript knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions having only the function name and purpose provided.

## Goals

Your solutions should be placed inside **app/exercise3.js** file(inside window.exercise3 object).

### doAdult(array)

It modifies every person from the `array` which has the age property lower than 18 and it increases it to 18. It doesn't return any value.

### findTheBiggerBox(x,y,z)

It calculates the capacity of three box objects with the provided dimensions:
 
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
  
and it returns **number** of the box that has the largest capacity upon calculation (boxX -> **1**, boxY -> **2**, boxZ = **3**). If the parameters `x`,`y`,`z` are not numbers, it returns false.

### reverseText(text)

It returns the inverted `text`. If the `text` is not a string, it returns false.

### factorial(N)

It calculates factorial of `N` number. It returns the array of numbers starting from `0`. For example when passing `3`, the array should look like `[1,1,2,6]`.

### sumValueOfObjectProperties(object)

It return the sum of all object properties values.

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
 
