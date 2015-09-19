# Lodash Seq training

##Summary

Training tasks for Lodash Seq. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name and purpose.

##Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.(value):

Creates a lodash object which wraps value to enable implicit method chain sequences.

### _.chain(value):

Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled.

### _.tap(value, interceptor):
 
This method invokes interceptor and returns value.

### _.thru(value, interceptor):

This method invokes interceptor and returns the result of interceptor.

### _.prototype[Symbol.iterator]:

Enables the wrapper to be iterable.

### _.prototype.at([paths]):

This method is the wrapper version of _.at.

### _.prototype.chain():

Creates a lodash wrapper instance with explicit method chain sequences enabled.

### _.prototype.commit():

Executes the chain sequence and returns the wrapped result.

### _.prototype.next():

Gets the next value on a wrapped object following the iterator protocol.

### _.prototype.plant(value):

Creates a clone of the chain sequence planting value as the wrapped value.

### _.prototype.reverse():

This method is the wrapper version of [_.reverse](https://lodash.com/docs#reverse). 

### _.prototype.value():

Executes the chain sequence to resolve the unwrapped value.

##Before you start

Read Lodash documentation at Seq section [http://lodash.com/docs](http://lodash.com/docs).

##Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force
