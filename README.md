# Bower dependencies

## Summary
In this task, you have to deal with package conflicts.
This app uses AngularJS, AngularUI, typeahead.js, fuelux and Angular-Bootstrap. Those libraries have transitive dependencies that may conflict with each other.

## Goal
Modify **bower.json** file so that next `bower install` does not ask any question and app works properly
When dependency conflicts are resolved correctly, you should see properly working Typeahead, Checkbox - fluent and Checkbox with buttons.

## Setup

### To install dependencies


    npm install

### To start application in live reload mode

    grunt serve
    
### Jshint
To run verify jshint:
    
    grunt jshint:default

### Run tests

To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    npm test

## Before you start, read about
[bower-how-to](http://herereadthis.com/code/bower-how-to)

Good luck!
