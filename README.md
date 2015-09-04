#Exercise 5 : Angular filters

##Summary
In this application, you are supposed to create three simple filters and use them in the right places.
You are also supposed to use build-in angular filter to filter value of `tellMe` input which should be displayed in capital letters below the table.


##Goals
1. `quote` filter - wraps the text with quotes
2. `withoutH` filter - removes all the letters H and h
3. `firstLetterUp` filter - converts the first letter of the word to the large ones (take a look at regular expression)

You are not supposed to edit or add any CSS styles.

| Filter | Without filter | With filter |
|--------|----------------|-------------|
| quote  | To be, or not to be...| "To be, or not to be..." |
| withoutH  | The Hobbit: The Battle of the Five Armies   | Te obbit: Te Battle of te Five Armies |
|firstLetterUp|Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories. |Visit Bbc News For Up-To-The-Minute News, Breaking News, Video, Audio And Stories|

##Before you start
* [angularjs-filters](https://egghead.io/lessons/angularjs-filters)
* [docs.angularjs: filter](https://docs.angularjs.org/api/ng/filter)
* [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [regular expression online](https://regex101.com/)

##Setup
 You should have `npm`, `bower`, `grunt-cli`  packages installed to run this example.
 
###To resolve dependencies run:

```
npm install
```

```
bower install
```

###To run the application:
 
 ```
 grunt serve
 ```

###To test the application:

You must install protractor as an admin: 

```
npm install -g protractor
```

```
webdriver-manager update --standalone
```
        
In order to test the application you must have `webdriver-manager` running in background.

```
webdriver-manager start
```

To run all the tests:

```
npm test
```

To run only karma unit tests:

```
npm run karma
```
To run only protractor tests:

```
npm run protractor
```

Good luck!
