#MongoDB - simple pagination

##Summary
Backend app supporting pagination.

Application has got already configured endpoints for CRUD operations and three DAO methods. We need DAO's find method to be configured in a way that would allow to paginate data depending on received query.


##Goal
Your goal is to write body of DAO's find method. Possible properties of query params are:

``` skip, limit ```

where `skip` and `limit` can be positive signed numbers.
By default request for data should return only one, first record from collection.
Structure of response.body should be like:

```{ result: [], total: x }```

where under `result` are returned data and under `total` are number of all records in collection.


##Documentation
* [mongoose](http://mongoosejs.com/)
 
##Setup
Run `npm install` before start.

Run `grunt test` to run unit tests. Note that you have to run `mongod` on your system before running rests.
 
 
 Good luck!
 