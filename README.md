# Exercise 1

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside `app/exercise1.js` file, as a properties of `window.exercise1` object.

#### Before you start...

Resolve provided dependencies by typing in console:

    npm install

To test your solution locally, type:

    npm test

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript



## Part I:

Create **getDescendingNumbers** function which should accept two parameters:

    getDescendingNumbers(numberFrom, numberTo)

-   **numberFrom** parameter should be a Number and it is supposed to be higher than numberTo
-   **numberTo** parameter should be a Number and it is supposed to be lower than numberTo

Function given correct parameters should return a String literal with ASCII representation of the numbers starting at **numberFrom** to **numberTo**(included), separated by ' ' (space).


## Part II:

Create **deleteString** function that will allow you to delete string from an Array of strings. This function should accept two parameters:

    deleteStr(stringToDelete, arrayOfStrings)

Parameters are described with the signature example above. This function should return an array of the remaining Strings(or empty array).


## Part III:

Create **stringCounter** function for counting the number of String elements in an Array. This function should accept only one parameter:

    stringCounter(customArray)

Please be aware that the Array can consist of many other elements other than String and the function is supposed to count only String elements.
The return value should be a number of string elements in the provided Array.


## Part IV:

Create **squareOdd** function that will accept an Array as a parameter:

    squareOdd(customArray)

This function should square value of every Number inside of **customArray** that is odd and return an array with proper numbers changed, leaving the rest of items unaffected.

## Part V:

Create **areaOfTrapezoid** function that will calculate trapeze square:

    areaOfTrapezoid(a, b, h)
    
-   **a, b, h** parameters should be non-negative numbers


The formula is as provided:

    h * ( a + b ) / 2


Good luck!
