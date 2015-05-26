## Grunt configuration

Grunt is a task-based command line build tool for JavaScript projects. 
You can use Grunt to automate minification, compilation, unit testing, linting... - take a look at [gruntjs.com](http://gruntjs.com/)

Grunt and Grunt plugins are installed and managed via `npm`, the Node.js package manager.


##Goal
You goal is install and load npm task to:

 * detect errors and potential problems in your JavaScript code located in app folder (`grunt-contrib-jshint`),

 * run tests (`grunt-karma`) located in test folder, 

 * find your components, install via bower and injects them directly into the `index.html` file (`grunt-wiredep`)
 
From bootstrap component, should be injected only part of the CSS. Remember that, you can't manually modify `index.html` file.

You start with ready tasks: 

`grunt serve` (you can use it to start browser in live reload mode) and `grunt test` (to start protractor test)

###Results
* **grunt jshint** command result

```
Running "jshint:all" (jshint) task
>> 1 file lint free.

Done, without errors.
```

* **grunt karma** command result

```

Running "karma:unit" (karma) task
INFO [karma]: Karma v0.12.31 server started at http://localhost:8080/
INFO [launcher]: Starting browser PhantomJS
INFO [PhantomJS 1.9.8 (Windows 8)]: Connected on socket VST86J4WhW0JtSyeodAH with id 71276573

  directives
    circle
      ? should add bg-info a class when mouseenter
      ? should respond to a mouseenter event
      ? should remove bg-info class when mouseleave
      ? should respond to a mouseleave event

PhantomJS 1.9.8 (Windows 8): Executed 4 of 4 SUCCESS (0.682 secs / 0.114 secs)

```

* **grunt wiredep** command result

```

Running "wiredep:task" (wiredep) task

Done, without errors.
```

* **.js** file added

```
...
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>

<script src="mouse.js"></script>
</body>
</html>
```

* **.css** file add
```
...
<title>AngularJS Tutorials</title>

<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />

...
```

###Setup

Run `npm install -g protractor` to install protractor globally

Run `webdriver-manager update` to update webdriver-manager (helper tool to easily get an instance of a Selenium Server running)

Run `grunt serve` to start browser in live reload mode

Run `grunt test` to start protractor test


###Before you start, please refer to:
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-karma](https://github.com/karma-runner/grunt-karma)
* [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

Good luck!
