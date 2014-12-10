##Exercise 5 : Angular filters

The goal of this exercise is the creation and use simple filters.

###Before you start, please refer to:
* [angularjs-filters](https://egghead.io/lessons/angularjs-filters)
* [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

###Exercise

1.   Complete **quote** filter, to place the text in quotation marks.
2.   Use it on  **citation**   and display the result in the right place of the table.
3.   Create a filter called **withoutH**, that will remove all the "H" and "h" characters from the text (**Hint:** try to use a method from the previous exercise) and then use it on the **title** attribute
4.   Review the following code (in particular regular expression) and then complete filter  **firstLetterUp**, whose purpose is to convert the first letter of the word to the large ones.
```
return text.replace(/([^\W_]+[^\s-]*) */g, function (text)
        {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        }); </code></p>
```

5. To use **firstLetterUp**  for each word in **someText**,  when calling the filter, add true value ```data.someText | firstLetterUp : true``` 
6. View the contents of the text box in the tag ```<h3> Input </h3>``` and use on him ready filter: ```uppercase```
 
Good luck!
