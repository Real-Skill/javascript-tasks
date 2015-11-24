#NodeJS Singleton bug

##Summary

We have a date wrapper to get current date. Normally it should always return current date but when artificial date is set then that date should always be returned.
This is very useful for unit testing. We are instantiating this wrapper in many places of the application, but what we want is to no matter how many times
it is instantiated the artifical date should be kept throughout all the instances. 

##Goal 

Right now whenever we instantiate the wrapper the artificial date is lost. Please find the bug and fix the implementation so that following tests pass:

    when dateWrapper is instantiated
        should return current date
      and artificial date is set
          should return the same date despite running time
      and another dateWrapper is instantiated
          should return the same date despite running time


##Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force
