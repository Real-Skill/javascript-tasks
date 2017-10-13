# Lodash training

## Summary

Training tasks for Lodash Math. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name and purpose.

## Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.add

Adds two numbers.

### _.ceil

Computes number rounded up to precision.

### _.divide

Divide two numbers.

### _.floor

Computes number rounded down to precision.

### _.max

Computes the maximum value of array. If array is empty or falsey,
undefined is returned.

### _.maxBy

This method is like _.max except that it accepts iteratee which is
invoked for each element in array to generate the criterion
by which the value is ranked. The iteratee is invoked with one argument:
(value).

### _.mean

Computes the mean of the values in array.

### _.meanBy

This method is like _.mean except that it accepts iteratee which
is invoked for each element in array to generate the value to be averaged.
The iteratee is invoked with one argument: (value).

### _.min

Computes the minimum value of array. If array is empty or falsey,
undefined is returned.

### _.minBy

This method is like _.min except that it accepts iteratee which
is invoked for each element in array to generate the criterion
by which the value is ranked. The iteratee is invoked with one argument:
(value).

### _.multiply

Multiply two numbers.

### _.round

Computes number rounded to precision.

### _.subtract

Subtract two numbers.

### _.sum

Computes the sum of the values in array.

### _.sumBy

This method is like _.sum except that it accepts iteratee which
is invoked for each element in array to generate the value to be summed.
The iteratee is invoked with one argument: (value).


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
