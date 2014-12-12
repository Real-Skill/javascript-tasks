##Exercise 8 : Angular first directive
Celem ćwicznia jest wykonanie prostych dyrektyw
###Before you start, please refer to:
* [angularjs-first-directive](https://egghead.io/lessons/angularjs-first-directive)
* [write-your-first-directive](https://egghead.io/lessons/write-your-first-directive)

###Exercise

1. In **RadioCtrl** file, add ```myRadio``` module
2. Create a ```radioBlock``` directive, which ```restrict``` attribute is set to **E** value ( in .html file, directive will be used by ```<my-directive></my-directive>``` tag)
3. Add attribute ```template``` with the following contents(radio choice block)

```
template: ' <div>' +
                '<div class="radio"> ' +
                '<label> <input type="radio" name="fruitsRadios" value="apple" checked> apple </label> </div>' +
                '<div class="radio"> ' +
                '<label> <input type="radio" name="fruitsRadios" value="banana"> banana </label> </div>' +
                '</div>'
```
4. Create ```radioInline``` directive such as ```radioBlock```, with content ``template```

```
        template: '<div> ' +
                '<label class="radio-inline"> ' +
                '<input type="radio" name="vegetablesRadio" value="tomato"> tomato ' +
                '</label> ' +
                '<label class="radio-inline">' +
                '<input type="radio" name="vegetablesRadio" value="cucumber" checked> cucumber</label> ' +
                '</div>'
    }
```
5. Under the headong ```Choose fruit``` add directive ```radioBlock``` and below ``` Choose vegetable``` directive ```radioInline```
6. Add two times ```onlyToPracticeDirective``` directive, below ```<h3>Small test directive</h3>``` (remember to put each in tag ```<div>```)
7. Add to the second directive ```message="I'm from attirbute"``` attribute.
8. In ```RadioCtrl.js``` update directive  ```onlyToPracticeDirective```  to display the contents of the variable ```information``` created at $scope and the content attribute added in index.html
```
show.text(scope.radioCtrl.information);
show.text(attribute.message);
```

Good luck!
