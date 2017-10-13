# Expressjs basics

## Summary

Basic routing, validation, middleware, error handling and redirection.

## Goal

Implement express app with the following endpoints:

    POST /dog
        when request is ok
            should respond with posted entity including generated id
            should be possible to retrieve that dog by id
        when payload is too large
            should respond with 413 status code
        when name is missing
            should respond with 400 status code
        when name is empty string
            should respond with 400 status code
        when name is 11 characters long
            should respond with 400 status code
        when owner is a number
            should respond with 400 status code
        when createDate is negative number
            should respond with 400 status code
        when owner is missing
            should respond with 200 status code
        when posting dog with id not found in db
            should respond 404 status code
        when authentication token is invalid
            should respond with 401
        when authorization header is invalid
            should respond with 401
        when authorization header is missing
            should respond with 401
        when not connected to DB
            should respond with 500
    GET /dog/:id
        when asking for non-existing id
            should respond with 404 status code
        when authentication token is invalid
            should respond with 401
        when authorization header is invalid
            should respond with 401
        when authorization header is missing
            should respond with 401
        when not connected to DB
            should respond with 500
    GET /hound/:id
        should redirect to /dog/:id
        
Static content should be served from public directory.

All requests to non-static content must be authenticated using "Bearer token" authorization strategy.
Use `app/authenticator.js` service to determine if token is valid or not.

Maximum payload size should be 70 bytes.

Sample dog JSON structure: 

    {
        "id": 123,
        "name": "Rufus",
        "owner": "Jack",
        "createDate": 123456789
    }

For saving and retrieving the entity use `app/db.js` service.



## Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
