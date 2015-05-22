#MongoDB - simple CRUD queries

##Summary
DAO layer serving to perform CRUD operations on database using MongoDB.

##Goal
Your goal is to write a DAO layer using MongoDB queries. Use **/app/DAO/phoneDAO** file for your solutions. Operations are performing on collection which has structure:

```
{
    model: String,
    brand: String,
    stan: String
}
```
 
All DAO methods should return promise. You need to fill this methods in accordance to guidelines:

####search()
*Arguments:* object with body like: `{ query: '' }` where under `query` property is string to search for

*Return:* array containing all founded data.

####getDetails()
*Arguments:* id of phone existing in collection;

*Return:* object with all fields of phone element.

####createNewOrUpdate()
*Arguments:* object; if id of provided element already exist in collection it should get proper element and update it; otherwise it should add new element to collection

*Return:* object with all fields of phone element.

####removePhone()
*Arguments:* id of phone to remove from collection

*Return:* object with all fields of removed phone element.



##Setup
Run `npm install` before start.

Run `grunt test` to run unit tests. Note that you have to run `mongod` on your system before running rests.

 
 
 Good luck!