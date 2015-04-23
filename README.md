# Exercise 3

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/day3.js** file, (most of them as a properties of **window.day3** object).

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

## Part I

You have been asked to add **countVowels** function to the String prototype. This function should calculate all the vowels in any string.

## Part II

You next task is to add **arrayToString** function to the array prototype, allowing anyone to concatenate every element of an array to the String value.
It should concatenate any kind of value and separate every array element with ' ' (space).

## Part III

By using the **+** operator you are able to add any two Number values. You are asked to provide similar functionality but
by extending the Number prototype of **addNumber** function that will consume a Number and add it to the actual Number. Example usage:

    var n = 18;
    n.addNumber(10)
    
## Part IV

Add **maxValueFromTwoArguments** function to the Number prototype that will accept two arguments:

    maxValueFromTwoArguments(arg0, arg1)
    
This function is supposed to return maximum value of given arguments or the Number itself(if it is higher than both of the arguments).


## Part V

You are given an example Book object:

    book: 
    {
        title: "Kot w butach",
        author: "Jan Kowalski",
        numPages: 149,
        comments: "Good book!",
    }

Add **delProperty** function to the book object allowing deletion of certain parameter given as function parameter:

    delProperty(property)
    
The function should return reference to the same object without the given property.


## Part VI

Write a function that will accept an object as a parameter:

    propertyNames(customObject)
    
The function should return an array of arrays defined as follows:

    [[propertyName, propertyValue], ...]
    
**propertyName** should be an actual property of **customObject** and **propertyValue** should be its value.
You should return all the properties of **customObject**. If there are no properties in the object then the function should just return an empty array.


## Part VII

Create a function that copy object properties from one to another. The method signature should be as follows:

    mergeObject(mergeTo, mergeFrom)
    
The function should only accept objects. **mergeTo** with own properties and **mergeFrom** properties(and of course references or values)
should be returned if the conditions are met. Otherwise, function should just return a boolean false value.


## Part VIII

Create a function that will count the occurrence of a letter inside every property of an object. This function should have following signature:

    countCharInProperties(object, letter)
    
The **object** argument can be any object and letter should be just a letter string literal. Please be aware that function needs to be case independent
(ex. letter can be either 'A' or 'a'). 

## Part IX

Create a **getWidth** function that accepts an object of Box objects as properties:

    getWidth(boxList)
    
The sample Box object is defined as follows:

    box: {
        height: 10, 
        width: 5, 
        length: 5
    }

**getWidth** function should return an array of Strings containing the following formula:

    <boxPropertyName>: <box.width>
    
**boxPropertyName** expression is a name of the property inside of **boxList** that the box is attached to. The expression **box.width**
represent the actual value of certain box property called **width** (as in sample box example).


## Part X

Create a **getVolume** function that accepts an object of Box objects as properties:

    getWidth(boxList)
    
The sample Box object is defined as follows:

    box: {
        height: 10, 
        width: 5, 
        length: 5
    }

**getVolume** function should return an array of Strings containing the following formula:

    <boxPropertyName> volume: <volume>
    
**boxPropertyName** expression is a name of the property inside of **boxList** that the box is attached to. The expression **volume**
represent the value of the box capacity (calculated from the box properties semantically meaning the properties of a standard box).


## Part XI

Create a **getVolume** function that accepts an object of Box objects as properties:

    getWidth(boxList)

The sample Box object is defined as follows:

    box: {
        height: 10,
        width: 5,
        length: 5
    }

**getVolume** function should return an array of Strings containing the following formula:

    <boxPropertyName> volume: <volume>

**boxPropertyName** expression is a name of the property inside of **boxList** that the box is attached to. The expression **volume**
represent the value of the box capacity (calculated from the box properties semantically meaning the properties of a standard box).

## Part XII

Create a **getMaxVolume** function that accepts an object of Box objects as properties:

    getWidth(boxList)
    
The sample Box object is defined as follows:

    box: {
        height: 10, 
        width: 5, 
        length: 5
    }

**getMaxVolume** function should return an max **volume** Number. The **volume** represent the value of the box capacity (calculated from the box properties 
semantically meaning the properties of a standard box).

## Part XIII

Write a function that will allow you to change property name in the object:

    changePropertyName(object, propertyToChange, newName)
    
The signature above accepts **object** as an object in which property should be changed, as well as **propertyToChange** name along with the **newName**
for the property. The function should return a boolean true value if the property was changed(**propertyToChange** existed and it was changed) and boolean false otherwise.


## Part XIV

Create a **makeObject** function that will consume an two dimensional array:

    makeObject(twoDimArray)
    
The **twoDimArray** should be an array of two-element arrays as following:

    [[propertyName, propertyValue], ...]
    
**makeObject** function should return an object with all elements from **twoDimArray** as object properties (using **propertyName** as name and **propertyValue** as value).
