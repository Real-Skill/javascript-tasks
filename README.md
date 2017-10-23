# NodeJS Singleton bug

## Summary

We have `db` service that serves as in-memory database. It is a single method which, when invoked, returns interface to save the entity or to get all entities from db.
We want to instantiate the db separately for each different entity type we want to store (so that we do not store dogs and cats in the same db).

## Goal 

Please find the bug and fix the implementation so that the following tests pass:

    when dog db is created
        db should be empty
      and dog is added
          should return dog with generated id
        and cat db is created
            cat db should be empty
            dog db should NOT be empty


## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
