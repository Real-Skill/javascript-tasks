#MongoDB - simple CRUD queries

##Summary
CRUD application in ExpressJS using MongoDB.
 
There are API provided which are handling all CRUD requests and running appropriate DAO methods. All endpoints should have response.body structure like:

```
{results: data}
```

where `data` is appropriate data returning by DAO methods.

##Goal
Your goal is to write a DAO layer using MongoDB queries. Use **/app/DAO/phoneDAO** file for your solutions.
  
##API

###Get all records in database
```
GET /api/phones
```

###Create or update record in database
```
POST /api/phones
```

###Get one record in database
```
GET /api/phones/:id
```

###Remove record
```
DELETE /api/phones/{}
```

##Setup
Run `npm install` before start.

Run `grunt test` to run unit tests. Note that you have to run `mongod` on your system before running rests.

 
 
 Good luck!