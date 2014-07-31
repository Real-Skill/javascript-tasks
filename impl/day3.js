(function () {
    'use strict';

    // Do typu string dopisz  funkcje zliczajaca samogloski w dowolnym strungu
    String.prototype.countVowels = function () {
        var count = 0;
        var tmp = this.toLocaleLowerCase();
        for (var i = 0; i < this.length; i++) {
            if (tmp.charAt(i) == "a" || tmp.charAt(i) == "e" || tmp.charAt(i) == "i" || tmp.charAt(i) == "o" || tmp.charAt(i) == "y" || tmp.charAt(i) == "u") {
                count++;
            }

        }
        return count;

    };
    // Do typu array dopisz funkce zlepiajaca wszystkie elementy tablicy w jeden string. Separatorem jest spacja
    Array.prototype.arrayToString = function () {
        var str = "";
        for (var i = 0; i < this.length; i++) {
            str += this[i] + " ";
        }
        str = str.substring(0, str.length - 1);
        return str;
    };


//    Napisz funckje do prototypu Number która wywołana na rzecz liczby doda do niej parametr podany w funckji
    Number.prototype.addNumber = function (add) {
        return this + add;
    };


//    Napisz funckje ktora będzie wywołana na rzecz obiektu typu number, będzie ona przyjmować dwa argumenty
//    i zwracać warość najœiekszą z dwóch argumentów i obiektu na rzecz którego została wywołana
    Number.prototype.maxValueFromTwoArguments = function (first, second) {
        if (this > first && this > second) {
            return this;
        } else if (first > this && first > second) {

            return first;
        } else if (second > this && second > first) {

            return second;
        }
    }

    window.day3 = {
        // Dopisz funkcje w srodku obiektu usuwajaca z podanego obiektu wybrany atrybut i zwracajacy zmodyfikowany obiekt
        book: {
            title: "Kot w butach",
            author: "Jan Kowalski",
            numPages: 149,
            comments: "Good book!",

            // ...
            delProperty: function (property) {
                delete this[property];
                return this;
            }
        },
        aqurium: {
            fish1: {type: 'fish', name: 'Bibo', weight: 20, sizeFish: 'big' },
            fish2: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish3: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish4: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish5: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            aqurine: 1,
            underwaterTree1: {type: 'tree', height: 5},
            underwaterTree2: {type: 'tree', height: 2},
            underwaterTree3: {type: 'tree', height: 2},
            underwaterTree4: {type: 'tree', height: 2},
            underwaterTree5: {type: 'tree', height: 2},
            underwaterTree6: {type: 'tree', height: 2},
            stone1: {type: 'stone', height: 2},
            stone: 50

        },
        aqurium2: {
            something: 2,
            width: 2,
            height: 20,
            capacity: 30

        },
        test: {
            properties: true
        },
//          Napisz funkcje przyjmujaca dowolny obiekt i zwrawacaja w tablicy stringow nazwy atrybutow danego obiektu oraz ich wartosc
        propertyNames: function (obj) {
            var properties = [];
            for (var prop in obj) {
                properties.push([prop, obj[prop]]);
            }
            return properties;
        },


        // Napisz funkcje laczaca dwa dowolne obiekty (wszystkie atrybuty w jednym obiekcie)
        mergeObject: function (obj1, obj2) {
            if (typeof obj1 != "object" || typeof obj2 != "object") {
                return false;
            }
            for (var prop in obj2) {
                obj1[prop] = obj2[prop];
            }

            return obj1;
        },
//        Napisz funckje która bęðzie wypisywać ilosc elemtnow w obiekcie jako parametr przyjmuje obiekt i nazwe wlasciwosci

        countPropertiesInObject: function (object, nameProperties) {
            var count = 0;
            for (var fish in object) {
                if (object[fish].type == nameProperties) {
                    count++;
                }
            }
            return count;
        },
//        Napisz funckje ktora wpisze wszystkie nazwy elementow obiektu do tablicy

        writeAllPropertiesObject: function (object) {
            var temp = [];
            for (var properties in object) {
                temp.push(properties);
            }
            return temp;
        },

//        Napisz funkcje ktora zlicza ilosc wystapienia litery w nazwach atrybutów
        countCharInProperties: function (object, letter) {
            var temp = 0;
            for (var properties in object) {
                for (var i = 0; i < properties.length; i++) {
                    if (properties.charAt(i).toUpperCase() == letter.toUpperCase()) {
                        temp++;
                    }
                }
            }
            return temp;
        },
        //Napisz funckje wypisujacą atrybut width z nazwa box'a do którego należy
        boxlist: {box1: {height: 10, width: 5, length: 5}, box2: {height: 7, width: 2, length: 7}, box3: {height: 5, width: 7, length: 10}},

        getWidth: function (list) {
            var tmp = [];
            for (var element in list) {
                tmp.push(element + ": " + list[element].width);
            }
            return tmp;
        },

        //Napisz funkcje licząca objętość dla kazdego box'a a nastepnie sume wszystkich objętości
        getVolume: function (list) {
            var tmp = [];
            var sumVolume = 0;
            var volume;
            for (var element in list) {
                volume = (list[element]["width"] * list[element]["height"] * list[element]["length"]);
                tmp.push(element + " volume: " + volume);
                sumVolume += volume;
            }
            tmp.push(sumVolume);
            return tmp;

        },

        //Napisz funkcje zwracajacą maksymalna objetosc box'a
        getMaxVolume: function (list) {
            var tmp = [];
            var max;
            var volume;
            for (var element in list) {
                volume = (list[element]["width"] * list[element]["height"] * list[element]["length"]);
                tmp.push(volume);
            }
            max = tmp[0];
            for (var i = 0; i < tmp.length; i++) {
                if (max < tmp[i]) {
                    max = tmp[i];
                }
            }
            return max;

        },

        //Napisz funkcje zmieniającą nazwe atrybutu w obiekcie
        person: {firstName: "Jan", secondName: "Kowalski", age: 35},

        changePropertyName: function (object, nameToChange, newName) {

            var tmp;
            tmp = object[nameToChange];
            if (tmp != undefined) {
                delete object[nameToChange];
                object[newName] = tmp;
                return true;
            } else {
                return false;
            }

        },

        //Napisz funckje zmieniajacą 2 wymiarowa tablice na obiekt, tablica postaci [n][2]
        makeObject: function (list) {
            var tmp = {};
            for (var i = 0; i < list.length; i++) {
                if (list[i].length == 2) {
                    tmp[list[i][0]] = list[i][1];
                } else {
                    return false;
                }
            }
            return tmp;
        }

    }


})();
