module.exports = {
    
    functions: function() {
        function Foo() {
            this.square = function() {
                return (this.n * this.n);
            };
            this.n = 5;
        }
        Foo.prototype.cube = function() {
            return (this.n * this.n * this.n);
        };
        return [new Foo()];
    },

    functionsIn: function() {
        function Foo() {
            this.square = function() {
                return (this.n * this.n);
            };
            this.n = 5;
        }
        Foo.prototype.cube = function() {
            return (this.n * this.n * this.n);
        };
        return [new Foo()];
    },

    pick1: function() {
        var colors = {
            'red': 1,
            'green': 2,
            'blue': 3,
            'yellow': 4
        };
        var pick = ['red', 'yellow'];
        return [colors, pick];
    },

    pick2: function() {
        var colors = {
            'red': 1,
            'green': 2,
            'blue': 3,
            'yellow': 4
        };
        var pick = 'green';
        return [colors, pick];
    },

    pickBy1: function() {
        // var dimens = {
        //         'x': 16,
        //         'y': 8,
        //         'z': 4
        //     },
        //     arr = [0];
        // return [dimens, arr];
    },

    pickBy2: function() {
        var dimens = {
                'x': 16,
                'y': 8,
                'z': 4
            },
            fun = function(n) {
                return n > 10;
            };
        return [dimens, fun];
    },

    // pickBy3: function() {
    //     var dimens = {
    //             'x': 16,
    //             'y': 8,
    //             'z': 4
    //         },
    //         fun = function(n) {
    //             return n > 10;
    //         };
    //     return [dimens, fun];
    // },

    // pickBy4: function() {
    //     var dimens = {
    //             'x': 16,
    //             'y': 8,
    //             'z': 4
    //         },
    //         fun = function(n) {
    //             return n > 10;
    //         };
    //     return [dimens, fun];
    // },

    set1: function(figure) {
        var
            pattern = 'rectangle[0].rect1.height',
            value = 8;
        return [figure, pattern, value];
    },

    set2: function(figure) {
        var
            pattern = ['rectangle', 0, 'rect1', 'height'],
            value = 8;
        return [figure, pattern, value];
    },

    setWith: function() {
        var object = {},
            path = '["num"]',
            value = 7,
            customizer = function(){};
        return [object, path, value, customizer];
    },

    toPairs: function() {
        var Fruits = function() {
            this.apple = 'green';
            this.banana = 'yellow';
        };
        Fruits.prototype.cherry = 'red';
        return [new Fruits()];
    },

    toPairsIn: function() {
        var Fruits = function() {
            this.weight = 0.2;
        };
        Fruits.prototype.eatable = true;
        return [new Fruits()];
    },

    transform1: function() {
        var numbers = [2, 4, 6, 8, 10],
            fun = function(res, n) {
                res.push(n + 1 + '');
                return n < 5;
            },
            acc = [];
        return [numbers, fun, acc];
    },

    transform2: function() {
        var obj = {
                'weight': 10,
                'width': 5,
                'height': 600
            },
            fun = function(result, value, key) {
                (result[value] || (result[value] = [])).push(key);
            },
            acc = {};
        // console.log(_.transform(obj, fun, acc));
        return [obj, fun, acc];
    },

    unset1: function() {
        var figure = {
                'rectangle': [{
                    'square': {
                        'width': 4,
                        'height': 4
                    }
                }]
            },
            pattern = 'rectangle[0].square.height';
        return [figure, pattern];
    },

    unset2: function() {
        var figure = {
                'triangle': [{
                    'deminsions': {
                        'a': 2,
                        'b': 3,
                        'c': 4,
                        'd': 5
                    }
                }]
            },
            pattern = ['triangle', '0', 'deminsions', 'd'];
        return [figure, pattern];
    },

    update: function() {
        var object = {
                'rectangle': [{
                    'rect1': {
                        'width': 4,
                        'height': 4
                    }
                }]
            },
            pattern = 'rectangle[0].rect1.height',
            updater = function(n) {
                return n * 2;
            };
        return [object, pattern, updater];
    },

    updateWith: function() {
        var object = {
                'rectangle': [{
                    'rect2': {
                        'width': 4,
                        'height': 4
                    }
                }]
            },
            pattern = 'rectangle[0].rect2.height',
            updater = function(n) {
                return n * 3;
            },
            customizer = Object;
        return [object, pattern, updater, customizer];
    },

    values: function() {
        var F = function() {
            this.a = null;
            this.b = 2;
        };
        F.prototype.c = '3';
        return [new F()];
    },

    // values2: function() {
    //     var F = function() {
    //         this.a = 1;
    //     };
    //     F.prototype.c = 2;
    //     return [new F()];
    // },



    valuesIn: function() {
        var F = function() {
            this.a = 6;
        };
        F.prototype.c = 7;
        return [new F()];
    },

    // valuesIn2: function() {
    //     var F = function() {
    //         this.a = null;
    //     };
    //     F.prototype.c = undefined;
    //     return [new F()];
    // }
};