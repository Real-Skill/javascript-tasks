# Grunt tasks

## Summary
Grunt is a task-based command line building tools for JavaScript projects. Grunt and its plugins are installed and managed via `npm`, the Node.js package manager.

Your job is to create three grunt tasks responsible for:

* validating files with JSHint,
* running unit tests,
* injecting bower plugins directly into the `index.html` file.

At the beginning the application is in not working state.

## Goals

After installing the appropriate grunt plugins, configure `Gruntfile.part.js` file (as it was `config` passed to `grunt.initConfig(config)`) and create three tasks:

* **wiredep** task, which:

    * should inject bower dependencies directly into the `index.html` file,
    * for the `bootstrap` component, should inject only the CSS part,

* **jshint** task, which:

    * should use `.jshintrc` file
    * should specify all **.js** files from: `app` folder, `test` folder and its **subfolders** to linted; moreover, `bower components` should be excluded from checking
    * should detect errors and potential problems in **.js** files and create `jshint.xml` report in `target` folder (use built-in checkstyle reporter),

* **karma** task, which:    

    * should use `karma.conf.js` configuration file
    * should contain `unit` subtask that runs all tests
    
## Setup

### To install dependencies 

    npm install
    
    bower install

### To start application in live reload mode

    grunt serve
    
### Run tests

To run e2e tests in development mode:

    grunt test:e2e


### Before you start, please refer to
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-karma](https://github.com/karma-runner/grunt-karma)
* [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

Good luck!
