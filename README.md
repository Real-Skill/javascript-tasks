#Lodash training

##Summary

Training tasks for Lodash Object. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name and purpose.

##Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.assign

Assigns own enumerable string keyed properties of source objects to the
destination object. Source objects are applied from left to right.
Subsequent sources overwrite property assignments of previous sources. 

### _.assignIn

Creates an array of values corresponding to paths of object.

### _.at1

Creates an array of values corresponding to paths of object.

### _.at2 

Creates an array of values corresponding to paths of object.

### _.defaults 
 
Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.

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

This method is like _.forOwn except that it iterates over properties of object in the opposite order.

### _.functions 

Creates an array of function property names from own enumerable properties of object.

### _.functionsIn 

Creates an array of function property names from own enumerable properties of object.

### _.get1
 
Gets the value at path of object. If the resolved value is undefined, the defaultValue is used in its place.

### _.get2 

Gets the value at path of object. If the resolved value is undefined, the defaultValue is used in its place.

### _.get3 

Gets the value at path of object. If the resolved value is undefined, the defaultValue is used in its place.

### _.has1 

Checks if path is a direct property of object.

### _.has2 

Checks if path is a direct property of object.

### _.hasIn1 

Checks if path is a direct or inherited property of object.

### _.hasIn2 

Checks if path is a direct or inherited property of object.

### _.invert 

Checks if path is a direct or inherited property of object.

### _.invertBy1 

This method is like _.invert except that the inverted object is generated from the results of running each element of object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).

### _.invertBy2 

This method is like _.invert except that the inverted object is generated from the results of running each element of object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).

### _.invoke1 

Invokes the method at path of object.

### _.invoke2 

Invokes the method at path of object.

### _.keys 

Creates an array of the own enumerable property names of object.

### _.keysIn 

Creates an array of the own and inherited enumerable property names of object.

### _.mapKeys

The opposite of _.mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).

### _.mapValues1 

Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:(value, key, object).

### _.mapValues2 
 
Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:(value, key, object).

### _.merge 

This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

### _.mergeWith 

This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. If customizer returns undefined, merging is handled by the method instead. The customizer is invoked with seven arguments:(objValue, srcValue, key, object, source, stack).
    
### _.omit1 

The opposite of _.pick; this method creates an object composed of the own and inherited enumerable string keyed properties of object that are not omitted.

### _.omit2 

The opposite of _.pick; this method creates an object composed of the own and inherited enumerable string keyed properties of object that are not omitted.

### _.omitBy 

The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn’t return truthy for. The predicate is invoked with two arguments: (value, key).

### _.pick1 

Creates an object composed of the picked object properties.

### _.pick2 

Creates an object composed of the picked object properties.

### _.pickBy 

Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).

### _.result1 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.result2 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.result3 

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.result4 

 This method is like _.get except that if the resolved value is a function it’s invoked with the this binding of its parent object and its result is returned.

### _.set1 

Sets the value at path of object. If a portion of path doesn’t exist, it’s created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.

### _.set2 

 Sets the value at path of object. If a portion of path doesn’t exist, it’s created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.
    
### _.setWith 

This method is like _.set except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject). 
    
### _.toPairs 

Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.
    
### _.toPairsIn 

Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.
    
### _.transform1
 
Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.


### _.transform2
 
Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.

    
### _.unset1 

Removes the property at path of object. 
    
### _.unset2 

Removes the property at path of object. 

### _.update 

Removes the property at path of object. 

### _.updateWith 

Removes the property at path of object. 

### _.values 

Creates an array of the own enumerable string keyed property values of object. 

### _.valuesIn 

Creates an array of the own enumerable string keyed property values of object. 

##Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

##Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
