describe('day2', function () {
    var answer = window.day2;
    describe('createArrayObject', function () {
        it('should return array object numeric', function () {
            expect(answer.createArrayObject(15, 1, 3)).toEqual({property1: 15, property2: 1, property3: 3});
        });
        it('should return array object string and numeric', function () {
            expect(answer.createArrayObject('asdas', 'asd', 3)).toEqual({property1: 'asdas', property2: 'asd', property3: 3});
        });
        it('should return array object string and numeric with undefined', function () {
            expect(answer.createArrayObject(undefined, 'asd', 3)).toEqual({property1: undefined, property2: 'asd', property3: 3});
        });
    });
    describe("testIsAnyReturnFunction", function () {
        it('should return true', function () {
            expect(answer.testIsAnyReturnFunction(true)).toBeTruthy();
            expect(answer.testIsAnyReturnFunction(true)).toEqual(true);
        });
        it('should return false or undefined', function () {
            expect(answer.testIsAnyReturnFunction(false)).toBe(undefined);
            expect(answer.testIsAnyReturnFunction(false)).toBeFalsy();
        });
    });
    describe("arrayFunction", function () {
        it('Should return depends of index even a square not even cube. ', function () {
            expect(answer.arrayFunction([1, 2, 3, 4])).toEqual([ 1, 8, 9, 64 ]);
        });
    });
    describe("addPropertiesToObjectCheckNumber", function () {
        it('should return change object input value number', function () {
            expect(answer.addPropertiesToObjectCheckNumber({properties1: 20, properties2: 30}, "properties3", 1234)).toEqual({properties1: 20, properties2: 30, properties3: 1234});
        });
        it("should return change object input string asd", function () {
            expect(answer.addPropertiesToObjectCheckNumber({properties1: 20, properties2: 30}, 'properties3', 'asd')).toEqual({properties1: 20, properties2: 30, properties3: 'asd'});
        });
    });
    describe('multiplyElementOfArray', function () {

        it('should array where elements with odd index are multiply by 4 and even index element are multiply by 3', function () {
            expect(answer.multiplyElementOfArray([2, 3, 4, 5])).toEqual([6, 12, 12, 20]);
        });

        it('should return unchanged array of string when input is a string array', function () {
            expect(answer.multiplyElementOfArray(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]);
        });

        it('should return  array with multiply numbers elements and unchanged string element when input is a string and number array', function () {
            expect(answer.multiplyElementOfArray(["a", 2, "c", 3])).toEqual(["a", 8, "c", 12]);
        });

    });

    describe('maxArray', function () {

        it('should return max element from array', function () {
            expect(answer.maxArray([2, 5, 7, 1, 3, 20, 10, 19])).toEqual(20);
        });

        it('should return false if array not contain numbers ', function () {
            expect(answer.maxArray(["a", "b", "c"])).toBeFalsy();
        });

        it('should return false when array contain numbers and other elements', function () {
            expect(answer.maxArray(["a", 7, "c", 3, "ala", "jankowalski", 10])).toBeFalsy();
        });
    });

    describe('swapString', function () {

        it('should swap string in array', function () {
            expect(answer.swapString(["ala", "ma", "kota"], "ala", "marysia")).toEqual(["marysia", "ma", "kota"]);
        });
        it('should return false if stringToSwap not exist in array', function () {
            expect(answer.swapString(["ala", "ma", "kota"], "marysia", "kot")).toBeFalsy();
        });
    });

    describe('getObject', function () {

        var list = [
            {name: "Jan", age: 10},
            {name: "Ala", age: 14},
            {name: "Andrzej", age: 30},
            {name: "Maria", age: 55}
        ];

        it('should return object from list', function () {
            expect(answer.getObject(list, "Ala")).toEqual({name: "Ala", age: 14});
        });

        it('should return false if object not exist', function () {
            expect(answer.getObject(list, "Rafał")).toBeFalsy();
        });
    });

    describe('doAdult', function () {

        var list = [
            {name: "Jan", age: 10},
            {name: "Ala", age: 14},
            {name: "Andrzej", age: 30},
            {name: "Maria", age: 55}
        ];
        var teenAge = list[0].age;
        var adultAge = list[3].age;

        beforeEach(function () {
            answer.doAdult(list);
        });
        it('should change person age', function () {
            expect(list[0].age).not.toEqual(teenAge);
        });
        it('should change person age to 18 if age<18', function () {
            expect(list[1].age).toEqual(18);
        });
        it('should dont change age if aga>18', function () {
            expect(list[3].age).toEqual(adultAge);
        });

    });
    describe('findTheBiggerBox', function () {
        it('should return 2 (#box)', function () {
            expect(answer.findTheBiggerBox(8, 6, 5)).toEqual(2);
        });
        it('should return 1 (#box)', function () {
            expect(answer.findTheBiggerBox(5, 1, 1)).toEqual(1);
        });
        it('should return false for string value (#box)', function () {
            expect(answer.findTheBiggerBox(9, "string1", 2)).toBeFalsy();
        });


    });
    describe('makePerson', function () {
        it('should return object Dawid Zegar', function () {
            expect(answer.makePerson("Dawid", "Zegar", 23)).toEqual({firstName: "Dawid", lastName: "Zegar", age: 23});
        });
        it('should return object Jan Kowalski', function () {
            expect(answer.makePerson("Jan", "Kowalski", 44)).toEqual({firstName: "Jan", lastName: "Kowalski", age: 44});
        });


    });
    describe('invertString', function () {

        it('should return 1tseT', function () {
            expect(answer.invertString("Test1")).toEqual("1tseT");
        });
        it('should return false', function () {
            expect(answer.invertString(234)).toBeFalsy();
        });


    });
    describe('factorial', function () {

        it('should return [1, 1]', function () {
            expect(answer.factorial(1)).toEqual([1, 1]);
        });
        it('should return 6 element = 720', function () {
            expect(answer.factorial(7)[6]).toEqual(720);
        });

    });
    describe('sumObject', function () {

        it('should return 38', function () {
            expect(answer.sumObject({param0: 2, param1: 5, param2: 9, param3: 2, param4: 20})).toEqual(38);
        });


    });
});
