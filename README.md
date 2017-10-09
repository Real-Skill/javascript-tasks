#NodeJS cyclomatic complexity

##Summary
We've got simple foo and bar modules that depend on each other. For some reason bar cannot see `foo.getName` method.
Find out why and fix the issue.

###Setup
To install dependencies from package.json:

    yarb install

To run tests in development mode:

    mocha --watch

To run verify jshint, tests and coverage:

    yarn test

To run verify jshint, tests and coverage with human readable output:

    grunt --force

