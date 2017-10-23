# Basic JavaScript Part V

## Summary

This is JS Assessment for basic JavaScript knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions, having only the function name and purpose provided.

## Goals

Your solutions should be placed inside **app/exercise5.js** file (inside window.exercise5 object).

### mergeObject(object1,object2)

It copies properties from one objects to another. It returns object or if the parameters `object1`,`object2` are not objects , it returns false.

### countLetter(object,letter)

It counts the occurrence of a `letter` (lower and upper case doesn't matter) inside every property of an `object`.

### makeObject(array)

It creates an object from 2D `array` where each element of the `array` is an array like this: [properties, propertiesValue]. It returns false when the inner array isn't 
equal to 2 dimensions.

### propertyNames(object)

It creates 2D array from the `object` where each element of the array is an array like this: [properties, propertiesValue]. 

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
 
