# XHR bug

## Summary

We are 100% positive that the request returns 100 but for some reason the condition that expects such return, fails.

## Goal

This is the ExpressJS app and we use one endpoint to query some abstract "progress".
We have a client library that hits that endpoint and returns true if the progress is equall to 100; false othervise;
Please find out why the tests are failing.


## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
