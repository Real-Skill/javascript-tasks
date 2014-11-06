##Exercise 8 : angularjs-first-directive

Celem ćwicznia jest wykonanie prostych dyrektyw

###Zanim zaczniesz, zapoznaj się z:
* [angularjs-first-directive](https://egghead.io/lessons/angularjs-first-directive)
* [write-your-first-directive](https://egghead.io/lessons/write-your-first-directive)


###Ćwiczenie

1. W pliku ```RadioCtrl``` dodaj moduł o nazwie ```myRadio``` 
2. Utwórz dyrektywę ```radioBlock``` której atrybut ```restrict``` jest ustawiony na wartosc E ( w pliku .html dyrektywa będzie używana za pomocą formy ```<my-directive></my-directive>```)
3. Dodaj do dyrektywy atrybut ```template```z zawartocią poniżej (radio choice block)

```
template: ' <div>' +
                '<div class="radio"> ' +
                '<label> <input type="radio" name="fruitsRadios" value="apple" checked> apple </label> </div>' +
                '<div class="radio"> ' +
                '<label> <input type="radio" name="fruitsRadios" value="banana"> banana </label> </div>' +
                '</div>'
```
4. Utwórz dyrektywę ```radioInline``` tak jak ```radioBlock```, ze zmienioną zawartość atrybutu ```template```

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
    
5. Pod nagłówkiem ```Choose fruit``` dodaj dyrektywę ```radioBlock``` a poniżej  ``` Choose vegetable``` dyrektywę ```radioInline```

6. Dodaj dwa razy dyrektywę ```onlyToPracticeDirective``` poniżej ```<h3>Small test directive</h3>``` pamiętając, by każdą umieścić w znaczniku ```<div>```
7. Dodaj do drugiej dyrektywy atrybut ```message="I'm from attirbute"```
8. W pliku ```RadioCtrl.js``` zaktualizuj dyrektywę  ```onlyToPracticeDirective```  tak aby wyświetlała zawartość zmiennej ```information``` utowrzonej na $scopie oraz zawartość atrybutu dodanego w pliku index.html

```
        show.text(scope.radioCtrl.information);
        show.text(attribute.message);
        ```

Powodzenia!
