# JavaScript Objects

## Summary

JS Assessment for JavaScript objects knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided 
only the function name and purpose.

### Goals

Your solutions should be placed inside **app/objects`.js** file(inside window.objectsAnswers object).

### alterContext:

Implement **alterContext** function:

    fn
    obj
    
This function should call **fn** function from another context. Given **obj**, function should make use of **obj** fields instead
of component **fn** depends on to.

### alterObjects:

**alterObjects** function should accept two parameters:

    constructor
    greeting
    
It is expected that this function should change **constructor** that every object created by it have their greeting property changed
to a new **greeting**. Already existing objects derived from **constructor** should also have their properties changed.

### iterate:

Create **iterate** function for iterating objects:

    obj
    
This function should iterate through object properties and return them as strings in array in the following pattern:

    ['<property>: <property value>', ...]

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
 
