# JavaScript Arrays

# Summary

JS Assessment for JavaScript arrays knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only the 
function name and purpose.

## Goals

Your solutions should be placed inside **app/arraysAnswers.js** file(inside window.arraysAnswers object).

### indexOf(array, item):

Returns the position of `item` in `array`. If there no `item` is found in `array`, returns -1.

### sum(array):

Returns sum of all numbers in the `array`.

### copy(array):

Returns copy of `array`.

### remove(array, item):

Remove all occurrences of `item` from `array`.

### removeFromCopy(array, item):

Returns a copy of `array` without any occurrences of `item`.

### append(array, item):

Append `item` at the end of `array`.

### appendToCopy(array, item):

Returns a copy of `array` with `item` appended at the end.

### truncate(array):

Removes last item from `array`. Returns removed element.

### prepend(array, item):

Adds `item` at the beginning of `array`.

### curtail(array):

Removes first item from array. Returns removed element

### concat(a, b):

Returns new array with all items from arrays `a` and `b`. 
i.e. a=[3,4], b=[1,2] => concat(a,b) = [3,4,1,2]

### insert(array, index, item):

Inserts `item` to an `array` at given `index`.
i.e. insert([1,2,3], 1, 'a') => [1,'a',2,3]

### count(array, item):

Reeturns number of occurrences of `item` in `array`.

### duplicates(array):

Returns array of all dupplicates in arrray. Order is irrelevant.
i.e. duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]) => [1, 3, 4]

### square(array):

Returns array where each element is the power of 2 of every element from `array`.

### findAllOccurrences:

Returns array of indexes under which `target` is found in `array`.
i.e. findAllOccurrences(['a', 'b', 'c', 'b'], 'b') => [1,3]

## Before you start...

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Setup

### To install dependencies

    yarn install

### JShint

To run verify jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    yarn test

Good luck!
 
