# JavaScript Arrays

# Summary

This is JS Assessment for JavaScript arrays knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions, having only the 
function name and purpose provided.

## Goals

Your solutions should be placed inside **app/arraysAnswers.js** file(inside window.arraysAnswers object).

### indexOf(array, item)

It returns the position of the `item` in the `array`. If there is no `item` found in the `array`, it returns -1.

### sum(array)

It returns the sum of all numbers in the `array`.

### copy(array)

It returns a copy of the `array`.

### remove(array, item)

It removes all occurrences of the `item` from the `array`.

### removeFromCopy(array, item)

It returns a copy of the `array` without any occurrences of the `item`.

### append(array, item)

It appends the `item` at the end of the `array`.

### appendToCopy(array, item)

It returns a copy of the `array` with the `item` appended at the end.

### truncate(array)

It removes the last item from the `array`. It returns the removed element.

### prepend(array, item)

It adds the `item` at the beginning of the `array`.

### curtail(array)

It removes the first item from the array. It returns the removed element

### concat(a, b)

It returns the new array with all items from the arrays `a` and `b`. 
i.e. a=[3,4], b=[1,2] => concat(a,b) = [3,4,1,2]

### insert(array, index, item)

It inserts the `item` to an `array` at a given `index`.
i.e. insert([1,2,3], 1, 'a') => [1,'a',2,3]

### count(array, item)

It returns the number of occurrences of the `item` in the `array`.

### duplicates(array)

It returns the array of all duplicates in an array. The order is irrelevant.
i.e. it duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]) => [1, 3, 4]

### square(array)

It returns the array where each element is the power of 2 of every element from the `array`.

### findAllOccurrences

It returns the array of indexes under which the `target` is found in the `array`.
i.e. findAllOccurrences(['a', 'b', 'c', 'b'], 'b') => [1,3]

## Before you start...

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Setup

### To install dependencies

    npm install

### JShint

To run jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    npm test

Good luck!
 
