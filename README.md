#Lodash training

##Summary

Training tasks for Lodash Lang. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name
and purpose.

##Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.castArray

Casts value as an array if it’s not one.

### _.clone

Creates a shallow clone of value. 

### _.cloneDeep

This method is like _.clone except that it recursively clones value.

### _.cloneDeepWith

This method is like _.cloneWith except that it recursively clones value.

### _.cloneWith

This method is like _.clone except that it accepts customizer which is
invoked to produce the cloned value.If customizer returns undefined, 
cloning is handled by the method instead.

### _.eq

Performs a SameValueZero comparison between two values to determine if
they are equivalent.

### _.gt

Checks if value is greater than other.

### _.gte

Checks if value is greater than or equal to other.

### _.isArguments

Checks if value is likely an arguments object.

### _.isArray

Checks if value is classified as an Array object.

### _.isArrayBuffer

Checks if value is classified as an ArrayBuffer object.

### _.isArrayLike

Checks if value is array-like. A value is considered array-like if
it’s not a function and has a value.length that’s an integer greater
than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.

### _.isArrayLikeObject

This method is like _.isArrayLike except that it also checks
if value is an object.

### _.isBoolean

Checks if value is classified as a boolean primitive or object.

### _.isBuffer

Checks if value is a buffer.

### _.isDate

Checks if value is classified as a Date object.

### _.isElement

Checks if value is likely a DOM element.

### _.isEmpty

Checks if value is an empty object, collection, map, or set. 

### _.isEqual

Performs a deep comparison between two values to determine
if they are equivalent. 

### _.isEqualWith

This method is like _.isEqual except that it accepts customizer which is
invoked to compare values. If customizer returns undefined, 
comparisons are handled by the method instead.

### _.isError

Checks if value is an Error, EvalError, RangeError, ReferenceError,
SyntaxError, TypeError, or URIError object.

### _.isFinite

Checks if value is a finite primitive number. 

### _.isFunction

Checks if value is classified as a Function object.

### _.isInteger

Checks if value is an integer. 

### _.isLength

Checks if value is a valid array-like length. 

### _.isMap

Checks if value is classified as a Map object.

### _.isMatch

Performs a partial deep comparison between object and source to determine
if object contains equivalent property values.
This method is equivalent to a _.matches function when source is partially applied. 

### _.isMatchWith

This method is like _.isMatch except that
it accepts customizer which is invoked to compare values.
If customizer returns undefined, comparisons are handled by the method instead.

### _.isNaN

Checks if value is NaN. 

### _.isNative

Checks if value is a pristine native function. 

### _.isNil

Checks if value is null or undefined.

### _.isNull

Checks if value is null.

### _.isNumber

Checks if value is classified as a Number primitive or object. 

### _.isObject

Checks if value is the language type of Object.
(e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))

### _.isObjectLike

Checks if value is object-like. A value is object-like
if it’s not null and has a typeof result of "object".

### _.isPlainObject

Checks if value is a plain object, that is, an object created by
the Object constructor or one with a [[Prototype]] of null.

### _.isRegExp

Checks if value is classified as a RegExp object.

### _.isSafeInteger

Checks if value is a safe integer. An integer is safe if it’s an IEEE-754
double precision number which isn’t the result of a rounded unsafe integer. 

### _.isSet

Checks if value is classified as a Set object.

### _.isString

Checks if value is classified as a String primitive or object.

### _.isSymbol

Checks if value is classified as a Symbol primitive or object.

### _.isTypedArray

Checks if value is classified as a typed array.

### _.isUndefined

Checks if value is undefined.

### _.isWeakMap

Checks if value is classified as a WeakMap object.

### _.isWeakSet

Checks if value is classified as a WeakSet object.

### _.lt

Checks if value is less than other.

### _.lte

Checks if value is less than or equal to other.

### _.toArray

Converts value to an array.

### _.toFinite

Converts value to a finite number.

### _.toInteger

Converts value to an integer. 

### _.toLength

Converts value to an integer suitable for use as the length of an
array-like object. 

### _.toNumber

Converts value to a number.

### _.toPlainObject

Converts value to a plain object flattening inherited enumerable string 
keyed properties of value to own properties of the plain object.

### _.toSafeInteger

Converts value to a safe integer. A safe integer can be compared and
represented correctly.

### _.toString

Converts value to a string. An empty string is returned for null and
undefined values. The sign of -0 is preserved.

##Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

##Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    npm test

To run verify jshint and tests with human readable output:

    grunt --force
