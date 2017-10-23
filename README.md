# Lodash training

## Summary

These are training tasks for Lodash Lang. The exercise consists of a few simple tasks.
You are supposed to implement a method, having  only the method name
and purpose provided.

## Goal

The tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.castArray

It casts value as an array if it is not one.

### _.clone

It creates a shallow clone of the value. 

### _.cloneDeep

This method is like _.clone except that it recursively clones the value.

### _.cloneDeepWith

This method is like _.cloneWith except that it recursively clones the value.

### _.cloneWith

This method is like _.clone except that it accepts customizer which is
invoked to produce the cloned value. If the customizer returns undefined, 
cloning is handled by the method instead.

### _.eq

It performs a SameValueZero comparison between two values to determine if
they are equivalent.

### _.gt

It checks if the value is greater than another value.

### _.gte

It checks if the value is greater than or equal to another value.

### _.isArguments

It checks if the value is like an arguments object.

### _.isArray

It checks if the value is classified as an Array object.

### _.isArrayBuffer

It checks if the value is classified as an ArrayBuffer object.

### _.isArrayLike

It checks if the value is array-like. A value is considered array-like if
it’s not a function and has a value.length that’s an integer greater
than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.

### _.isArrayLikeObject

This method is like _.isArrayLike except that it also checks
if the value is an object.

### _.isBoolean

It checks if the value is classified as a boolean primitive or object.

### _.isBuffer

It checks if the value is a buffer.

### _.isDate

It checks if the value is classified as a Date object.

### _.isElement

It checks if the value is like a DOM element.

### _.isEmpty

It checks if the value is an empty object, collection, map, or set. 

### _.isEqual

It performs a deep comparison between two values to determine
if they are equivalent. 

### _.isEqualWith

This method is like _.isEqual except that it accepts customizer which is
invoked to compare values. If customizer returns undefined, 
comparisons are handled by the method instead.

### _.isError

It checks if the value is an Error, EvalError, RangeError, ReferenceError,
SyntaxError, TypeError, or URIError object.

### _.isFinite

It checks if the value is a finite primitive number. 

### _.isFunction

It checks if the value is classified as a Function object.

### _.isInteger

It checks if  the value is an integer. 

### _.isLength

It checks if the value is a valid array-like length. 

### _.isMap

Checks if value is classified as a Map object.

### _.isMatch

It performs a partial deep comparison between the object and source to determine
if the object contains equivalent property values.
This method is equivalent to a _.matches function when the source is partially applied. 

### _.isMatchWith

This method is like _.isMatch except that
it accepts the customizer which is invoked to compare values.
If the customizer returns undefined, comparisons are handled by the method instead.

### _.isNaN

It checks if the value is NaN. 

### _.isNative

It checks if the value is a pristine native function. 

### _.isNil

It checks if the value is null or undefined.

### _.isNull

It checks if the value is null.

### _.isNumber

It checks if the value is classified as a Number primitive or object. 

### _.isObject

It checks if the value is the language type of Object.
(e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))

### _.isObjectLike

It checks if the value is object-like. A value is object-like
if it’s not null and has a typeof result of "object".

### _.isPlainObject

It checks if the value is a plain object, that is, an object created by
the Object constructor or one with a [[Prototype]] of null.

### _.isRegExp

It checks if the value is classified as a RegExp object.

### _.isSafeInteger

It checks if the value is a safe integer. An integer is safe if it’s an IEEE-754
double precision number which isn’t the result of a rounded unsafe integer. 

### _.isSet

It checks if the value is classified as a Set object.

### _.isString

It checks if the value is classified as a String primitive or object.

### _.isSymbol

It checks if the value is classified as a Symbol primitive or object.

### _.isTypedArray

It checks if the value is classified as a typed array.

### _.isUndefined

It checks if the value is undefined.

### _.isWeakMap

It checks if the value is classified as a WeakMap object.

### _.isWeakSet

It checks if the value is classified as a WeakSet object.

### _.lt

It checks if the value is less than other.

### _.lte

It checks if the value is less than or equal to another.

### _.toArray

It converts the value to an array.

### _.toFinite

It converts the value to a finite number.

### _.toInteger

It converts the value to an integer. 

### _.toLength

It converts the value to an integer suitable for use as the length of an
array-like object. 

### _.toNumber

It converts the value to a number.

### _.toPlainObject

It converts the value to a plain object flattening inherited enumerable string 
keyed properties of the value to own properties of the plain object.

### _.toSafeInteger

It converts the value to a safe integer. A safe integer can be compared and
represented correctly.

### _.toString

It converts the value to a string. An empty string is returned for null and
undefined values. The sign of -0 is preserved.

## Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

## Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint and tests:

    npm test

To run jshint and tests with human readable output:

    grunt --force
