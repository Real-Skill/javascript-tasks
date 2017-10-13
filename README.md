# Concurrent promises bug

## Summary

We have an app that prepares relational data to be indexed into ElasticSearch.
The code sometimes passes and sometimes not. We suspect that it's related to promise concurrency. 

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

As you can see there is a collection of people and pets. Pets have owner, which is belongs to people collection.
Our DB does not allow searching accross relationships, so in order to be able to find all pets of user who's name is Dilbert we want to index those documents in ElasticSearch.
Our app needs only to exped relationships properly. Actuall indexing will happen outside of this app.

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

So our what we've got implemented is in `app/expander.js`. For each resource type we fetch all the documents from db 
and if they have relationships we expand them. Each fetched document is stored in `data` object, so if you know relationship type and id you can access it
like this `data[relationshipType][relationshipId]`.

The problem is that this code works only if `people` collection is processed before `pets`.
Make the code immune to that, but keep it generic so that it's easy to add another resource type.

## Hint

Try using Bluebird.reduce function.



## Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
