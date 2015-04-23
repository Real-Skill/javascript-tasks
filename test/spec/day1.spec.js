describe('day1', function () {
    var answer = window.day1;

    describe('getDescendingNumbers', function () {
        it('should return string with numbers separated by spaces', function () {
            expect(answer.getDescendingNumbers(15, 1)).toEqual("15 14 13 12 11 10 9 8 7 6 5 4 3 2 1");
        });

        it('should return false if start greater than stop', function () {
            expect(answer.getDescendingNumbers(1, 15)).toBeFalsy();
        });

        it('should return false if start is String', function () {
            expect(answer.getDescendingNumbers("asa", 1)).toBeFalsy();
        });
        it('should return false if stop is String', function () {
            expect(answer.getDescendingNumbers(1, "asa")).toBeFalsy();
        });

        it('should return false if start is number but String', function () {
            expect(answer.getDescendingNumbers("5", 1)).toBeFalsy();
        });

        it('should return false if start is NaN', function () {
            expect(answer.getDescendingNumbers(NaN, 1)).toBeFalsy();
        });


    });

    describe('deleteStr', function () {
        it('[Kamil] should return false if start is number but String', function () {
            expect(answer.deleteStr(['a'], ['a', 'b', 'c'])).toEqual(['b', 'c']);
        });
        it('[Rafal] should delete string from list', function () {
            expect(answer.deleteStr("Jan", ["Ala", "Michal", "Maciek", "Jan", "Andrzej"])).toEqual(["Ala", "Michal", "Maciek", "Andrzej"]);
        });
        var answer = window.day1;
        it("[Max] Should return string ", function () {
            expect(answer.deleteStr('kota', ['ala', 'ma', 'kota'])).toEqual(['ala', 'ma']);
        });

        it('[Dawid] should return array of string without ma', function () {
            expect(answer.deleteStr("ma", ["ala", "ma", "kota"])).toEqual(["ala", "kota"]);
        });

    });

    describe('stringCounter', function () {
        it('[Kamil] should count string in list', function () {
            expect(answer.stringCounter(['a,b,c'])).toEqual(1);

        });
        it('[Rafal] should count string in list', function () {
            expect(answer.stringCounter(["a", 5, "b", "c", 7, " "])).toEqual(4);
        });

        it('[Max] Return count string', function () {
            expect(answer.stringCounter(['bernardyn', 2, 3, 4, 5, 6])).toEqual(1);
        });

        it('[Max] Return count string', function () {
            expect(answer.stringCounter([])).toEqual(0);
        });

        it('[Dawid] should return number of strings', function () {
            expect(answer.stringCounter([])).toEqual(0);
        });

    });

    describe('squareOdd', function () {
        it('should return square the odd numbers', function () {
            expect(answer.squareOdd([1, 2, 3, 4])).toEqual([1, 2, 9, 4]);
        });

        it('should return empty array', function () {
            expect(answer.squareOdd([])).toEqual([]);
        });

        it('should return array of string', function () {
            expect(answer.squareOdd(['cos', 'olo'])).toEqual(['cos', 'olo']);
        });

        it('should return array of string and square the odd numbers', function () {
            expect(answer.squareOdd(['cos', 2, 3, 9, 'olo'])).toEqual(['cos', 2, 9, 81, 'olo']);
        });

    });

    describe('trapezeSquare', function () {
        it('should return calculate area of trapeze', function () {
            expect(answer.trapezeSquare(2,2,2)).toEqual(4);
        });
        it('should return calculate area of trapeze', function () {
            expect(answer.trapezeSquare(1,3,6)).toEqual(12);
        });
        it('negative numbers should return false', function () {
            expect(answer.trapezeSquare(-1,3,6)).toBeFalsy();
        });
        it('string should return false', function () {
            expect(answer.trapezeSquare(-1,"cos",6)).toBeFalsy();
        });
    });
});