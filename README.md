# Exercise 4

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/day4.js** file.

#### Before you start...

Resolve provided dependencies by typing in console:

    npm install
    bower install

To test your solution locally, type:

    npm start
    
or

    npm test

JavaScript basic functions:

    http://www.w3schools.com/jsref/
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript



## Part I:

Create **Boxes** constructor to create multiple **box** objects. The constructor should accept following parameters:

    Boxes(length, width, weight)

In addition to given parameters(they should be assigned to the same box fields as the parameter name suggests) **Boxes**
should also define **inBoxes** property as an empty array.

## Part II:

Create **Car** constructor to create multiple **car** objects. The constructor should accept following parameters:

    Car(maxWeightTransport, maxSquareTransport)

The parameters should be assigned to the same box fields as the parameter name suggests.

## Part III:

In the first part of this exercise you were asked to create **Boxes** constructor. Your new task is to extend every
existing box object by **toStringBoxes** function, without modifying the original **part I** code.

**toStringBoxes** should return String value depending if the actual box object have anything in the **inBoxes** property array.
If there are items in **inBoxes** property it should return following String:

    Inside this boxes is: <element0,element1,[...]>

The **element0** expression is the String representation of item inside **inBoxes**. All the items should be concatenated as
one String comma separated. If **inBoxes** array in empty, the function should return:

    This box is empty

## Part IV:

To the **Boxes** prototype add **addBoxes** function without modifying the original **part I** code.
This function should accept a following parameter:

    addBoxes(content)

The **content** property should accept a String or an array of Strings. In every case, those strings should
be added to the **inBoxes** array inside of certain box. (Note: you shouldn't add the array of Strings, but instead
you should add every String in **content** array! The **inBoxes** array should only contain Strings)


## Part V:

Your new task is to extend every existing **box** object by **emptyBoxes** function, without modifying the original **part I** code.
This function should clear all the elements of a **inBoxes** property array.

## Part VI:

Your new task is to extend every existing **box** object by **squareBoxes** function, without modifying the original **part I** code.
This function should calculate and return the box surface from **length** and **width** property.

## Part VII:

Extend **Boxes** by **transportBoxes** function, without modifying the original **part I** code.
This function should make use of **squareBoxes** function from **part VI**. The method signature is as follows:

    transportBoxes(car)

In **part II** you were supposed to create a **Car** constructor. The **transportBoxes** accept car object as
a parameter **car**. It should check if the car **maxSquareTransport** is greater or equal to **squareBoxes** size
and **maxWeightTransport** is greater or equal to **weight** property of the box. If yes function should return a String:

    This car can transport this boxes

Otherwise, it should return following String:

    This car can't transport this boxes

## Part VIII:

Create a **Student** constructor that takes in **name** and **age** parameters:

    Student(name, age)

These parameters should be assigned to the proper fields of new object according to their name. Moreover, you are supposed
to add **marks** property that contain an empty array.

## Part IX:

To **Student** prototype add **addMark** function allowing you to add new mark to certain Student.
Mark is a Number that is greater or equal **2** but less or equal than **5** or an array of Numbers(with the same restrictions).
Nonetheless, every mark should be added to **marks** array inside of certain student object.

## Part X:

To **Student** prototype add **average** function allowing you to get average mark of the student.

## Part XI:

To **window.day4** object add **getBestStudent** function accepting an array of students as a parameter
and returning student with the best average mark(use **average** function).





