#Lodash training

##Summary

Training tasks for Lodash Functions. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name
and purpose.

##Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.after

The opposite of _.before; this method creates a function that invokes func once it's called n or more times.

### _.bind

Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.

### _.curry

Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number 
of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. 
The arity of func may be specified if func.length is not sufficient.

### _.flip

Creates a function that invokes func with arguments reversed.

### _.partial

Creates a function that invokes func with partials prepended to the arguments it receives. This method is like _.bind except it does not alter the this binding.

### _.rearg

Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is
provided as the first argument, the argument value at the second index is provided as the second argument, and so on.

### _.spread

Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply.

##Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).


##Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
