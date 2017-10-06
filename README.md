#XHR bug

##Summary

We are 100% positive that request returns 100 but for some reason the condition that expects it, fails.

##Goal

There is an ExpressJS app and we use one endpoint to query some abstract "progress".
We have a client library that hits that endpoint and returns true if progress is equall to 100; false othervise;
Please find out why tests are failing.


##Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
