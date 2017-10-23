# JavaScript Objects

## Summary

This is JS Assessment for JavaScript objects knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions, having 
only the function name and purpose provided.

### Goals

Your solutions should be placed inside **app/objects`.js** file(inside window.objectsAnswers object).

### alterContext(fn, context)

It returns the result of a calling method (`fn`) of some object in the context of another `context`.

### alterObjects(constructor, greeting

This function is expected to change the `constructor` so that every object created by this has it's greeting property changed
to a new `greeting`. 
The objects already existing and derived from the `constructor` should also have their properties changed.

### iterate

It iterates over the object properties and returns them as a strings in an array according to the following pattern:

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

To run jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    npm test

Good luck!
 
