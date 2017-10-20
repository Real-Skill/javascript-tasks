# Lodash training

## Summary

These are training tasks for Lodash String. The exercise consists of a few simple tasks.
You are supposed to implement a method, having only the method name and purpose provided.

## Goal

These tests contain some usage of lodash methods.
Make sure that datasets `app/datasets.js` for each method are correct.

### _.camelCase

It converts the string to camel case.

### _.capitalize

It converts the first character of string to upper case and the remaining to lower case.

### _.deburr

It deburrs the string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and by removing and combining diacritical marks.

### _.endsWith
	
It checks if the string ends with the given target string.

### _.escape
	
It converts the characters "&", "<", ">", '"', and "'" in the string to their corresponding HTML entities.
	
### _.escapeRegExp

It escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in the string.

### _.kebabCase

It converts the string to kebab case.

### _.lowerCase

It converts the string, as space separated words, to lower case.

### _.lowerFirst

It converts the first character of the string to lower case.

### _.pad

It pads the string on the left and right sides if it's shorter than the length. Padding characters are truncated if they can't be evenly divided by length.

### _.padEnd

It pads the string on the right side if it's shorter than the length. Padding characters are truncated if they exceed the length.

### _.padStart
	
it pads the string on the left side if it's shorter than the length. Padding characters are truncated if they exceed the length.
	
### _.parseInt

It converts the string to an integer of the specified radix. If the radix is undefined or 0, the radix of 10 is used unless the value is a hexadecimal, in which case the radix of 16 is used.

### _.repeat

It repeats the given string n times.

### _.replace1

It replaces matches for pattern in the string with replacement.

### _.replace2

It replaces matches for pattern in the string with replacement.

### _.replace3

It replaces matches for pattern in the string with replacement.

### _.replace4

It replaces matches for pattern in the string with replacement.

### _.snakeCase

It converts the string to snake case.

### _.split

It splits the string by a separator.

### _.startCase

It converts the string to start case.

### _.startsWith

It checks if the string starts with the given target string.

### _.template

It creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over _.templateSettings values.

### _.toLower

It converts the string, as a whole, to lower case just like String#toLowerCase.

### _.toUpper

It converts the string, as a whole, to upper case just like String#toUpperCase.

### _.trim

It removes leading and trailing whitespace or specified characters from the string.

### _.trimEnd

It removes trailing whitespace or specified characters from the string.

### _.trimStart

It removes leading whitespace or specified characters from the string.

### _.truncate

It truncates the string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".

### _.unescape

It is the inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in the string to their corresponding characters.

### _.upperCase

It converts the string, as space separated words, to upper case.

### _.upperFirst

It converts the first character of the string to upper case.

### _.words1

It splits the string into an array of its words.

### _.words2	
 
It splits the string into an array of its words.


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
