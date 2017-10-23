# Promise bug

## Summary

You should fix this promise broken chain.

## Goal 

We've got a function called app, that accepts 3 callbacks. Each callback returns a promise.
First, it should invoke callback A.
If A resolves it, the app should invoke B with the value resolved by A on param. 
If A rejects it, the error should be handled by C and B should not be invoked. In this case the app should return the result of C invocation. 
If both A and B resolve, the app should return the value resolved by B.
 
`app.js` contains the first attempt to solve this, but not all tests are passing. Please fix that.

## Setup

To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
