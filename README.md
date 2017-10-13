# Lodash Number training

## Summary

Training tasks for Lodash Number. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name and purpose.

## Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.clamp

Clamps number within the inclusive lower and upper bounds.

### _.inRange

Checks if n is between start and up to, but not including, end. 
If end is not specified, it’s set to start with start then set to 0. 
If start is greater than end the params are swapped to support negative ranges.

### _.random

Produces a random number between the inclusive lower and upper bounds. 
If only one argument is provided a number between 0 and the given number is returned. 
If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer. 


## Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

## Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
