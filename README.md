# Javascript Function

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/functions.js** file(inside exports.asyncAnswers object).

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


## argsAsArray:

Write a function with two parameters:

    fn
    arr
    
The **fn** parameter is a function that is required to be called with multiple parameters contained in **arr** array. 
The return value should be value of **fn** called with **arr** parameters.

## speak:

Implement simple function that consumes:

    fn
    obj
    
This simple function should return a value from **fn** call with **obj** passed as parameter.

## functionFunction:

Function should accept only single parameter:

    str
    
**functionFunction** is expected to return a new function. This function should also accept a single parameter and return
the string with following pattern:

    str, <function param>

## makeClosures:

**makeClosures** function as the name suggests is all about closures and consumes:

    arr
    fn
    
This function is expected to return an array of generated functions. Those functions are expected to return a value
calculated from calling **fn** with certain **arr** parameter.

## partial:

Implement **partial** function that generate simplified version of function:

    fn
    str1
    str2
    
Generated function should accept another **str3** parameter and return value from calling **fn** with **str1**, 
**str2** and **str3** parameters.

## useArguments:

This example is a little tricky. You are about to create a function that doesn't accept any parameter, but being
called with any number of parameters it should return a sum of all available parameters.

## callIt:

Function accepts only one parameter:

    fn
    
Having **fn** as function you should be able to apply functions with arbitrary numbers of arguments, 
for e.x. calling the function as follows:

    callIt(fn, arg1, arg2, arg3)

should call a function **fn** with all the provided arguments, **arg1**, **arg2** and **arg3**.

## partialUsingArguments:

Using knowledge from **partial** and **callIt** tasks you are asked to create a function generator:

    fn
    
Just like in **callIt** function is expected to apply **fn** with arbitrary number of arguments, but this
time **partialUsingArguments** should return a new generated function and by default doesn't accept any
other parameters than **fn**(but is expected to accept any number of parameters). You also need to ensure
that newly generated function doesn't accept any parameter but having any number of arguments provided
they should be added to the actual function apply as a parameters and value returned should be equal
of that apply.

## curryIt:

Implement more advanced function accepting only single parameter:

    fn
    
This function is expected to call **fn** with required number of parameters(depending on how many parameters 
function consumes). If there are not enough arguments, function should return new function that accepts remaining parameter.
If there were still not enough parameters for this function it should return new function similar to previous, but with decreased
parameters required remaining and so on. For example:

    curryIt(fn)(a)(b)(c)
    
should return same value(calculated from fn with passed parameters) as following call:

    curryIt(fn(a, b, c))
