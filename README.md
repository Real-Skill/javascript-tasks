#MongoDB - search, sort and pagination

##Summary
Implement DAO layer responsible for retrieving data from MongoDB.

##Goal
Your goal is to write body of DAO's `search` method. Use **/app/DAO/phoneDAO** file for your solution.
Search operation will be performed on collection with following structure:

```
{
    model: String,
    brand: String,
    state: String
}
```

Our DAO method accepts as parameter object with following properties: `search, skip, limit, sortDir, sortBy` where `search` is string to search for,`sortDir`
can be set to 'ASC or 'DESC' and `sortBy` is name of field to sort by. Properties `skip` and `limit` are numbers.

You need to fill DAO method in accordance to guidelines:

- it should return promise,
- result of search (by default) should be sorted `ascending` by `_id` field and page size set to 2.
- returned data structure should be like: `{ results: [], total: int }`, where results is found data and total is number of all elements in collection.

 
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
