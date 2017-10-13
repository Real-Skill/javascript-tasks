# Promisify

## Summary

Promisify standard NodeJS callback hell.

## Goal 

We've got a working app, but we don't like that callback hell. Please rewrite it to use promises.

There are some tests for current app in `oldApp.spec.js` file which you can remove once new app conforms to `app.spec.js`.

## Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
