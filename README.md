#Lodash training

##Summary

Training tasks for Lodash Collection. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name
and purpose.

##Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.countBy

Creates an object composed of keys generated from the results of running each 
element of collection thru iteratee. The corresponding value of each key is the 
number of times the key was returned by iteratee.
The iteratee is invoked with one argument: (value).

### _.every

Checks if predicate returns truthy for all elements of collection. 
Iteration is stopped once predicate returns falsey. The predicate
is invoked with three arguments: (value, index|key, collection).

### _.filter

Iterates over elements of collection, returning an array of all elements predicate returns truthy for. 
The predicate is invoked with three arguments: (value, index|key, collection).

### _.find

Iterates over elements of collection, returning the first element predicate returns truthy for.
The predicate is invoked with three arguments: (value, index|key, collection).

### _.groupBy

Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
The order of grouped values is determined by the order they occur in collection.
The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

### _.includes

Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons.
If fromIndex is negative, it's used as the offset from the end of collection.

### _.map

Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

### _.partition

Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which 
contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).

### _.reduce

Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is
supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. 
The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).

### _.sortBy

Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).


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
