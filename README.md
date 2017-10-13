# MongoDB - simple CRUD with mongoose

## Summary
Implement data access object layer for basic CRUD operations on database using MongoDB.

## Goal
Your goal is to write a DAO layer using mongoose package. Use **/app/DAO/phoneDAO** file for your solution. The collection should have following structure:

```
{
    model: String,
    brand: String,
    state: String
}
```
 
All DAO methods should return promises. You need to implement those methods in according to following guidelines:

#### search()
*Arguments:* object with body like: `{ query: '' }`that let search by ``brand`` or ``model``; results should be sorted by property `model` ascending

*Return:* array containing all founded data

#### getDetails()
*Arguments:* id of phone

*Return:* object with all fileds of phone document

#### createNewOrUpdate()
*Arguments:* object; if id of provided document already exists in collection it should get proper document and update it; otherwise it should add new document to the collection

*Return:* object with all fields of updated/created phone document

#### removePhone()
*Arguments:* id of phone to remove

*Return:* object with all fields of removed phone document


### Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    grunt test:dev

To run verify jshint, tests and coverage:

    npm test

To run verify jshint, tests and coverage with human readable output:

    grunt --force

 
Good luck!
