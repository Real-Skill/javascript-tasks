# Tailable Mongo cursor

## Summary

We need a function that would watch for inserts to MongoDB and notify us back via callback.

## Goal

Implement the tailer function that will accept 3 params: db driver, collectionName and a callback that should be invoked when a new rows arrives
(one invocation per row).

We want to be able to invoke this method many times to listen to different collections.
Keep in mind that the collections might not be prepared for tailing and it's your job to set them up.


## Setup
You need to have MongoDB. You can install it manually of if you have docker and docker-compose, run:

    docker-compose up -d

To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    yarn test

To run jshint and tests with human readable output:

    grunt --force
