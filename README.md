# Basic JavaScript Part V

## Summary

JS Assessment for basic JavaScript knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.

## Goals

Your solutions should be placed inside **app/exercise5.js** file (inside window.exercise5 object).

### mergeObject(object1,object2)

Copies properties from one objects to another. Returns object or if parameters `object1`,`object2` are not an objects returns false.

### countLetter(object,letter)

Counts the occurrence of a `letter` (lower and upper case doesn't matter) inside every property of an `object`.

### makeObject(array)

Creates object from 2D `array` where each element of `array` is an array like this: [properties, propertiesValue]. Returns false when inner array isn't 
equal 2 dimensions.

### propertyNames(object)

Creates 2D array from `object` where each element of array is an array like this: [properties, propertiesValue]. 

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
 
