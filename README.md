# Javascript Objects

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/objects.js** file(inside exports.objectsAnswers object).

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


## alterContext:

Implement **alterContext** function:

    fn
    obj
    
This function should call **fn** function from another context. Given **obj**, function should make use of **obj** fields instead
of component **fn** depends on to.

## alterObjects:

**alterObjects** function should accept two parameters:

    constructor
    greeting
    
It is expected that this function should change **constructor** that every object created by it have their greeting property changed
to a new **greeting**. Already existing objects derived from **constructor** should also have their properties changed.

## iterate:

Create **iterate** function for iterating objects:

    obj
    
This function should iterate through object properties and return them as strings in array in the following pattern:

    ['<property>: <property value>', ...]

