##Exercise 46: Unit Testing Directive Scope
Your task is to test the two directives: **enter** and **leave**. Complete test cases.

###Requirements
* check whether the **mouseenter** event add to the **circle** element **bg-danger** class
* check whether the **mouseleave** event remove class
* to call the events instead of ```browserTrigger(element,'click')``` use ```element.triggerHandler('click')```
* to use isolete scope instead of ```element.scope()``` use ```element.isolateScope()``` 

### Test Configuration:
* ```npm install```
* ```bower install```
* Run -> Edit Configuration -> Press plus button -> Pick up Node.js
* set JavaScript file to ```node_modules\karma\bin\karma```
* set Application parameters to ```start test\karma.conf.js```

###Before you start, please refer to:
* [angularjs-unit-testing-directive-scope](https://egghead.io/lessons/angularjs-unit-testing-directive-scope)

Good luck!
