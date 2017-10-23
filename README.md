# Concurrent promises bug

## Summary

Here we have an app that prepares relational data to be indexed into ElasticSearch.
The code sometimes passes and sometimes it does not. We suspect that it's related to promise concurrency. 

## Goal

We have data stored in some abstract db and here is sample data:

```
{
    type: 'people',
    id: 2,
    attributes: {
        name: 'Dilbert'
    }
},
{
    type: 'pets',
    id: 1,
    attributes: {
        name: 'Dogbert
    },
    relationships: {
        owner: {type: 'people', id: 2}
    }
}
```

As you can see, there is a collection of people and pets. Each pet has an owner, who belongs to people collection.
Our DB does not allow searching accross relationships, so in order to be able to find all pets of the user whose name is Dilbert we want to index those documents in ElasticSearch.
Our app needs only to expand relationships properly. Actual indexing will happen outside of this app.

Here is what expanded pet should look like:

```
{
    type: 'pets',
    id: 1,
    attributes: {
        name: 'Dogbert'
    },
    relationships: {
        owner: {
            type: 'people',
            id: 2,
            attributes: {
                name: 'Dilbert'
            }
        }
    }
}
```

So what we have implemented is in `app/expander.js`. For each resource type we fetch all the documents from db 
and if they have relationships, we expand them. Each fetched document is stored in `data` object, so if you know the relationship type and id you can access it
like this `data[relationshipType][relationshipId]`.

The problem is that this code works only if `people` collection is processed before `pets`.
Make the code immune to that, but keep it generic so that it's easy to add another resource type.

## Hint

Try using Bluebird.reduce function.



## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
