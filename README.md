##Exercise 4 : defining-a-method-on-the-scope

Celem ćwicznia jest wykorzystanie metody zdefiniowanej na $scope zamieniającej podane słowo w tekście na nowe. 

###Zanim zaczniesz, zapoznaj się z:
* materiałem filmowym: [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)


###Ćwiczenie

1. Za pomocą dyrektywy ```ng-model``` połącz  textarea z tekstem piosenki umieszczonym w ```mySong.factory``` (atrybut ```song```)
2. Utwórz w kontrolerze ```NewWordCtrl``` metodę o nazwie ```replaceWord()``` jej zadaniem jest zamiana wybranego słowa na nowe. Metoda przyjmuje trzy argumenty:
* tekst z pola ```textarea```
* słowo, które będzie zamieniane na inne,
* nowe słowo
3. Zamianę wybranego słowa można uzyskać przykładowo tak: ```textIn.split(oldWord).join(newWord)``` 
4. Podobnie jak w punkcie 1 połącz pole tekstowe o id ```word``` z przykładowym nowym słowem umieszczonym w ```mySong.factory``` (atrybut ```newWord```)
5. Wykorzystaj funckję ```replaceWord()``` (z odpowiednimi argumentami aby zastępić słowo ```purr``` na nowe, podane w polu tekstowym) do wyświelenia zmienionego tekstu nagłówku ```<h3>```

Powodzenia!