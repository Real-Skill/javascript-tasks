'use strict';

var chai = require('chai');
var expect = chai.expect;
var datasets = require('../../app/datasets');
var _ = require('lodash');

describe('Lodash training', function () {
    var params;

    describe('camelCase', function () {
        before(function () {
            params = datasets.camelCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should check if string is not already in camelcase', function () {
                expect(_.camelCase.apply(_, params)).to.not.eql(params[0]);
            }
        );
        it('should return converted string', function () {
                expect(_.camelCase.apply(_, params)).to.eql('someStringToTestFunction');
            }
        );
    });

    describe('capitalize', function () {
        before(function () {
            params = datasets.capitalize();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should check if first character is already in in uppercase', function () {
            expect(params[0][0]).to.not.match(/[A-Z]+/g);
        });
        it('should convert the first character of given string', function () {
                expect(_.capitalize.apply(_, params)).to.eql('Some string to test function');
            }
        );
    });

    describe('deburr', function () {
        before(function () {
            params = datasets.deburr();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should contain any special characters', function () {
            expect(params[0]).to.match(/[\u00C0-\u00ff\u0100-\u017F]+/g);
        });
        it('should remove combining diacritical marks from string', function () {
                expect(_.deburr.apply(_, params)).to.eql('some string to test function');
            }
        );
    });

    describe('endsWith', function () {
        before(function () {
            params = datasets.endsWith();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(params).to.have.length.within(2, 3);
            if (params[2] !== undefined && params.length === 3) {
                expect(Number.isInteger(params[2])).to.eql(true);
            }
        });
        it('should check if letter on given position is a target string', function () {
                if (params[2] !== undefined) {
                    expect(params[0][params[2] - 1]).to.eql(params[1]);
                }
            }
        );
        it('should check if string ends with the given target string', function () {
                expect(_.endsWith.apply(_, params)).to.eql(true);
            }
        );
    });

    describe('escape', function () {
        before(function () {
            params = datasets.escape();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should return converted string', function () {
                expect(_.escape.apply(_, params)).to.eql('Tom &amp; Jerry are old friends');
            }
        );
    });

    describe('escapeRegExp', function () {
        before(function () {
            params = datasets.escapeRegExp();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should return converted string', function () {
                expect(_.escapeRegExp.apply(_, params)).to.eql('\\[realskill\\]\\(https://realskill\\.com/\\)');
            }
        );
    });

    describe('kebabCase', function () {
        before(function () {
            params = datasets.kebabCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should check if string is not already in kebabcase', function () {
                expect(_.kebabCase.apply(_, params)).to.not.eql(params[0]);
            }
        );
        it('shold return transformed string', function () {
                expect(_.kebabCase.apply(_, params)).to.eql('some-string-to-test-function');
            }
        );
    });

    describe('lowerCase', function () {
        before(function () {
            params = datasets.lowerCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should check if string contain any big letters', function () {
                expect(params[0]).to.match(/[A-Z]+/g);
            }
        );
        it('should check if string is not already in lowercase', function () {
                expect(_.lowerCase.apply(_, params)).to.not.eql(params[0]);
            }
        );
        it('should return converted string', function () {
                expect(_.lowerCase.apply(_, params)).to.eql('some string to test function');
            }
        );
    });

    describe('lowerFirst', function () {
        before(function () {
            params = datasets.lowerFirst();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length(1);
        });
        it('should check if first letter is big', function () {
                expect(params[0][0]).to.match(/[A-Z]+/g);
            }
        );
        it('should return converted string', function () {
                expect(_.lowerFirst.apply(_, params)).to.eql('sOME STRING TO TEST FUNCTION');
            }
        );
    });

    describe('pad', function () {
        before(function () {
            params = datasets.pad();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.above(params[0].length);
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[2]).to.be.a('string');
            expect(params[2]).to.not.eql('undefined');
            expect(params).to.have.length(3);
        });
        it('should check if transformed string have proper length', function () {
            expect(_.pad.apply(_, params).length).to.be.eql(params[1]);
        });
        it('should return converted string with padding characters', function () {
                expect(_.pad.apply(_, params)).to.eql('._._.some long sweet text._._.');
            }
        );
    });

    describe('padEnd', function () {
        before(function () {
            params = datasets.padEnd();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.above(params[0].length);
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[2]).to.be.a('string');
            expect(params[2]).to.not.eql('undefined');
            expect(params).to.have.length(3);
        });
        it('should check if transformed string have proper length', function () {
            expect(_.pad.apply(_, params).length).to.be.eql(params[1]);
        });
        it('should return converted string with padding characters on right', function () {
                expect(_.padEnd.apply(_, params)).to.eql('some another long sweet text.*.*.*.*');
            }
        );
    });

    describe('padStart', function () {
        before(function () {
            params = datasets.padStart();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.above(params[0].length);
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[2]).to.be.a('string');
            expect(params[2]).to.have.length.above(0);
            expect(params[2]).to.not.eql('undefined');
            expect(params).to.have.length(3);
        });
        it('should check if transformed string have proper length', function () {
            expect(_.pad.apply(_, params).length).to.be.eql(params[1]);
        });
        it('should return converted string with padding characters on left', function () {
                expect(_.padStart.apply(_, params)).to.eql('|_|_|_|_|_|_try again some long sweet text');
            }
        );
    });

    describe('parseInt', function () {
        before(function () {
            params = datasets.parseInt();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length.within(1, 2);
            if (params[1] !== undefined && params.length === 2) {
                expect(Number.isInteger(params[1])).to.eql(true);
            }
        });
        it('should return converted string', function () {
                expect(_.parseInt.apply(_, params)).to.be.a('number');
            }
        );
        it('should return converted string to integer', function () {
                expect(_.parseInt.apply(_, params)).to.eql(8);
            }
        );
    });

    describe('repeat', function () {
        before(function () {
            params = datasets.repeat();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(Number.isInteger(params[1])).to.eql(true);
        });
        it('should have longer length', function () {
            expect(params[0]).to.be.a('string');
            expect(_.repeat.apply(_, params).length).to.eql(params[1] * params[0].length);
        });
        it('should return new repeated string', function () {
                expect(_.repeat.apply(_, params)).to.eql('repeat me!repeat me!repeat me!repeat me!');
            }
        );
    });

    describe('replace', function () {
        describe('replace1', function () {
            before(function () {
                params = datasets.replace1();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('string');
                expect(params[2]).to.be.a('string');
            });
            it('should return modified string', function () {
                    expect(_.replace.apply(_, params)).to.eql('Hello universe!');
                }
            );
        });
        describe('replace2', function () {
            before(function () {
                params = datasets.replace2();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('RegExp');
                expect(params[2]).to.be.a('string');
            });
            it('should return modified string', function () {
                    expect(_.replace.apply(_, params)).to.eql('Hello world!');
                }
            );
        });
        describe('replace3', function () {
            before(function () {
                params = datasets.replace3();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('string');
                expect(params[2]).to.be.a('function');
            });
            it('should return modified string', function () {
                    expect(_.replace.apply(_, params)).to.eql('Hello world!');
                }
            );
        });
        describe('replace4', function () {
            before(function () {
                params = datasets.replace4();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.a('RegExp');
                expect(params[2]).to.be.a('function');
            });
            it('should return modified string', function () {
                    expect(_.replace.apply(_, params)).to.eql('Hello world!');
                }
            );
        });
    });

    describe('snakeCase', function () {
        before(function () {
            params = datasets.snakeCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should check if string is not already in snakecase', function () {
                expect(_.snakeCase.apply(_, params)).to.not.eql(params[0]);
            }
        );
        it('should return converted string', function () {
                expect(_.snakeCase.apply(_, params)).to.eql('some_string_to_test_function');
            }
        );
    });

    describe('split', function () {
        before(function () {
            params = datasets.split();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(Number.isInteger(params[2])).to.eql(true);
        });
        it('should return the string segments', function () {
                expect(_.split.apply(_, params)).to.eql(['split', 'me']);
            }
        );
    });

    describe('startCase', function () {
        before(function () {
            params = datasets.startCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should check if string is not already in startcase', function () {
                expect(_.startCase.apply(_, params)).to.not.eql(params[0]);
            }
        );
        it('should return converted string', function () {
                expect(_.startCase.apply(_, params)).to.eql('Some String To Test Function');
            }
        );
    });

    describe('startsWith', function () {
        before(function () {
            params = datasets.startsWith();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(Number.isInteger(params[2])).to.eql(true);
            expect(params[2]).to.not.eql('undefined');
            expect(params).to.have.length(3);
        });
        it('should check if letter on given position is a target string', function () {
                expect(params[0][params[2]]).to.eql(params[1]);
            }
        );
        it('should check if string starts with the given target string', function () {
                expect(_.startsWith.apply(_, params)).to.eql(true);
            }
        );
    });

    describe('template', function () {
        beforeEach(function () {
            params = datasets.template();
        });
        it('should match types of passing elements', function () {
            var param1 = params[0];
            var param2 = params[1];
            expect(param1).to.be.a('string');
            expect(params).to.have.length.within(1, 2);
            if (param2 !== undefined && params.length === 2) {
                expect(param2).to.be.an('object');
                expect(Object.keys(param2)).to.have.length.within(1, 6);
            }
        });
        it('should contain specific option parameter', function () {
            var param2 = params[1];
            var options = ['escape', 'evaluate', 'imports', 'interpolate', 'sourceURL', 'variable'];

            expect(param2).to.have.any.keys(options);
            for (var key in param2) {
                if(key.hasOwnProperty(param2[key])){
                    expect(key).to.be.oneOf(options);
                    if (key === options[0]) {
                        expect(key).to.be.a('RegExp');
                    }
                    if (key === options[1]) {
                        expect(key).to.be.a('RegExp');
                    }
                    if (key === options[2]) {
                        expect(key).to.be.an('Object');
                    }
                    if (key === options[3]) {
                        expect(key).to.be.a('RegExp');
                    }
                    if (key === options[4]) {
                        expect(key).to.be.a('string');
                    }
                }
            }
        });
        it('should not contain empty option parameter', function () {
                var param2 = params[1];
                for (var key in param2) {
                    if(key.hasOwnProperty(param2[key])) {
                        expect(param2[key]).to.not.be.empty;
                    }
                }
            }
        );
    });

    describe('toLower', function () {
        before(function () {
            params = datasets.toLower();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should return converted string', function () {
                expect(_.toLower.apply(_, params)).to.eql('some string to test function');
            }
        );
    });

    describe('toUpper', function () {
        before(function () {
            params = datasets.toUpper();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should return converted string', function () {
                expect(_.toUpper.apply(_, params)).to.eql('SOME STRING TO TEST FUNCTION');
            }
        );
    });

    describe('trim', function () {
        before(function () {
            params = datasets.trim();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(params[1]).to.not.be.eql('');
        });
        it('should return trimmed string', function () {
                expect(_.trim.apply(_, params)).to.eql('some string to test function');
            }
        );
    });

    describe('trimEnd', function () {
        before(function () {
            params = datasets.trimEnd();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(params[1]).to.not.be.eql('');
        });
        it('should return trimmed string', function () {
                expect(_.trimEnd.apply(_, params)).to.eql('some string to test');
            }
        );
    });

    describe('trimStart', function () {
        before(function () {
            params = datasets.trimStart();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
            expect(params[1]).to.not.be.eql('');
        });
        it('should return trimmed string', function () {
                expect(_.trimStart.apply(_, params)).to.eql('some string to test function.....');
            }
        );
    });

    describe('truncate', function () {
        before(function () {
            params = datasets.truncate();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params).to.have.length.within(1, 2);
            if (params[1] !== undefined && params.length === 2) {
                expect(params[1]).to.be.an('object');
            }
        });
        it('should check if second argument have validate properties', function () {
            var options = params[1];
            if (options !== undefined && params.length === 2) {
                expect(options).to.have.any.keys('length', 'omission', 'separator');
            }
        });
        it('should check types of values object', function () {
                var options = params[1];
                expect(options['length']).to.be.a('number');
                expect(Number.isInteger(options['length'])).to.eql(true);
                expect(options['omission']).to.be.a('string');
            }
        );
        it('should return truncated string', function () {
                expect(_.truncate.apply(_, params)).to.eql('some very long text...');
            }
        );
    });

    describe('unescape', function () {
        before(function () {
            params = datasets.unescape();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should return transformed string', function () {
                expect(_.unescape.apply(_, params)).to.eql('tom & jerry were old friends');
            }
        );
    });

    describe('upperCase', function () {
        before(function () {
            params = datasets.upperCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should return transformed string', function () {
                expect(_.upperCase.apply(_, params)).to.eql('SOME STRING TO TEST FUNCTION');
            }
        );
    });

    describe('upperFirst', function () {
        before(function () {
            params = datasets.upperFirst();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should check if first letter is not big', function () {
                expect(params[0][0]).to.match(/[a-z]+/g);
            }
        );
        it('should return transformed string', function () {
                expect(_.upperFirst.apply(_, params)).to.eql('Some string to test function');
            }
        );
    });

    describe('words', function () {
        describe('words1', function () {
            before(function () {
                params = datasets.words1();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params).to.have.length.within(1, 2);
                if (params[1] !== undefined && params.length === 2) {
                    expect(params[1]).to.be.a('string');
                }
            });
            it('should return words of string', function () {
                    expect(_.words.apply(_, params)).to.eql(['bread', 'butter', 'milk']);
                }
            );
        });
        describe('words2', function () {
            before(function () {
                params = datasets.words2();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params).to.have.length.within(1, 2);
                if (params[1] !== undefined && params.length === 2) {
                    expect(params[1]).to.be.a('RegExp');
                }
            });
            it('should return words of string', function () {
                    expect(_.words.apply(_, params)).to.eql(['bread', 'butter', 'milk']);
                }
            );
        });
    });
});