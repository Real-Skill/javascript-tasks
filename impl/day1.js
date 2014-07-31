(function () {
    'use strict';

    window.day1 = {

        getDescendingNumbers: function (start, stop) {
            if (typeof start != "number" || typeof stop != "number" || start < stop) {
                return false;
            }
            var descendingNumbers = start;
            for (var i = start - 1; i >= stop; i--) {
                descendingNumbers = descendingNumbers + " " + i;
            }

            return descendingNumbers;
        },
        deleteStr: function (delStr, list) {
            var del = false;
            for (var i = 0; i < list.length; i++) {
                if (del) {
                    list[i - 1] = list[i];
                }
                else if (list[i] == delStr) {
                    del = true;
                }
            }
            if (del) {
                list.pop();
            }
            return list;
        },

        stringCounter: function (tab) {

            for (var i = 0, count = 0; i < tab.length; i++) {
                if (typeof tab[i] == 'string') {
                    count++;
                }
            }
            return count;

        },

        squareOdd: function (tabOdd) {

            for (var i = 0; i < tabOdd.length; i++) {
                if (tabOdd[i] % 2 != 0  && typeof tabOdd[i] == 'number') {
                    tabOdd[i] *= tabOdd[i];
                }
            }
            return tabOdd;

        },

        trapezeSquare:function(a,b,h){
            if(a < 0 || b < 0 || h < 0 || typeof a != 'number' || typeof b != 'number' || typeof h != 'number'){
                return false;
            }
            return 0.5*h*(a+b);

        }

    };
})();