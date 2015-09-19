# MongoDB text search bug

## Summary
Fix mongo search query.

## Goal
We want to use `$text` operator and search in phone **description** field for the phrase `'\'Share photos videos\' and movies'` which means 

    'Share photos videos' and ('and' or 'movies' or 'Share' or 'photos' or 'videos').
    
Unfortunately, something went wrong. Can you fix this query?

## Setup
You need to have MongoDB. You can install it manually of if you have docker and docker-compose, run:

    docker-compose up -d

To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force
