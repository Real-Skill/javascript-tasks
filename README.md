# JavaScript Modules 

## Summary

JS Assessment for JavaScript modules knowledge. You are supposed to implement functions, having provided only the function name and purpose.

## Goals

Your solutions should be placed inside **app/modules.js** file(inside window.modulesAnswers object).

## createModule(greeting, name):

Returns object with three properties:

    name: str2
    greeting: str1
    sayIt: Function
    
`sayIt` function is expected to return new string in the following pattern:

    <greeting>, <name>
    
Keep in mind that name and greeting of the module can be modified after module has been created and it has to be reflected in `sayIt` method.

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
 
