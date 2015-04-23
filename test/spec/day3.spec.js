(function () {
    describe('day3', function () {
        var answer = window.day3;

        describe('book.delProperty', function () {
            it('should return book without numPages', function () {
                expect(answer.book.delProperty("numPages")).toEqual({title: "Kot w butach", author: "Jan Kowalski", comments: "Good book!", delProperty: jasmine.any(Function)});
            });
            it('should answer undefined for request numPages', function () {
                expect(answer.book.delProperty("numPages").numPages).toEqual(undefined);
            });


        });


        describe('propertyNames', function () {
            it('should array of property names and values', function () {
                expect(answer.propertyNames({name: "Jan", age: 34})).toEqual([
                    ["name", "Jan"],
                    ["age", 34]
                ]);
            });
            it('should array of indeks and values', function () {
                expect(answer.propertyNames({item: 'book', comment: 'sample string'})).toEqual([
                    [ 'item', 'book' ],
                    [ 'comment', 'sample string' ]
                ]);
            });


        });
        describe('mergeObject', function () {
            it('should return one object cointins all atributes', function () {
                expect(answer.mergeObject({name: "Jan", age: 34}, {title: "Kot w butach", comments: "Good book!"})).toEqual({ name: 'Jan', age: 34, title: 'Kot w butach', comments: 'Good book!' });
            });
            it("should return false if any arguement are string", function () {
                expect(answer.mergeObject({name: "Jan", age: 34}, "ala")).toBeFalsy();
            });
            it("should return false if any arguement are boolean", function () {
                expect(answer.mergeObject(true, {title: "Kot w butach", comments: "Good book!"})).toBeFalsy();
            });


        });
        describe('countVowes', function () {
            it("should return 4", function () {
                expect("String Testowy".countVowels()).toEqual(4);
            });
            it("should return 0 for empty string", function () {
                expect("".countVowels()).toEqual(0);
            });

        });
        describe('arrayToString', function () {
            it("should return 'raz dwa trzy'", function () {
                expect(["raz", "dwa", "trzy"].arrayToString()).toEqual("raz dwa trzy");
            });
            it("should return 'raz 2 trzy 4'", function () {
                expect(["raz", 2, "trzy", 4].arrayToString()).toEqual("raz 2 trzy 4");
            });
            it("should return 'false 0 1 2'", function () {
                expect([false, 0, 1, 2].arrayToString()).toEqual("false 0 1 2");
            });


        });

        describe("countCharInProperties", function () {
            it('Should return value exist a letter in name properties', function () {
                expect(answer.countCharInProperties(answer.aqurium, 'a')).toEqual(7);
                expect(answer.countCharInProperties(answer.aqurium, 'b')).toEqual(0);
                expect(answer.countCharInProperties(answer.aqurium, 'f')).toEqual(5);
                expect(answer.countCharInProperties(answer.aqurium, 's')).toEqual(7);
                expect(answer.countCharInProperties(answer.aqurium, 'e')).toEqual(27);
                expect(answer.countCharInProperties(answer.aqurium, 't')).toEqual(14);
            });
        });

        describe("Number.prototype.addNumber", function () {
            it('Should return added two numbers', function () {
                var temp = 123;
                expect(temp.addNumber(5)).toEqual(128);
                expect(temp.addNumber(10)).toEqual(133);
                expect(temp.addNumber(13)).toEqual(136);
                expect(temp.addNumber(12)).toEqual(135);
                expect(temp.addNumber(1654)).toEqual(1777);
                expect(temp.addNumber(1645)).toEqual(1768);
                expect(temp.addNumber(965)).toEqual(1088);

            });
        });

        describe("Number.prototype.maxValueFromTwoArguments", function () {
            it('Should return max value from two arguments and this', function () {
                var temp = 123;
                expect(temp.maxValueFromTwoArguments(1, 200)).toEqual(200);
                expect(temp.maxValueFromTwoArguments(1000, 22)).toEqual(1000);
                expect(temp.maxValueFromTwoArguments(213, 22)).toEqual(213);
                expect(temp.maxValueFromTwoArguments(321, 2234)).toEqual(2234);
                expect(temp.maxValueFromTwoArguments(42, 21)).toEqual(temp);
                expect(temp.maxValueFromTwoArguments(34525, 213)).toEqual(34525);
            });
        });
        describe('getWidth', function () {
            it('should return array of width', function () {
                expect(answer.getWidth(answer.boxlist)).toEqual(["box1: 5", "box2: 2", "box3: 7"]);

            });

            it('should return empty array if list is empty', function () {
                expect(answer.getWidth({})).toEqual([]);
            });
        });

        describe('getVolume', function () {
            it('should return volume of boxes in string array, last element should be sum of all volumes saved as number', function () {
                expect(answer.getVolume(answer.boxlist)).toEqual(["box1 volume: 250", "box2 volume: 98", "box3 volume: 350", 698]);
            });

        });

        describe('getMaxVolume', function () {
            it('should max volume from array contains boxes', function () {
                expect(answer.getMaxVolume(answer.boxlist)).toEqual(350);
            });
        });

        describe('changePropertyName', function () {
            var propNamesBefore = [];
            var propNamesAfter = [];
            beforeEach(function () {

                for (var ele in answer.person) {
                    propNamesBefore.push(ele);
                }
                answer.changePropertyName(answer.person, "age", "newAge");
                for (var ele in answer.person) {
                    propNamesAfter.push(ele);
                }
            });
            afterEach(function () {
                propNamesBefore = [];
                propNamesAfter = [];
            });

            it('should change property name in object', function () {
                expect(propNamesAfter).not.toEqual(propNamesBefore);
            });

            it('should change property age to newAge', function () {
                expect(propNamesAfter).toEqual(["firstName", "secondName", "newAge"]);
            });

            it('should return false if property not exist', function () {
                expect(answer.changePropertyName(answer.person), "height", "width").toBe(false);
            });
        });

        describe('makeObject', function () {
            it('should make object from 2D array', function () {
                expect(answer.makeObject([
                    ["name", "first"],
                    ["type", 1],
                    ["mode", "normal"]
                ])).toEqual({name: "first", type: 1, mode: "normal"});
            });

            it('should return false if second dimension is not 2', function () {
                expect(answer.makeObject([
                    ["name", "first"],
                    ["type", 1, 3],
                    ["mode", "normal"]
                ])).toBe(false);
            });
        });
    });
})();
