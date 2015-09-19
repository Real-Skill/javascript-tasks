## Bower dependencies

In this task, you have to deal with package conflicts.
This app uses AngularJS, AngularUI, typeahead.js, fuelux and Angular-Bootstrap. Those libraries have transitive dependencies that may conflict with each other.

###Goal
Modify **bower.json** file so that next `bower install` does not ask any question and app works properly
When dependency conflicts are resolved correctly, you should see properly working Typeahead, Checkbox - fluent and Checkbox with buttons.

###Setup

Run `npm install -g protractor` to install protractor globally

Run `webdriver-manager update` to update webdriver-manager (helper tool to easily get an instance of a Selenium Server running)

Run `grunt serve` to start browser in live reload mode

Run `grunt test` to start protractor test


###Before you start, read about
[bower-how-to](http://herereadthis.com/code/bower-how-to)

Good luck!
