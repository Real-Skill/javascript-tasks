# Lodash training

## Summary

These are training tasks for Lodash Object. The exercise consist of a few simple tasks.
You are supposed to implement method, having only the method name and purpose provided .

## Goal

The tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.assign

It assigns own enumerable string keyed properties of the source objects to the
destination object. The source objects are applied from left to right.
Subsequent sources overwrite property assignments of the previous sources. 

### _.assignIn

It creates an array of values corresponding to the paths of the object.

### _.at1

It creates an array of values corresponding to the paths of the object.

### _.at2 

It creates an array of values corresponding to the paths of the object.

### _.defaults 
 
It assigns own and inherited enumerable string keyed properties of the source objects to the destination object for all destination properties that resolve to undefined. The source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.

### _.defaultsDeep 

This method is like _.defaults except that it recursively assigns default properties.

### _.findKey1 

This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
  

### _.findKey2 

This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.

### _.findKey3 
 
This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.

### _.findKey4 

This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.

### _.findLastKey1 

This method is like _.findKey except that it iterates over elements of a collection in the opposite order.

### _.findLastKey2 

This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
    
### _.findLastKey3 

This method is like _.findKey except that it iterates over elements of a collection in the opposite order.

### _.findLastKey4 
 
This method is like _.findKey except that it iterates over elements of a collection in the opposite order.

### _.forIn 
 
Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

### _.forInRight 

Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

### _.forOwn 
 
Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

### _.forOwnRight 

This method is like _.forOwn except that it iterates over properties of the object in the opposite order.

### _.functions 

It creates an array of function property names from own enumerable properties of the object.

### _.functionsIn 

It creates an array of function property names from own enumerable properties of the object.

### _.get1
 
It gets the value at the path of the object. If the resolved value is undefined, the defaultValue is used in its place.

### _.get2 

It gets the value at the path of the object. If the resolved value is undefined, the defaultValue is used in its place.

### _.get3 

It gets the value at the path of the object. If the resolved value is undefined, the defaultValue is used in its place.

### _.has1 

It checks if the path is a direct property of the object.

### _.has2 

It checks if the path is a direct property of the object.

### _.hasIn1 

It checks if the path is a direct or inherited property of the object.

### _.hasIn2 

It checks if the path is a direct or inherited property of the object.

### _.invert 

It checks if the path is a direct or inherited property of the object.

### _.invertBy1 

This method is like _.invert except that the inverted object is generated from the results of running each element of the object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).

### _.invertBy2 

This method is like _.invert except that the inverted object is generated from the results of running each element of the object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).

### _.invoke1 

It invokes the method at the path of the object.

### _.invoke2 

It invokes the method at the path of the object.

### _.keys 

It creates an array of the own enumerable property names of the object.

### _.keysIn 

It creates an array of the own and inherited enumerable property names of the object.

### _.mapKeys

The opposite of _.mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).

### _.mapValues1 

It creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:(value, key, object).

### _.mapValues2 
 
It creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:(value, key, object).

### _.merge 

This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

### _.mergeWith 

This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. If the customizer returns undefined, merging is handled by the method instead. The customizer is invoked with seven arguments:(objValue, srcValue, key, object, source, stack).
    
### _.omit1 

The opposite of _.pick; this method creates an object composed of the own and inherited enumerable string keyed properties of the object that are not omitted.

### _.omit2 

The opposite of _.pick; this method creates an object composed of the own and inherited enumerable string keyed properties of the object that are not omitted.

### _.omitBy 

The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of the object that predicate doesn’t return truthy for. The predicate is invoked with two arguments: (value, key).

### _.pick1 

It creates an object composed of the picked object properties.

### _.pick2 

It creates an object composed of the picked object properties.

### _.pickBy 

It creates an object composed of the object properties that predicate returns truthy for. The predicate is invoked with two arguments: (value, key).

### _.result1 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.result2 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.result3 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.result4 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.set1 

It sets the value at the path of the object. If a portion of path doesn’t exist, it’s created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.

### _.set2 

It sets the value at the path of the object. If a portion of path doesn’t exist, it’s created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.
    
### _.setWith 

This method is like _.set except that it accepts the customizer which is invoked to produce the objects of the path. If the customizer returns undefined path creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject). 
    
### _.toPairs 

It creates an array of own enumerable string keyed-value pairs for the object which can be consumed by _.fromPairs. If the object is a map or set, its entries are returned.
    
### _.toPairsIn 

It creates an array of own and inherited enumerable string keyed-value pairs for the object which can be consumed by _.fromPairs. If the object is a map or set, its entries are returned.
    
### _.transform1
 
It creates an array of own and inherited enumerable string keyed-value pairs for the object which can be consumed by _.fromPairs. If the object is a map or set, its entries are returned.


### _.transform2
 
It creates an array of own and inherited enumerable string keyed-value pairs for the object which can be consumed by _.fromPairs. If the object is a map or set, its entries are returned.

    
### _.unset1 

It removes the property at the path of the object. 
    
### _.unset2 

It removes the property at the path of the object. 

### _.update 

It removes the property at the path of the object. 

### _.updateWith 

It removes the property at the path of the object. 

### _.values 

It creates an array of the own enumerable string keyed property values of the object. 

### _.valuesIn 

It creates an array of the own enumerable string keyed property values of the object. 

## Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
