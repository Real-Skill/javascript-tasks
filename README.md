# Grunt tasks

## Summary
Grunt is a task-based command line build tool for JavaScript projects. Grunt and its plugins are installed and managed via `npm`, the Node.js package manager.

Create three grunt tasks responsible for validate files with JSHint, run unit tests and inject bower plugins directly into the `index.html` file.

At the beginning application is in not working state.

## Goals

After installing appropriate grunt plugins (**make sure to save installed dependencies in `package.json`!**), configure `Grunt.js` file and create three tasks:

* **wiredep** task:

    * should inject bower dependencies directly into the `index.html` file,
    * for the `bootstrap` component inject only the CSS part

* **jshint** task:
    
    * should detect errors and potential problems in .js files and create `jshint.xml` report in `target` folder (use built-in XML JSHint reporter),
    * should specify all .js files from: `app` folder, `test` folder and its **subfolders** to linted, moreover `bower components` should be excluded from checking 
 
* **karma** task:    

    * should use `karma.conf.js` configuration file
    * should contain `unit` subtask which runs all tests
    
## Setup

### To install dependencies 

```
npm install
```

```
bower install
```

### To start application in live reload mode

    grunt serve
    
### Run tests

To run e2e tests in development mode:

    grunt test:e2e


###Before you start, please refer to:
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-karma](https://github.com/karma-runner/grunt-karma)
* [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

Good luck!
