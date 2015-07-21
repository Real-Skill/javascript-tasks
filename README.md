#Exercise 5 : Angular filters

##Summary
In this application, you are supposed to create three simple filters and use them in correct place.

##Goals
1. `quote` filter - places the text in quotes
2. `withoutH` filter - removes all the letters H and h
3. `firstLetterUp` filter - converts the first letter of the word to the large ones (take a look at regular expression)

Additionaly, you are supposed to use build-in angular filter to display upper input value capitalised below the table.

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
You should have installed `npm`, `bower`, `grunt`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application run

```
grunt serve
```


To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```


To start unit test run

```
grunt karma
```

Good luck!
