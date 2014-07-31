describe('day4', function () {
    var answer = window.day4;
    describe('Boxes toString()', function () {
        beforeEach(function () {
            answer.mbox1.addBoxes(['cat', 'lion']);
            answer.mbox1.addBoxes(['cat2', 'lion2']);
            answer.mbox1.addBoxes(['dog', 'lion3']);

            answer.mbox2.addBoxes([]);
            answer.mbox3.addBoxes('4');
            answer.mbox4.addBoxes('dog');
            answer.mbox5.addBoxes(['dog', 'lion', 'tiger']);
            answer.mbox6.addBoxes('tiger');


        });

        it('Should return string what is inside the boxes', function () {
            expect(answer.mbox1.toStringBoxes()).toEqual('Inside this boxes is: cat,lion,cat2,lion2,dog,lion3,');
            expect(answer.mbox2.toStringBoxes()).toEqual('This boxes is empty');
            expect(answer.mbox3.toStringBoxes()).toEqual('Inside this boxes is: 4,');
            expect(answer.mbox4.toStringBoxes()).toEqual('Inside this boxes is: dog,');
            expect(answer.mbox5.toStringBoxes()).toEqual('Inside this boxes is: dog,lion,tiger,');
            expect(answer.mbox6.toStringBoxes()).toEqual('Inside this boxes is: tiger,');
        });


        afterEach(function () {
            answer.mbox1.emptyBoxes();
            answer.mbox2.emptyBoxes();
            answer.mbox3.emptyBoxes();
        });
    });
    describe('transportBoxes', function () {
        it('Should return we can transport this mbox1', function () {
            expect(answer.mbox1.transportBoxes(answer.car1)).toEqual("This car can transport this boxes");
            expect(answer.mbox1.transportBoxes(answer.car2)).toEqual("This car can transport this boxes");
            expect(answer.mbox1.transportBoxes(answer.car3)).toEqual("This car can't transport this boxes");
            expect(answer.mbox1.transportBoxes(answer.car4)).toEqual("This car can transport this boxes");
            expect(answer.mbox1.transportBoxes(answer.car5)).toEqual("This car can't transport this boxes");
            expect(answer.mbox1.transportBoxes(answer.car6)).toEqual("This car can't transport this boxes");
        });

        it('Should return we can transport this mbox2', function () {
            expect(answer.mbox2.transportBoxes(answer.car1)).toEqual("This car can't transport this boxes");
            expect(answer.mbox2.transportBoxes(answer.car2)).toEqual("This car can transport this boxes");
            expect(answer.mbox2.transportBoxes(answer.car3)).toEqual("This car can't transport this boxes");
            expect(answer.mbox2.transportBoxes(answer.car4)).toEqual("This car can transport this boxes");
            expect(answer.mbox2.transportBoxes(answer.car5)).toEqual("This car can't transport this boxes");
            expect(answer.mbox2.transportBoxes(answer.car6)).toEqual("This car can't transport this boxes");
        });

        it('Should return we can transport this mbox3', function () {
            expect(answer.mbox3.transportBoxes(answer.car1)).toEqual("This car can't transport this boxes");
            expect(answer.mbox3.transportBoxes(answer.car2)).toEqual("This car can't transport this boxes");
            expect(answer.mbox3.transportBoxes(answer.car3)).toEqual("This car can't transport this boxes");
            expect(answer.mbox3.transportBoxes(answer.car4)).toEqual("This car can't transport this boxes");
            expect(answer.mbox3.transportBoxes(answer.car5)).toEqual("This car can't transport this boxes");
            expect(answer.mbox3.transportBoxes(answer.car6)).toEqual("This car can't transport this boxes");
        });
    });
    describe('checkExistObject', function () {
        it("Check the user create object mbox<numbers>", function () {
            expect(answer.mbox1).not.toBeUndefined();
            expect(answer.mbox2).not.toBeUndefined();
            expect(answer.mbox4).not.toBeUndefined();
            expect(answer.mbox5).not.toBeUndefined();
            expect(answer.mbox6).not.toBeUndefined()
        });

        it("Check the user create object car<numbers>", function () {
            expect(answer.car1).not.toBeUndefined();
            expect(answer.car2).not.toBeUndefined();
            expect(answer.car3).not.toBeUndefined();
            expect(answer.car4).not.toBeUndefined();
            expect(answer.car5).not.toBeUndefined();
            expect(answer.car6).not.toBeUndefined()
        });
    });

    describe('Box Constructor and prototype functions ', function () {

        var box6 = Object.create(answer.box1);

        beforeEach(function () {
            answer.box1.addContent("bear");
            answer.box1.addContent("cat");
            answer.box1.addContent("bat");
            answer.box1.addContent("mouse");

            answer.box2.addContent("lion");
            answer.box2.addContent("tiger");

            answer.box3.addContent("bird");
            answer.box3.addContent("elephant");

            box6.id = 6;
            box6.setWidth("abc");
        });

        afterEach(function () {
            answer.box1.empty();
            answer.box2.empty();
            answer.box3.empty();
            answer.box4.empty();
        });

        describe('getContent', function () {

            it('should return array of box content', function () {
                expect(answer.box1.getContent()).toEqual(["bear", "cat", "bat", "mouse"]);
                expect(answer.box2.getContent()).toEqual(["lion", "tiger"]);
                expect(answer.box3.getContent()).toEqual(["bird", "elephant"]);
            });

            it('should return false if box is empty', function () {
                expect(answer.box4.getContent()).toBe(false);
                answer.box1.empty();
                expect(answer.box1.getContent()).toBe(false);
                expect(answer.box2.getContent()).not.toBe(false);
            });
        });

        describe('valueOf', function () {

            it('should return volume of box', function () {
                expect(answer.box1.valueOf()).toEqual(8);
                expect(answer.box2.valueOf()).toEqual(60);
                expect(answer.box3.valueOf()).toEqual(504);
                expect(answer.box4.valueOf()).toEqual(120);
            });

            it('should be false if parameters is not a number', function () {
                expect(answer.box5.valueOf()).toBe(false);
                expect(box6.valueOf()).toBe(false);
            });

        });

        describe('toString', function () {
            it('should return :Box #id Volume:volume\\nContain:\\nlistOfContent each element of list in new line', function () {
                expect(answer.box1.toString()).toEqual("Box #1 Volume:8\nContain:\nbear\ncat\nbat\nmouse");
                expect(answer.box2.toString()).toEqual("Box #2 Volume:60\nContain:\nlion\ntiger");
                expect(answer.box3.toString()).toEqual("Box #3 Volume:504\nContain:\nbird\nelephant");
                expect(answer.box4.toString()).toEqual("Box #4 Volume:120\nContain:\nnothing");
            });
        });

        describe('searchInContent', function () {
            it('should return searching content or false if content not exist', function () {
                expect(answer.box1.searchInContent("bat")).toEqual("bat");
                expect(answer.box1.searchInContent(2)).toBe(false);
                expect(answer.box2.searchInContent("tiger")).toEqual("tiger");
            });
        });

        describe('appendContent', function () {
            it('should add content to box from another box', function () {
                answer.box1.appendContent(answer.box4);
                answer.box2.appendContent(answer.box1);
                expect(answer.box1.getContent()).toEqual(['bear', 'cat', 'bat', 'mouse']);
                expect(answer.box2.getContent()).toEqual(['lion', 'tiger', 'bear', 'cat', 'bat', 'mouse']);

            });
            it('should not change appended object', function () {
                var tmpBoxContent1 = answer.box3.container;
                answer.box4.addContent("parrot");
                var tmpBoxContent2 = answer.box4.container;
                answer.box1.appendContent(answer.box3);
                answer.box2.appendContent(answer.box4);
                expect(answer.box3.getContent()).toEqual(tmpBoxContent1);
                expect(answer.box4.getContent()).toEqual(tmpBoxContent2);
            });
        });


        describe('Student objectst', function () {

            it('should student 1 to 3 be defined', function () {
                expect(answer.student1).not.toBeUndefined();
                expect(answer.student2).not.toBeUndefined();
                expect(answer.student3.marks).not.toBeUndefined();
            });
        });

        describe('Student.addMark', function () {

            beforeEach(function () {
                answer.student1.addMark(3);
                answer.student1.addMark(5);
            });
            it('should return [3, 5]', function () {
                expect(answer.student1.marks).toEqual([3, 5]);
            });

            it('should add element 2, 4, 3 and return correct array', function () {
                expect(answer.student1.addMark(2)).toEqual([3, 5, 2]);
                expect(answer.student1.addMark(4)).toEqual([ 3, 5, 2, 4 ]);
                expect(answer.student1.addMark(3)).toEqual([ 3, 5, 2, 4, 3 ]);
            });
            it("shouldn't add element different than number between 2 and 5", function () {
                expect(answer.student1.addMark(true)).toEqual([3, 5]);
                expect(answer.student1.addMark(["raz", "dwa"])).toEqual([3, 5]);
                expect(answer.student1.addMark("Napis")).toEqual([3, 5]);
                expect(answer.student1.addMark({name: "John", age: 55})).toEqual([3, 5]);

            });
            it("shouldn't add number elements from array", function () {
                expect(answer.student1.addMark([3, 4, 3])).toEqual([3, 5, 3, 4, 3]);
                expect(answer.student1.addMark([4, 2, 9, 9, 2, 2])).toEqual([3, 5, 3, 4, 3, 4, 2, 2, 2]);

            });

            afterEach(function () {
                answer.student1.marks = [];
            })


        });
        describe('Student.average', function () {
            beforeEach(function () {
                answer.student1.addMark(2);
                answer.student1.addMark(5);
                answer.student1.addMark(3);
            });
            it('should return average from marks in array', function () {
                expect(answer.student1.average()).toEqual(3.33);
                answer.student1.addMark(5);
                expect(answer.student1.average()).toEqual(3.75);
                answer.student1.addMark([2, 3, 2]);
                expect(answer.student1.average()).toEqual(3.14);
            });
            it('should return NaN if in array ara bad types', function () {
                answer.student1.marks = [3, "string", 4, 4];
                expect(answer.student1.average()).toBeFalsy();
                answer.student1.marks = [
                    {mark1: 3, mark2: 5},
                    4
                ];
                expect(answer.student1.average()).toBeFalsy()
            });
            afterEach(function () {
                answer.student1.marks = [];
            })
        });
        describe('getBestStudent', function () {
            var students;
            beforeEach(function () {
                answer.student1.addMark([2, 3, 5, 3, 4]);
                answer.student2.addMark([5, 4, 5, 3]);
                answer.student3.addMark([3, 2]);
                students = [answer.student1, answer.student2, answer.student3];
            });
            it('should return student with best marks average', function () {
                expect(answer.getBestStudent(students)).toBe(answer.student2);
                answer.student2.addMark([2, 2, 2, 2]);
                expect(answer.getBestStudent(students)).toBe(answer.student1);
                answer.student3.addMark([5, 5, 5, 5, 5]);
                expect(answer.getBestStudent(students)).toBe(answer.student3);
            });
            it('should return false if in array are types different than Student', function () {
                answer.student2.marks.push("string");
                expect(answer.getBestStudent(students)).toBeFalsy();
                expect(answer.getBestStudent([answer.student1, answer.student2])).toBeFalsy();
                expect(answer.getBestStudent([answer.student2, answer.student3])).toBeFalsy();
                expect(answer.getBestStudent([answer.student1, answer.student3])).not.toBeFalsy();
            });

            afterEach(function () {
                answer.student1.marks = [];
                answer.student2.marks = [];
                answer.student3.marks = [];
            })
        });
    });
});
