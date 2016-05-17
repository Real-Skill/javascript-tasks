'use strict';
// var _ = require('lodash');

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

    pick1: function(colors) {
        var pick = ['red', 'yellow'];
        return [colors, pick];
    },

    pick2: function(colors) {
        var pick = 'green';
        return [colors, pick];
    },

    // pickBy1: function() {
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

    // setWith: function() {
    //     var object = {},
    //         path = '["number"]',
    //         value = 7,
    //         customizer = function(n) {
    //             return n*n;
    //         };
    //     return [object, path, value, function(n) {
    //         return n["number"];
    //     }];
    // },

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
        var obj = {
                'a': [{
                    'b': {
                        'c': 7
                    }
                }]
            },
            pattern = ['a', '0', 'b', 'c'];
        return [obj, pattern];
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
                    'rect1': {
                        'width': 4,
                        'height': 4
                    }
                }]
            },
            pattern = 'rectangle[0].rect1.height',
            updater = function(n) {
                return n * 3;
            },
            customizer = function() {
                // return {};
                return;
            };
        return [object, pattern, updater, customizer];
    },

    values1: function() {
        var F = function() {
            this.a = null;
            this.b = {
                'b': 2
            };
        };
        F.prototype.c = '2';
        return [new F()];
    },

    values2: function() {
        var F = function() {
            this.a = 1;
        };
        F.prototype.c = 2;
        return [new F()];
    },



    valuesIn1: function() {
        var F = function() {
            this.a = 1;
        };
        F.prototype.c = 2;
        return [new F()];
    },

    valuesIn2: function() {
        var F = function() {
            this.a = null;
        };
        F.prototype.c = undefined;
        return [new F()];
    }
};