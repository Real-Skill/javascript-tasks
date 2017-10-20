# NodeJS cyclomatic complexity

## Summary
We've got simple foo and bar modules that depend on each other. For some reason the bar cannot see `foo.getName` method.
Find out why and fix the issue.

### Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint, tests and coverage:

    npm test

To run jshint, tests and coverage with human readable output:

    grunt --force

