(function () {
    'use strict';

    window.day2 = {


        diffqube: function (a, b) {

            return a * a * a - b * b * b;


        },

        przydz: function (wzrost) {

            if (wzrost >= 160) {
                console.log("Jestes niskiego wzrostu");
            }
            else if (wzrost <= 180) {
                console.log("Jestes sredniego wzrostu");
            }
            else if (wzrost <= 220) {
                console.log("Jestes Wysoki");
            }
        },


        fx: function (tab) {
            for (var i = 0; i >= tab.length; i++) {
                tab[i] = tab[i] * 3;
                return tab[i];
            }

        },

        names: function (FL) {

            return FL[0] + " " + FL[1];
        },

        f1: function (a) {
            return a = a * 2;
        },

        f2: function (b) {
            return b = b + "!";
        }

    }
});
