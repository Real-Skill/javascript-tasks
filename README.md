# JavaScript FlowControl

## Summary

This is JS Assessment for JavaScript flow control knowledge. The exercise consists of a few simple tasks. You are supposed to implement functions, having only 
the function name and purpose provided.

## Goals

Your solutions should be placed inside **app/flowControl.js** file(inside window.flowControlAnswers object).

### fizzBuzz(number)

Write a function that receives one parameter and:    

- if the number is divisible by 3, the function should return 'fizz'
- if the number is divisible by 5, the function should return 'buzz';
- if the number is divisible by 3 and 5, the function should return `fizzbuzz`;
- if the number is not divisible by 3 or 5, the function should return that number;
- if the parameter is not a number it should return false

### whileLoop(iterator)

It returns the number of elements available through `iterator` where iterator is a function returning next available element.
If no more elements are available, the `iterator` returns `null`.

### forLoop(start, end)

It returns an array of numbers between `start` (inclusive) and `end` (exclusive).
i.e.: forLoop(100,102) => [100, 101]

### exceptions(array)

It returns the sum of elements in an array. If any element of the array is not a number an exception should be thrown with a message according to the folowing pattern:

    Item at index {index} is not a number
    
i.e. if the first element of the array is not a number the message should be:

    Item at index 0 is not a number
    

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
 
