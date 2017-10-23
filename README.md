# Lodash training

## Summary

These are training tasks for Lodash Util. The exercise consists of a few simple tasks.
You are supposed to implement the method, having provided only the method name and purpose.

## Goal

The tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.attempt

It attempts to invoke func, returning either the result or the found error object. Any additional arguments are provided to func when it’s invoked.

### _.constant

It creates a function that returns value.

### _.conforms

It creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, otherwise - false.

### _.flow

It creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied with the return value of the previous one.

### _.flowRight

This method is like _.flow except it creates a function that invokes the given functions from right to left.

### _.identity

This method returns the first argument it receives.

### _.matches

It creates a function that performs a partial deep comparison between the given object and the source, returning true if the given object has equivalent property values, otherwise - false.

### _.matchesProperty

It creates a function that performs a partial deep comparison between the value at the path of the given object to srcValue, returning true if the object value is equivalent, otherwise - false.

### _.method

It creates a function that invokes the method at the path of the given object.
  Any additional arguments are provided to the invoked method.

### _.methodOf

The opposite of _.method; this method creates a function that invokes the method at the given path of the object.
  Any additional arguments are provided to the invoked method.

### _.noop

A method that returns undefined.

### _.nthArg1

It creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

### _.nthArg2

It creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

### _.over1

It creates a function that invokes iteratees with the arguments; it receives and returns their results.

### _.over2

It creates a function that invokes iteratees with the arguments; it receives and returns their results.

### _.over3

It creates a function that invokes iteratees with the arguments; it receives and returns their results.

### _.overEvery1

It creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

### _.overEvery2

It creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

### _.overEvery3

It creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

### _.overSome1

It creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.

### _.overSome2

It creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.

### _.property1

It creates a function that returns the value at the path of the given object.

### _.property2

It creates a function that returns the value at the path of the given object.

### _.propertyOf1

The opposite of _.property; this method creates a function that returns the value at the given path of the object.

### _.propertyOf2

The opposite of _.property; this method creates a function that returns the value at the given path of the object.

### _.range1

It creates an array of numbers (positive and/or negative) progressing from start up to, but not including, the end.
   A step of -1 is used if a negative start is specified without an end or step. If the end is not specified,
   it is set to start with start then set to 0.

### _.range2

It creates an array of numbers (positive and/or negative) progressing from start up to, but not including, the end.
   A step of -1 is used if a negative start is specified without an end or step. If the end is not specified,
   it is set to start with start then set to 0.

### _.range3

It creates an array of numbers (positive and/or negative) progressing from start up to, but not including, the end.
   A step of -1 is used if a negative start is specified without an end or step. If the end is not specified,
   it is set to start with start then set to 0.

### _.rangeRight1

This method is like _.range except that it populates values in descending order.

### _.rangeRight2

This method is like _.range except that it populates values in descending order.

### _.rangeRight3

This method is like _.range except that it populates values in descending order.

### _.times

This method is like _.range except that it populates values in descending order.

### _.toPath

This method is like _.range except that it populates values in descending order.

### _.uniqueId1

It generates a unique ID. If the prefix is given, the ID is appended to it.

### _.uniqueId2

It generates a unique ID. If the prefix is given, the ID is appended to it.

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
