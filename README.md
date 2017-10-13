# Lodash training

## Summary

Training tasks for Lodash Util. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name and purpose.

## Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.attempt

Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it’s invoked.

### _.constant

Creates a function that returns value.

### _.conforms

Creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false.

### _.flow

Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.

### _.flowRight

This method is like _.flow except that it creates a function that invokes the given functions from right to left.

### _.identity

This method returns the first argument it receives.

### _.matches

Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.

### _.matchesProperty

Creates a function that performs a partial deep comparison between the value at path of a given object to srcValue, returning true if the object value is equivalent, else false.

### _.method

Creates a function that invokes the method at path of a given object.
  Any additional arguments are provided to the invoked method.

### _.methodOf

The opposite of _.method; this method creates a function that invokes the method at a given path of object.
  Any additional arguments are provided to the invoked method.

### _.noop

A method that returns undefined.

### _.nthArg1

Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

### _.nthArg2

Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

### _.over1

Creates a function that invokes iteratees with the arguments it receives and returns their results.

### _.over2

Creates a function that invokes iteratees with the arguments it receives and returns their results.

### _.over3

Creates a function that invokes iteratees with the arguments it receives and returns their results.

### _.overEvery1

Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

### _.overEvery2

Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

### _.overEvery3

Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

### _.overSome1

Creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.

### _.overSome2

Creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.

### _.property1

Creates a function that returns the value at path of a given object.

### _.property2

Creates a function that returns the value at path of a given object.

### _.propertyOf1

The opposite of _.property; this method creates a function that returns the value at a given path of object.

### _.propertyOf2

The opposite of _.property; this method creates a function that returns the value at a given path of object.

### _.range1

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
   A step of -1 is used if a negative start is specified without an end or step. If end is not specified,
   it’s set to start with start then set to 0.

### _.range2

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
   A step of -1 is used if a negative start is specified without an end or step. If end is not specified,
   it’s set to start with start then set to 0.

### _.range3

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
   A step of -1 is used if a negative start is specified without an end or step. If end is not specified,
   it’s set to start with start then set to 0.

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

Generates a unique ID. If prefix is given, the ID is appended to it.

### _.uniqueId2

Generates a unique ID. If prefix is given, the ID is appended to it.

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