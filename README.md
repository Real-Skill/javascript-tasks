# JavaScript FlowControl

## Summary

JS Assessment for JavaScript flow control knowledge. The exercise consist of a few simple tasks. You are supposed to implement functions, having provided only 
the function name and purpose.

## Goals

Your solutions should be placed inside **app/flowControl.js** file(inside window.flowControlAnswers object).

### fizzBuzz(number):

Write a function that receives one parameter and:    

- if the number is divisible by 3, the function should return 'fizz'
- if the number is divisible by 5, the function should return 'buzz';
- if the number is divisible by 3 and 5, the function should return `fizzbuzz`;
- if the number is not divisible by 3 nor 5, the function should return that number;
- if parameter is not a number it should return false

### whileLoop(iterator)

Returns number of elements available through `iterator` where iterator is a function returning next available element.
If no more element is available `iterator` returns `null`.

### forLoop(start, end)

Returns array of numbers between `start` (inclusive) and `end` (exclusive).
i.e.: forLoop(100,102) => [100, 101]

### exceptions(array)

Returns sum of elements in array. If any element of array is not a number an exception should be thrown with message according to folowing pattern:

    Item at index {index} is not a number
    
i.e. if first element of array is not a number the message should be:

    Item at index 0 is not a number
    

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
 
