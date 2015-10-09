# Exercise 1 

##Summary
JS Assessment tests for basic JavaScript knowledge. Each exercise consist of a few simple tasks. You have been provided with the function
 name and purpose, your job is to implement them.
 
Write your solutions inside `app/exercise1.js` file. 

##Goals

###getDescendingNumbers function

Modify **getDescendingNumbers** function:

-   **numberFrom** parameter should be a Number and it is supposed to be higher than **numberTo**
-   **numberTo** parameter should be a Number and it is supposed to be lower than **numberFrom**

Given correct parameters the function should return a String literal with ASCII representation of the numbers starting at **numberFrom** to **numberTo**(included), separated by ' ' (space). Otherwise the function should return false.


###deleteString function
Modify **deleteString** function that will allow you to delete a string from an Array of Strings. 

- **stringToDelete** - parameter should be a String that should be deleted
- **arrayOfStrings** - parameter should be an Array of Strings

 This function should return an array of the remaining Strings(or an empty array).

###stringCounter function
Modify **stringCounter** function for counting the number of String elements in an Array. 

- **customArray** - parameter should be an Array of elements

Please be aware that the Array can consist of many other elements other than Strings and the function is supposed to count only String elements. The return value should be a number of string elements in the provided Array.

###squareOdd function
Modify **squareOdd** function: 

- **customArray** - parameter should be an Array of elements


This function should square value of every Number inside of **customArray** that is an odd number and return an array with proper numbers changed, leaving the rest of items unaffected.


###areaOfTrapezoid function
Create **areaOfTrapezoid** function that will calculate the area of a trapezoid:
   
-   **a, b, h** parameters should not be negative Numbers


The formula is as provided:

    h * ( a + b ) / 2

If the parameters are incorrect the function should return false.

## Before you start...

Resolve the provided dependencies by typing in console:

    npm install

To test your solution locally, type:

    npm test

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

Good luck!
