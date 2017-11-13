# MongoDB - simple pagination

## Summary
DAO's method designed to receiving data from mongo database. There is ability to paginate data using only mongo query.

## Goal
Your goal consist in write body of DAO's search method. Use **/app/DAO/phoneDAO** file for your solution. Searching operation is performing on collection which has structure:

```
{
    model: String,
    brand: String,
    state: String
}
```

Our DAO method accepts as parameter object whose properties could be `skip` and/or `limit` which type is number.

You need to fill our DAO method in accordance to guidelines:

- it should return promise,
- structure of returning data should have structure like: `{ results: [], total: int }`,
 where results is found data and total is number of all elements in collection.


## Setup
Type `npm install` before start.

Type `grunt test` to run unit tests. Note that you have to run `mongod` on your system before running rests.
 
 Good luck!
