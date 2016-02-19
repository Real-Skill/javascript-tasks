# Mongoose custom valdiation

##Summary
Our car dealer wants to forbid it's staff to order any pink cars.
The only exception is "Pink Cadillac", it's probably because of that song he's heard on the radio.

##Goal
Implement mongoose validation to make our dealer happy.

We store cars in MongoDb using Mongoose and the schema looks like this:
```
{
    brand: String,
    color: String
}
```

So make sure no pink Ferraris or other brands (except for Cadillac) don't get into our database. 

## Setup

To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force

