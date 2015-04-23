# Javascript Arrays

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/arrays.js** file(inside exports.arraysAnswers object).

#### Before you start...

Resolve provided dependencies by typing in console:

    npm install
    bower install

To test your solution locally, type:

    npm start
    
or

    npm test

JavaScript basic functions:

    http://www.w3schools.com/jsref/
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript



## indexOf:

Implement **indexOf** function that will accept two parameters:

    array
    item

**array** parameter should accept an array, while **item** could be any object. This function should return the position that the **item**
is assigned to in **array**. If there were no such elements, this function should return -1.

## sum:

Function **sum** is accepting sole parameter:

    array
    
It should contain an array of numbers. **sum** function is expected to return sum of all the elements in the **array**.


## remove:

**remove** function is a simple function that also accept:

    array
    item
    
This function should return an array containing all the items in **array**, except **item**.

## removeWithoutCopy:

**removeWithoutCopy** function is a more advanced version of **remove** accepting the same parameters:

    array
    item
    
This function should remove **item** element from **array** if it is contained within, and then be returned.

## append:

**append** function that accepts:

    array
    item
    
This function should add **item** to at the end of **array** and then be returned.

## truncate:

Implement **truncate** function:

    array

**truncate** should remove last item from the **array** and then return the **array** one element shorter.

## prepend:

Implement **prepend** function that accepts:

    array
    item

As the name suggests **prepend** function should add **item** element at the beginning of **array**. 
Having element added, function should return **array** with new values.

## curtail:

**curtail** function accepting the sole parameter:

    array

This function should remove first element of **array** and return remaining elements.

## concat:

**concat** function accepts two parameters:

    arr1
    arr2

It should concatenate **arr1** and **arr2** and return the concatenated.

## insert:

Function **insert** accepts several parameters:

    arr
    item
    index

The **arr** is an array to add the **item** to. The last parameter, **index** is an position in array to add the **item** to.
This function should return **arr**.

## count:

**count** accepts:

    arr
    item

Having **arr** parameter as an array, this function is supposed to return the count of occurrences of **item** in **arr**.

## duplicates:

**duplicates** accepts:

    arr
    item

Having **arr** parameter as an array, this function is supposed to return the count of occurrences of **item** in **arr**.

## square:

**square** function that accepts:

    arr

This function is expected to calculate and return the power of 2 of every element from **arr** array. Result should be an array of numbers.

## findAllOccurrences:

Implement **findAllOccurrences** function as follows:

    arr
    target

Having **arr** as array of strings you should find positions of **target** element in **arr** itself. For example if you were to use ['a', 'b', 'c', 'b']
as an **arr** and `b` as **target** you are supposed to return an array as follows: [1, 3] meaning that **target** occurs in second and fourth element
of array, starting from 0.

