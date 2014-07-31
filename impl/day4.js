(function () {
    'use strict';
    //Kontruktor obiektów pudełka utworz 3 obiekty o nazwach mbox<number>
    function Boxes(length, width, weight) {
        this.lenght = length;
        this.width = width;
        this.weight = weight;
        this.inBoxes = [];


    }

    //Konstruktor obiektór car utwórz 2 obiekt o nazwach car<number>
    function Car(maxWeightTransport, maxSquareTransport) {
        this.maxWeightTransport = maxWeightTransport;
        this.maxSquareTransport = maxSquareTransport;
    }


    //Funckje dziedziczone do każdego pudełka
    Boxes.prototype = {
        toStringBoxes: function () {
//            Napisz funckje toString która będzie wypisywac zawartosc pudelka w postaci stringu ma być ona dodana do prototypy.
            if (0 == this.inBoxes.length) {
                return 'This boxes is empty';
            } else {
                var inBoxesList = '';
                for (var i = 0; i < this.inBoxes.length; i++) {
                    inBoxesList = inBoxesList + this.inBoxes[i] + ',';
                }
                return 'Inside this boxes is: ' + inBoxesList;
            }
        },

//        Napisz funckje liczaca powierzchnie pudełka
        squareBoxes: function () {
            return this.lenght * this.width;
        },

//        Napisz funkcje która będzie dodawać do pudełek zawarość
        addBoxes: function (propertiesIn) {
            if ('string' === typeof propertiesIn) {
                this.inBoxes.push(propertiesIn);
            } else {
                for (var i = 0; i < propertiesIn.length; i++) {
                    this.inBoxes.push(propertiesIn[i]);
                }
            }
        },

//        Napisz funkcje która bęðzie sprawdzać czy dane pudełko może zostać przewiezione przez auto jako parametr przyjmuje obiekt samochod
        transportBoxes: function (car) {
            if ((car.maxSquareTransport >= this.squareBoxes()) && (car.maxWeightTransport >= this.weight)) {

                return 'This car can transport this boxes';
            } else {
                return "This car can't transport this boxes";
            }

        },
//        Napisz funkcje która będzie opróźniać pudełko
        emptyBoxes: function () {
            this.inBoxes = [];
        }

    };
    function Box(id, width, height, length) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.length = length;
        this.container = [];
    }

    //Stwórz prototyp dla obiektów Box
    Box.prototype = {

        //Napisz funkcje ustawiajacą width
        setWidth: function (width) {
            this.width = width;
        },
        //Napisz funckje ustawiajaca height
        setHeight: function (height) {
            this.height = height;
        },
        //Napisz funkcje ustawiajaca length
        setLength: function (length) {
            this.lenght = length;
        },
        //Napisz funkcje pozwalajaca dodac zawartosc do box'a
        addContent: function (conntentToAdd) {
            this.container.push(conntentToAdd);
        },
        //Napisz funkcje zwracajaca zawartość box'a
        getContent: function () {
            if (0 < this.container.length) {
                return this.container;
            } else {
                return false;
            }
        },
        //Napisz funkcje valueOf aby zwracala objetosc box'a
        valueOf: function () {
            if ("number" == typeof this.width && "number" == typeof this.height && "number" == typeof this.length) {
                return this.width * this.height * this.length;
            } else {
                return false;
            }
        },
        //Napisz funkcje toString aby zwracala string:
        //Box #id Volume:volume
        //Contain:
        //listOfContent
        //Każdy element z listy w nowej lini
        toString: function () {
            var listOfContent = "";
            if (0 != this.container.length) {
                for (var i = 0; this.container.length > i; i++) {

                    if (this.container.length - 1 != i) {
                        listOfContent = listOfContent + this.container[i] + "\n";
                    } else {
                        listOfContent = listOfContent + this.container[i];
                    }
                }
            } else {
                listOfContent += "nothing";
            }

            return "Box #" + this.id + " Volume:" + this.valueOf() + "\nContain:\n" + listOfContent;
        },

        //Napisz funkcje opróżniającą box
        empty: function () {
            this.container = [];
        },

        //Napisz funkcje wyszukujaca element w zawartosci box'a
        searchInContent: function (name) {
            for (var i = 0; this.container.length > i; i++) {
                if (name == this.container[i]) {
                    return this.container[i];
                }
            }
            return false;
        },

        //Napisz funckej dodającą zawartość z innego box'a
        appendContent: function (boxToCopy) {
            for (var i = 0; boxToCopy.container.length > i; i++) {
                this.container.push(boxToCopy.container[i]);
            }
        }


    }


// Napisz konstruktor tworzacy obiekty studentow. Maja posiadac imie i nazwisko, wiek, i pusta tablice na oceny. Utworz trzy egzemplarze (student1, student2, student3)
    var Student = function (name, age) {
        this.name = name;
        this.age = age;
        this.marks = [];
    };
    // Dopisz prototyp dodajacy do tablicy oceny i zwracajacy je.
    Student.prototype = {
        addMark: function (mark) {
            if ("number" == typeof mark && 2 <= mark && 5 >= mark) {
                this.marks.push(mark);
            }
            else if ("[object Array]" == Object.prototype.toString.call(mark)) {
                for (var i = 0; i < mark.length; i++) {
                    if ("number" == typeof mark[i] && 2 <= mark[i] && 5 >= mark[i]) {
                        this.marks.push(mark[i]);
                    }
                }
            }

            return this.marks;
        },
        // Dopisz prototyp liczacy srednia ze wszystkich ocen z dokladnoscia dwoch miejsc po przecinku i zwracajaca ja
        average: function () {
            var sum = 0;
            for (var i = 0; i < this.marks.length; i++) {
                sum += this.marks[i];
            }
            return Math.round(sum / this.marks.length * 100) / 100;
        }
    };

    window.day4 = {
        mbox1: new Boxes(10, 10, 10),
        mbox2: new Boxes(15, 30, 40),
        mbox3: new Boxes(200, 45, 10),
        mbox4: new Boxes(20, 5, 10),
        mbox5: new Boxes(2, 45, 10),
        mbox6: new Boxes(250, 4, 10),

        car1: new Car(90, 100),
        car2: new Car(500, 600),
        car3: new Car(5, 600),
        car4: new Car(50, 600),
        car5: new Car(10, 6),
        car6: new Car(50, 20),

        box1: new Box(1, 2, 2, 2),
        box2: new Box(2, 3, 4, 5),
        box3: new Box(3, 9, 8, 7),
        box4: new Box(4, 6, 5, 4),
        box5: new Box("a", "b", 2, 9),

        student1: new Student("Dawid Zegar", 23),
        student2: new Student("Jan Kowalski", 77),
        student3: new Student("Jacek Nowak", 34),

        // Napisz funkcje przyjmujaca jako argument tablice elementow typu Student. Funkcja wybiera studenta z najlepsza srednia i zwraca go.
        getBestStudent: function (students) {

            var iBest = 0;
            var best = students[iBest].average();

            for (var i = 0; i < students.length; i++) {
                if (isNaN(students[i].average())) {
                    return false;
                }
                if (best < students[i].average()) {
                    iBest = i;
                }
            }
            return students[iBest];
        }
    };
})();