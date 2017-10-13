# Lodash training

## Summary

Training tasks for Lodash String. The exercise consist of a few simple tasks.
You are supposed to implement method, having provided only the method name and purpose.

## Goal

Tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.camelCase

Converts string to camel case.

### _.capitalize

Converts the first character of string to upper case and the remaining to lower case.

### _.deburr

Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.

### _.endsWith
	
Checks if string ends with the given target string.

### _.escape
	
Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
	
### _.escapeRegExp

Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.

### _.kebabCase

Converts string to kebab case.

### _.lowerCase

Converts string, as space separated words, to lower case.

### _.lowerFirst

Converts the first character of string to lower case.

### _.pad

Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

### _.padEnd

Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.

### _.padStart
	
Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.
	
### _.parseInt

Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.

### _.repeat

Repeats the given string n times.

### _.replace1

Replaces matches for pattern in string with replacement.

### _.replace2

Replaces matches for pattern in string with replacement.

### _.replace3

Replaces matches for pattern in string with replacement.

### _.replace4

Replaces matches for pattern in string with replacement.

### _.snakeCase

Converts string to snake case.

### _.split

Splits string by separator.

### _.startCase

Converts string to start case.

### _.startsWith

Checks if string starts with the given target string.

### _.template

Creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over _.templateSettings values.

### _.toLower

Converts string, as a whole, to lower case just like String#toLowerCase.

### _.toUpper

Converts string, as a whole, to upper case just like String#toUpperCase.

### _.trim

Removes leading and trailing whitespace or specified characters from string.

### _.trimEnd

Removes trailing whitespace or specified characters from string.

### _.trimStart

Removes leading whitespace or specified characters from string.

### _.truncate

Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".

### _.unescape

The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.

### _.upperCase

Converts string, as space separated words, to upper case.

### _.upperFirst

Converts the first character of string to upper case.

### _.words1

Splits string into an array of its words.

### _.words2	
 
Splits string into an array of its words.


## Before you start

Read Lodash documentation at [http://lodash.com/docs](http://lodash.com/docs).

## Setup
To install dependencies from package.json:

    yarn install

To run tests in development mode:

    mocha --watch

To run verify jshint and tests:

    yarn test

To run verify jshint and tests with human readable output:

    grunt --force
