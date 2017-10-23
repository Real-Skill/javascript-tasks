# Lodash Number Training

## Summary

These are training tasks for Lodash Number. The exercise consist of a few simple tasks.
You are supposed to implement a method, having only the method name and purpose provided.

## Goal

The tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.clamp

It clamps number within the inclusive lower and upper bounds.

### _.inRange

It checks if n is between the start and up to, but not including, the end. 
If the end is not specified, it’s set to start with the start then set to 0. 
If the start is greater than the end the params are swapped to support the negative ranges.

### _.random

It produces a random number between the inclusive lower and upper bounds. 
If only one argument is provided a number between 0 and the given number is returned. 
If floating is true, or either lower or upper are floats, the floating-point number is returned instead of the integer. 


## Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
