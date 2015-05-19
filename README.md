## Grunt configuration exercise

Configure **Gruntfile.js** in accordance with the requirements. You start with ready **grunt serve** command.

###Requirements
You should use grunt to 
    * detect errors and potential problems in your JavaScript code
    * run test
    * find your components and injects them directly into the index.html file 
        
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
INFO [PhantomJS 1.9.8 (Windows 8)]: Connected on socket TG9EkfmmMR0ChBee9hwF with id 54727324

  directives
    circle
      ? should add bg-info a class when mouseenter
      ? should respond to a mouseenter event
      ? should remove bg-info class when mouseleave
      ? should respond to a mouseleave event

PhantomJS 1.9.8 (Windows 8): Executed 4 of 4 SUCCESS (0.732 secs / 0.13 secs)


Running "karma:dev" (karma) task
INFO [karma]: Karma v0.12.31 server started at http://localhost:8080/
INFO [launcher]: Starting browser PhantomJS
INFO [PhantomJS 1.9.8 (Windows 8)]: Connected on socket tvDJhVZXICTumxR49jxK with id 44356070

  directives
    circle
      ? should add bg-info a class when mouseenter
      ? should respond to a mouseenter event
      ? should remove bg-info class when mouseleave
      ? should respond to a mouseleave event

PhantomJS 1.9.8 (Windows 8): Executed 4 of 4 SUCCESS (0.49 secs / 0.1 secs)

```

* **grunt wiredep** command result

```

Running "wiredep:task" (wiredep) task

Done, without errors.

```

* **.js** file added

```
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>

```

* **.css** file add
```

<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />

```

###Before you start, please refer to:
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-karma](https://github.com/karma-runner/grunt-karma)
* [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

Good luck!
