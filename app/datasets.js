'use strict';
// var _ = require('lodash');

module.exports = {

    test: function() {
        return [];
    },

    parseInt: function() {
        var str = '-128-';
        var radix = 16;
        return [str, radix];
    },
    repeat: function() {
        var dot = '.';
        var times = 3;
        return [dot, times];
    },
    replace1: function() {
        var str = 'My favourite color is black';
        var pattern = 'black';
        var replacement = 'blue';
        return [str, pattern, replacement];
    },
    replace2: function() {
        var str = 'My favourite color is black';
        var pattern = /black/g;
        var replacement = 'blue';
        return [str, pattern, replacement];
    },
    replace3: function() {
        var str = 'My favourite color is black';
        var pattern = 'black';
        var replacement = function(r) {
            r = 'blue';
            return r;
        };
        return [str, pattern, replacement];
    },
    replace4: function() {
        var str = 'My favourite color is black';
        var pattern = /black/g;
        var replacement = function(r) {
            r = 'blue';
            return r;
        };
        return [str, pattern, replacement];
    },
    snakeCase: function() {
        var str = 'green Snakes are green obviously';
        return [str];
    },
    split1: function() {

        var str, sep, lim;
        str = 'Trust me!';
        // string = 'Trust me! I am engineer!';
        sep = ' ';
        lim = 2;
        return [str, sep];
    },
    split2: function() {
        var str, sep, lim;
        str = 'Trust me! I am engineer!';
        sep = / /g;
        lim = 2;
        return [str, sep, lim];
    },
    startCase: function() {
        var str = 'starts FromThe beginning';
        return [str];
    },
    startsWith: function() {
        var str = 'a is first letter of the alphabet';
        var target = 'a';
        var num = 0;
        return [str, target, num];
    },
    template: function() {
        // [string=''] (string): The template string.
        // [options={}] (Object): The options object.
        // [options.escape=_.templateSettings.escape] (RegExp): The HTML "escape" delimiter.
        // [options.evaluate=_.templateSettings.evaluate] (RegExp): The "evaluate" delimiter.
        // [options.imports=_.templateSettings.imports] (Object): An object to import into the template as free variables.
        // [options.interpolate=_.templateSettings.interpolate] (RegExp): The "interpolate" delimiter.
        // [options.sourceURL='lodash.templateSources[n]'] (string): The sourceURL of the compiled template.
        // [options.variable='obj'] (string): The data object variable name.

        var str = 'give mE sOmE suGar';
        var options = {
            'variable': 'data'
        };
        return [str, options];
    },
    toLower: function() {
        var str = 'give mE sOmE suGar';
        return [str];
    },
    toUpper: function() {
        var str = 'give mE sOmE ChocOLate';
        return [str];
    },

    trim: function() {
        var str = 'trim me please;';
        var chars = ' ;';
        return [str, chars];
    },
    trimEnd: function() {
        var str = ' spaces everywhere ';
        return [str];
    },
    trimStart: function() {
        var str = ' spaces everywhere ';
        return [str];
    },
    truncate1: function() {
        var longstring = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi, rhoncus id lobortis non, pharetra non erat.';
        var options = {
            'length': 30,
            'separator': ' ',
            'omission': '...'
        };
        return [longstring, options];
    },
    truncate2: function() {
        var longstring = 'Lorem ipsum dolor sit amet - consectetur adipiscing elit. In eros mi, rhoncus id lobortis non, pharetra non erat.';
        var options = {
            'length': 30,
            'separator': /-/g,
            'omission': '..'
        };
        return [longstring, options];
    },
    unescape: function() {
        var str = '10 &gt; 5';
        return [str];
    },
    upperCase: function() {
        var string = 'give me some coffee';
        return [string];
    },
    upperFirst: function() {
        var string = 'give me some tea';
        return [string];
    },

    words1: function() {
        var string, pattern;
        string = 'I like potatoes';
        pattern = 'potatoes';
        return [string];
    },
    words2: function() {
        var string, pattern;
        string = 'Do-you-like-camels?';
        pattern = /[^-]+/g;
        return [string, pattern];
    },



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

    pickBy1: function() {
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

    pickBy3: function() {
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

    pickBy4: function() {
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

    set1: function() {
        var figure = {
                'rectangle': [{
                    'rect1': {
                        'width': 4,
                        'height': 4
                    }
                }]
            },
            pattern = 'rectangle[0].rect1.height',
            value = 8;
        return [figure, pattern, value];
    },

    set2: function() {
        var figure = {
                'rectangle': [{
                    'rect1': {
                        'width': 4,
                        'height': 4
                    }
                }]
            },
            pattern = ['rectangle', 0, 'rect1', 'height'],
            value = 8;
        return [figure, pattern, value];
    },

    setWith: function() {
        var object = {

            },
            pattern = ' ',
            value = 10,
            customizer = function() {

            };
        return [object, pattern, value, customizer];
        // _.setWith(object, '[0][1]', 'a', Object);
        // → { '0': { '1': 'a' } }
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
