# NodeJS Singleton bug

## Summary

We have a date wrapper to get the current date. Normally it should always return the current date but when artificial date is set then that date should always be returned.
This is very useful for unit testing. We are instantiating this wrapper in many places of the application, but what we want is that the artifical date should be kept throughout all the instances, no matter how many times
it is instantiated. 

## Goal 

Right now, whenever we instantiate the wrapper the artificial date is lost. Please find the bug and fix the implementation so that the following tests pass:

    when dateWrapper is instantiated
        it should return the current date
      and artificial date is set
          it should return the same date despite the running time
      and another dateWrapper is instantiated
          it should return the same date despite the running time


## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
