# Promisie bug

## Summary

Fix promise broken chain.

## Goal 

We've got a function called app, that accepts 3 callbacks. Each callback returns promise.
First it should invoke callback A.
If A resolves, app should invoke B with on param, the value resolved by A. 
If A rejects, the error should be handled by C and B should not be invoked. In this case app should return result of C invocation. 
If both A and B resolve, app should return value resolved by B.
 
`app.js` contains a first attempt to solve this, but not all tests are passing. Please fix that.

## Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
