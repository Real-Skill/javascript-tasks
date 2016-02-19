# Mongoose valdiation error

##Summary
Everything seems absolutely perfect, but for some reason we're getting ValidationError.
Find out why and fix the issue.

##Goal
We have simple Mongo database where we store TODOs. The schema looks like this:

```
{
    attributes: {
        name: String,
        type: String
    },
    relationships: {
        attendees: Array
    }
}
```

When we try to save following object:
```
{
    attributes: {
        name: 'Meet Tom',
        type: 'meeting'
    }
}
```
We're getting follogin exception:
```
ValidationError: event validation failed
    at Object.module.exports.createEvent (app/app.js:22:16)
    at Context.<anonymous> (test/unit/app.spec.js:28:24)
```

Do you know what the hell is wrong?

## Setup

To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force

