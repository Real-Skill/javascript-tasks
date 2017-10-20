# Lodash Seq training

## Summary

These are training tasks for Lodash Seq. The exercise consists of a few simple tasks.
You are supposed to implement a method, having  only the method name and purpose provided.

## Goal

These tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.(value)

It creates a lodash object which wraps value to enable implicit method chain sequences.

### _.chain(value)

It creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled.

### _.tap(value, interceptor)
 
This method invokes interceptor and returns the value.

### _.thru(value, interceptor)

This method invokes interceptor and returns the result of the interceptor.

### _.prototype[Symbol.iterator]

It enables the wrapper to be iterable.

### _.prototype.at([paths])

This method is the wrapper version of _.at.

### _.prototype.chain()

It creates a lodash wrapper instance with explicit method chain sequences enabled.

### _.prototype.commit()

It executes the chain sequence and returns the wrapped result.

### _.prototype.next()

It gets the next value on a wrapped object following the iterator protocol.

### _.prototype.plant(value)

It creates a clone of the chain sequence planting value as the wrapped value.

### _.prototype.reverse()

This method is the wrapper version of [_.reverse](https://lodash.com/docs#reverse). 

### _.prototype.value()

It executes the chain sequence to resolve the unwrapped value.

## Before you start

Read Lodash documentation at Seq section [http://lodash.com/docs](http://lodash.com/docs).

## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
