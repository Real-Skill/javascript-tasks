# Redis ERR invalid DB index

## Summary

Make that annoying error disappear.

## Goal 

We've got a redis wrapper that accepts connection url as parameter and return promisified wrapper.
The problem is that there are some strange logs in console about error:
```
Unhandled rejection Error: ERR invalid DB index
```
Please inspect that and try to get rid of that error.

You may only modify `redisWrapper.js`.

## Setup
You need to have Redis. You can install it manually of if you have docker and docker-compose, run:

    docker-compose up -d
    
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force
