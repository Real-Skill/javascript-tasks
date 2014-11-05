##Exercise 5 : angularjs-filters

Celem ćwicznia jest napisanie oraz wykorzystanie prostych filtrów. 

###Zanim zaczniesz, zapoznaj się z:
* [angularjs-filters](https://egghead.io/lessons/angularjs-filters)
* [wyrażeniami regularnymi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

###Ćwiczenie

1.   Uzupełnij filtr ```quote``` tak by umieszczał tekst w cudzysłowie.
2.   Użyj go na atrybucie ```citation``` i wyświetl wynik w odpowiednim miejscu tabeli.
3.   Utwórz filtr o nazwie ```withoutH```, który usunie wszystkie litery "H" oraz "h" z tekstu. (Wskazówka: spróbuj wykorzystać metodę z poprzedniego ćwiczenia) a następnie użyj go na atrybucie ```title```
4.   Przeanalizuj poniższy kod a w szczególności wyrażenie regularne a następnie uzupełnij filtr ```firstLetterUp```, którego zadaniem jest zamiana pierwszej litery słowa na dużą
```
return text.replace(/([^\W_]+[^\s-]*) */g, function (text)
        {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        }); </code></p>
```

5. Aby użyć ```firstLetterUp``` dla każdego słowa w ```someText```, przy wywołaniu filtra należy dodać wartość true ```data.someText | firstLetterUp : true``` 
6. Wyświel zawartość pola tekstowego w znaczniku ```<h3> Input </h3>``` i użyj na nim gotowy filtr ```uppercase```
 
Powodzenia