#NodeJS - simple pagination

##Summary
Pagination with mongoDB in ExpressJS.

We've got simple app where user can do a CRUD operations on a phone book, but server sending all data in database, please write pagination.


##Goal
Your task is write pagination to endpoint `GET /api/phones`, default settings server should sent only first record in database. When in request have query params
**skip** and **limit** should pagination records and sent under property **results** and under property **total** sent how many records in database.
There are already some routes and business objects configured.

##API

```
GET /api/phones[...]
```

##Documentation
* [mongoose](http://mongoosejs.com/)
 
##Setup
`npm test` to run tests (when You run start test you must switch off application, the tests automatically run the server)

`npm start` to run the app
