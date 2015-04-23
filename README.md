# Exercise 2

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/day2.js** file, as a properties of **window.day2** object.

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

Create function that will accept three parameters:

    createArrayObject(firstObject, secondObject, thirdObject)
    
This function should place every reference to object passed as parameter to a new object as a property according to the following pattern:

    firstObject -> property1, secondObject -> property2, thirdObject -> property3

The object containing all the required properties with proper references should be then returned.


## Part II

Write a function that will accept any value as a parameter:

    testIsAnyReturnFunction(condition)
    
If the **condition** will be truthy value the function should return boolean **true**. Otherwise, you are supposed to return undefined.


## Part III

Create a function that takes in an array of numbers as a parameter:

    arrayFunction(array)
    
The function should square every even number and cube every odd number. They should be returned as an array of numbers(number should retain original index in array)


## Part IV

Write a function that will accept an array of strings as **list** and few other parameters:

    swapString(list, stringToSearch, changeString)
    
**stringToSearch** parameter should be replaced with the **changeString** string inside of the provided array. When achieved the requirements you are supposed to return the corrected array


## Part V

Create a function that takes in an array as a parameter:

    multiplyElementOfArray(array)
    
The function should multiply by 3 every even number and multiply by 4 every odd number in the array. Moreover, it should use an array of function expressions to achieve the results.
Return value should an array of numbers(number should retain original index in array). Elements other than numbers should remain unaffected.


## Part VI

Create a function that takes in an array as a parameter:

    maxArray(array)
    
**maxArray** function should find and return maximum number from the Number type elements contained in the **array**.


## Part VII:

Write a function that will accept an array of objects and a name String as a parameter:

    getObject(list, name)

Every object should have **name** property defined as String. The function should return the object that has the same value contained in **name** property as
the function second parameter. If there are no such object on the list, it should return boolean false value.


## Part VIII:

Write a function that will accept an array of people (objects):

    doAdult(peopleArray)
    
Function should modify every person on the list which has the age property less than 18 (Number). This person should have new value of 18 (Number) assigned to the age property.
There should be no return value, but instead the original **peopleArray** should be modified.

## Part IX:

Create a **findTheBiggerBox** function accepting three basic parameters:

    findTheBiggerBox(x, y, z)
    
Each parameter should represent the box size along certain axis(as the parameter name suggests). Function should calculate capacity of three boxes
using separate inner function with the provided dimensions:

    boxX:
        bX = 3 * x
        bY = y
        bZ = z
    boxY:
        bX = x
        bY = y * y
        bZ = z
    boxZ:
        bX = x
        bY = y
        bZ = y + z
        

Assuming that **x, y, z** are correct Number parameters the function should return number of the box that have had the maximum capacity upon calculation
(boxX -> 1, boxY -> 2, boxZ = 3), otherwise it should return false.


## Part X:

Write a function that will allow us to create a **human** object:

    makePerson(firstName, lastName, age)
    
This function should accept three parameters with semantically meaning just as the signature name suggests. The return value should be an object with
properties **firstName**, **lastName** and **age** set to the value of parameters passed to the function(according to the names).


## Part XI:

Write a function that will accept a String:

    invertString(str)
    
The **str** parameter should be a String value. The function should also return a String value of **str** but in reverse (ex. var -> rav).
If the **str** parameter value is incorrect function should return false.


## Part XII:


Write the **factorial** function that will accept an Number as parameter:

    factorial(num)
    
This function should calculate factorial of every number till the **num** value and they should be returned as array of numbers.


## Part XIII:

Write a function that will accept an object with multiple properties containing numbers:

    sumObject(objectWithNumbers)
    
It should add every property of **objectWithNumbers** and return the sum of all those properties.



