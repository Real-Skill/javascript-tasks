# Javascript Logical Operators

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/modules.js** file(inside exports.modulesAnswers object).

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


## createModule:

Create simple module consuming two strings:

    str1
    str2
    
**createModule** should return new module with three properties:

    name: str2
    greeting: str1
    sayIt: Function
    
**sayIt** function is expected to return new string in the following pattern:

    <greeting>, <name>

