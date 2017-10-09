# JavaScript Objects

## Summary

JS Assessment for JavaScript objects knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided 
only the function name and purpose.

### Goals

Your solutions should be placed inside **app/objects`.js** file(inside window.objectsAnswers object).

### alterContext(fn, context):

Return result of calling method (`fn`) of some object in context of another `context`.

### alterObjects(constructor, greeting

It is expected that this function should change `constructor` so that every object created by it has it's greeting property changed
to a new `greeting`. Already existing objects derived from `constructor` should also have their properties changed.

### iterate:

Iterates over object properties and returns them as strings in array according to the following pattern:

    ['<property>: <property value>', ...]

## Before you start...

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

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
 
