# Lodash Training

## Summary

These are training tasks for Lodash Math. The exercise consists of a few simple tasks.
You are supposed to implement a method, having only the method name and purpose provided.

## Goal

The tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.add

It adds two numbers.

### _.ceil

It computes number rounded up to precision.

### _.divide

It divides two numbers.

### _.floor

It computes number rounded down to precision.

### _.max

It computes the maximum value of array. If the array is empty or falsey,
undefined is returned.

### _.maxBy

This method is like _.max except that it accepts iteratee which is
invoked for each element in array to generate the criterion
by which the value is ranked. The iteratee is invoked with one argument:
(value).

### _.mean

It computes the mean of the values in array.

### _.meanBy

This method is like _.mean except that it accepts iteratee which
is invoked for each element in array to generate the value to be averaged.
The iteratee is invoked with one argument: (value).

### _.min

It computes the minimum value of array. If the array is empty or falsey,
undefined is returned.

### _.minBy

This method is like _.min except that it accepts iteratee which
is invoked for each element in array to generate the criterion
by which the value is ranked. The iteratee is invoked with one argument:
(value).

### _.multiply

It multiplies two numbers.

### _.round

It computes a number rounded to precision.

### _.subtract

It subtracts two numbers.

### _.sum

It computes the sum of the values in array.

### _.sumBy

This method is like _.sum except that it accepts iteratee which
is invoked for each element in array to generate the value to be summed.
The iteratee is invoked with one argument: (value).


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
