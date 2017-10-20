# Lodash training

## Summary

These are training tasks for Lodash Collection. The exercise consists of a few simple tasks.
You are supposed to implement a method, having only the method name
and purpose provided.

## Goal

The tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.countBy

It creates an object composed of keys generated from the results of running each 
element of collection thru iteratee. The corresponding value of each key is the 
number of times the key was returned by iteratee.
The iteratee is invoked with one argument: (value).

### _.every

It checks if the predicate returns truthy for all elements of the collection. 
Iteration is stopped once the predicate returns falsey. The predicate
is invoked with three arguments: (value, index|key, collection).

### _.filter

It iterates over elements of the collection, returning an array of all elements the predicate returns truthy for. 
The predicate is invoked with three arguments: (value, index|key, collection).

### _.find

It iterates over elements of the collection, returning the first element predicate returns truthy for.
The predicate is invoked with three arguments: (value, index|key, collection).

### _.groupBy

It creates an object composed of keys generated from the results of running each element of the collection thru iteratee.
The order of grouped values is determined by the order they occur in the collection.
The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

### _.includes

It checks if the value is in the collection. If the collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons.
If fromIndex is negative, it's used as the offset from the end of the collection.

### _.map

It creates an array of values by running each element in the collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

### _.partition

It creates an array of elements split into two groups, the first of which contains elements the predicate returns truthy for, the second of which 
contains elements the predicate returns falsey for. The predicate is invoked with one argument: (value).

### _.reduce

It reduces the collection to a value which is the accumulated result of running each element in the collection thru iteratee, where each successive invocation is
supplied with the return value of the previous. If accumulator is not given, the first element of the collection is used as the initial value. 
The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).

### _.sortBy

It creates an array of elements, sorted in ascending order by the results of running each element in the collection thru each iteratee.
This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).


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
