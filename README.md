#MongoDB - search, sort and pagination

##Summary
Implement DAO layer responsible for retrieving data from MongoDB.

##Goal
Your goal is to write `search` method using the **/app/DAO/phoneDAO** file as your solution.
The search operation will be performed on the collection with the following structure:

```
{
    model: String,
    brand: String,
    state: String
}
```

Our DAO method accepts the parameter object with following properties: `search, skip, limit, sortDir, sortBy` where `search` is a string to search for,
`sortDir`can be set to 'ASC or 'DESC' and `sortBy` is name of the field to sort by. Properties `skip` and `limit` should be a number.

You need to fill DAO method in accordance to the guidelines:

- it should return a promise,
- the result of the search (by default) should be sorted `ascending` by `_id` field and return two elements,
- returned data structure should be like: `{ results: [], total: int }`, where `results` are found data and `total` is a number of all elements in 
the collection.

 ##Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint, tests and coverage:

    npm test

To run verify jshint, tests and coverage with human readable output:

    grunt --force


Good luck!
