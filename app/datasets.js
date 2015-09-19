'use strict';


module.exports = {

    assign: function(){

        var obj = {
            number: 5,
            square: 25,
            'ping': function() {
                return 'Number: ' + this.number;
            },
            'pong': function(){
                return 'Number: ' + this.square;
            },
        };

        function Obj2() {
            this.number = 6;
            this.string = 'default';
        }

        Obj2.prototype.square = 36;

        return [obj, new Obj2()];
    },

    //alias _.extend
    assignIn: function(){
        var obj = {
            number: 5,
            'square': function(){
                return 'Square: ' + Math.pow(Math, this.number);
            },
        };

        function Obj2() {
            this.number = 4;
            this.cube = 64;
        }

        Obj2.prototype.fourthPower = 256;

        Obj2.prototype.square = function(){
            return 'Square: ' + Math.pow(Math, this.number);
        };

        return [obj, new Obj2()];
    },

    at1: function(obj){

        var filterArr = ['book[0].other.pages', 'book[0].count'];
        return [obj, filterArr];
    },

    at2: function(){
        var filtrationArr = ['mate', 'companion', 'fellow', 'worker', 'friend', 'helper'],
            filterNumbers = [0, 4];

        return [filtrationArr, filterNumbers];
    },

    create: function(){

        //I don't have possibilty to give function
        //prototype of Object
    },

    defaults: function(){
        var obj1 = {
            name: 'John',
            surname: 'Smith',
            age: 25
        };

        var obj2 = {
            name: 'Tom',
            gender: 'male'
        };

        var obj3 = {
            surname: 'Twist',
            age: 33
        };

        return [obj1, obj2, obj3];
    },

    defaultsDeep: function(){

        var obj1 = {
            data: {
                text: 'Tim',
                reversedText: 'miT'
            }
        };

        var obj2 = {
            data: {
                text: 'mouse',
                reversedText: 'esuom',
                lengthText: function(){
                    return this.text.length;
                }
            }
        };

        return [obj1, obj2];
    },

    findKey1: function(obj){

        var filter = function (n){
            return n.number > 20 ;
        };

        return [obj, filter];

    },

    findKey2: function(obj) {

        var value = { number: 15 };

        return [obj, value];
    },

    findKey3: function(obj) {

        var arr = ['bool', false];

        return [obj, arr];
    },

    findKey4: function(obj) {

        var filterStr = 'cube';

        return [obj, filterStr];
    },

    findLastKey1: function(obj){
        var filter  = function(o){
            return o.pizza === true && o.pasta === false;
        };

        return [obj, filter];
    },

    findLastKey2: function(obj){

        var filterObj = {pizza: true, lasagne: true};

        return [obj, filterObj];
    },

    findLastKey3: function(obj){

        var filterArr = ['number', 17];

        return [obj, filterArr];
    },

    findLastKey4: function(obj){

        var filterStr = 'pasta';

        return [obj, filterStr];
    },

    forIn: function(){

        function Person(){
            this.arms = 2;
            this.legs = 2;
        }

        Person.prototype.head = 1;

        var fun = function(value, key, object){
            return object[key] = value * value;
        };

        return [new Person(), fun];
    },

    forInRight: function(){

        function Person(){
            this.arms = 2;
            this.legs = 2;
        }

        Person.prototype.head = 1;

        var fun = function(value, key, object){
            return object[key] = value + value;
        };

        return [new Person(), fun];
    },

    forOwn: function(){

        function Circle(){
            this.r = 7.6;
            this.d = 14.3;
        }

        Circle.prototype.l = 4.4;

        var fun = function(value, key, object){
            return object[key] = Math.round(value);
        };

        return [new Circle(), fun];
    },

    forOwnRight: function(){

        function Circle(){
            this.r = 7.6;
            this.d = 14.3;
        }

        Circle.prototype.l = 4.4;

        var fun = function(value, key, object){
            return object[key] = Math.round(value);
        };

        return [new Circle(), fun];
    },

    get1: function(obj){

        var filterStr = 'exercises.tasks[2].thirdTask';

        return [obj, filterStr];
    },

    get2: function(obj) {

        var filterArray = ['exercises', 'tasks', '2', 'thirdTask'];

        return [obj, filterArray];
    },

    get3: function(obj){

        var filterStr = 'month.January.Monday',
            defaultValue = 'default value';

        return [obj, filterStr, defaultValue];
    },

    has1: function(){

        var obj = {
                bike: {
                    wheels: 2,
                    saddle: 1
                }
            },
            filterStr = 'bike.wheels';

        return [obj, filterStr];
    },

    has2: function(){

        var obj = {
                bike: {
                    wheels: 2,
                    saddle: 1
                }
            },
            filterArr = ['bike', 'wheels'];

        return [obj, filterArr];
    },

    hasIn1: function(){

        var obj = {
                bike: {
                    wheels: 2,
                    saddle: 1
                }
            },
            filterStr = 'bike.wheels';

        return [obj, filterStr];
    },

    hasIn2: function(){

        var obj = {
                bike: {
                    wheels: 2,
                    saddle: 1
                }
            },
            filterArr = ['bike', 'wheels'];

        return [obj, filterArr];
    },

    invert: function(obj1){

        return [obj1];
    },

    invertBy1: function(obj1){

        return [obj1];
    },

    invertBy2: function(obj){

        var filter = function(value){
            return 'chosen' + value;
        };

        return [obj, filter];
    },

    invoke1: function(obj){

        //object has array, array has object in object
        var filterStr = 'key[0].number.random.unshift',
            unshiftNumber = 99;

        return [obj, filterStr, unshiftNumber];
    },

    invoke2: function(obj){

        var filterStr = 'key[0].number.random.pop';

        return [obj, filterStr];
    },

    keys: function(){

        function Classroom() {
            this.teacher = 'Mr. Tom';
            this.students = 27;
            this.girls = 15;
            this.boys = 12;
        }

        Classroom.prototype.animals = 1; //properties

        return [new Classroom()];
    },

    keysIn: function(){

        function Animal() {
            this.arms = 4;
            this.legs = 8;
            this.heads = 2;
        }

        Animal.prototype.limbs = function(){
            return this.arms + this.legs;
        };

        Animal.prototype.tails = 1;

        return [new Animal()];
    },

    mapKeys1: function(){

        //function doesn't make sense
        // with array like second argument
    },

    mapKeys2: function(obj){

        var filter  = function(value, key){
            return key + ' - number: ' + value;
        };

        return [obj, filter];
    },

    mapKeys3: function(){

        //function doesn't make sense
        // with object like second argument
    },

    mapKeys4: function(){

        //function doesn't make sense
        // with string like second argument
    },


    mapValues1: function(obj){

        var filter = function(p){
            return p.vmax;
        };

        return [obj, filter];
    },


    mapValues2: function(obj){

        var filterStr = 'name';

        return [obj, filterStr];
    },

    merge: function(){

        var owners = {
            'data': [{ 'owner': 'Adam' }, { 'owner': 'Tom' }, { 'owner': 'John'}]
        };
        var animals = {
            'data': [{ 'cats': 3 }, { 'dogs': 5 }, { 'ostrich': 1 }]

        };

        return [owners, animals];
    },

    mergeWith: function(){

        var obj1 = {
            'website': ['blog'],
            'technique': ['HTML5']
        };

        var obj2 = {
            'website': ['shop'],
            'technique': ['xHTML'],
        };

        var filter = function(prevObj, currObj){
            return prevObj.concat(currObj);
        };

        return [obj1, obj2, filter];
    },

    omit1: function(obj){

        var str = '';

        return [obj, str];
    },

    omit2: function(obj){
        var arr = ['number5', 'number44'];

        return [obj, arr];
    },

    omitBy1: function(obj, filter){

        return [obj, filter];
    },

    omitBy2: function(){

        //function doesn't make sense
        // with other predicate
    },

    result1: function(obj){

        var filterStr = 'exercises.tasks[2].thirdTask';

        return [obj, filterStr];
    },

    result2: function(obj) {

        var filterArray = ['exercises', 'tasks', '2', 'thirdTask'];

        return [obj, filterArray];
    },

    result3: function(obj){

        var filterStr = 'month.January.Monday',
            defaultValue = 'default value';

        return [obj, filterStr, defaultValue];
    },

    result4: function(obj){

        var filterStr = 'month.January.Monday';

        var filter = function(){
            return 'default value';
        };

        return [obj, filterStr, filter];
    }
};