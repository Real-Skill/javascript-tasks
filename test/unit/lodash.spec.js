'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function () {
    var params;

    describe('camelCase', function () {
        before(function () {
            params = datasets.camelCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.camelCase.apply(_, params)).to.eql('someVeryLongStringPreparedToTransform');
            }
        );
    });

    describe('capitalize', function () {
        before(function () {
            params = datasets.capitalize();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.capitalize.apply(_, params)).to.eql('Some very long string prepared to transform');
            }
        );
    });

    describe('deburr', function () {
        before(function () {
            params = datasets.deburr();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.deburr.apply(_, params)).to.eql('some very long string prepared to transform');
            }
        );
    });

    describe('endsWith', function () {
        before(function () {
            params = datasets.endsWith();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params[1]).to.be.a('string');
            expect(params[1]).to.have.length.above(0);
            expect(params).to.have.length.within(2,3);
            if (params[2] !== undefined && params.length === 3) {
                expect(params[2]).to.be.a('number');
                expect(Number.isInteger(params[2])).to.eql(true);
            }
        });
        it('shold return true if string ends with target, else false', function () {
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
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.escape.apply(_, params)).to.eql('Tom &amp; Jerry are friends');
            }
        );
    });

    describe('escapeRegExp', function () {
        before(function () {
            params = datasets.escapeRegExp();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.escapeRegExp.apply(_, params)).to.eql('\[realskill\]\(https://realskill\.com/\)');
            }
        );
    });

    describe('kebabCase', function () {
        before(function () {
            params = datasets.kebabCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.kebabCase.apply(_, params)).to.eql('some-very-long-string-prepared-to-transform');
            }
        );
    });

    describe('lowerCase', function () {
        before(function () {
            params = datasets.lowerCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('shold return transformed string', function () {
                expect(_.lowerCase.apply(_, params)).to.eql('some very long string prepared to transform');
            }
        );
    });

    describe('lowerFirst', function () {
        before(function () {
            params = datasets.lowerFirst();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params).to.have.length(1);
        });
        it('should return transformed string', function () {
                expect(_.lowerFirst.apply(_, params)).to.eql('sOME VERY LONG STRING PREPARED TO TRANSFORM');
            }
        );
    });

    describe('pad', function () {
        before(function () {
            params = datasets.pad();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[1]).to.be.above(params[0].length);
            expect(params).to.have.length.within(2,3);
            if (params[2] !== undefined && params.length === 3) {
                expect(params[2]).to.be.a('string');
                expect(params[2]).to.have.length.above(0);
            }
        });
        it('should return transformed string', function () {
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
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[1]).to.be.above(params[0].length);
            expect(params).to.have.length.within(2,3);
            if (params[2] !== undefined && params.length === 3) {
                expect(params[2]).to.be.a('string');
                expect(params[2]).to.have.length.above(0);
            }
        });
        it('should return transformed string', function () {
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
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[1]).to.be.above(params[0].length);
            expect(params).to.have.length.within(2,3);
            if (params[2] !== undefined && params.length === 3) {
                expect(params[2]).to.be.a('string');
                expect(params[2]).to.have.length.above(0);
            }
        });
        it('should return transformed string', function () {
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
            expect(Number.isInteger(params[1])).to.eql(true);
            expect(params[1]).to.be.above(params[0].length);
            expect(params).to.have.length.within(2,3);
            if (params[2] !== undefined && params.length === 3) {
                expect(params[2]).to.be.a('string');
                expect(params[2]).to.have.length.above(0);
            }
        });
        it('shold return true if string ends with target, else false', function () {
                expect(_.parseInt.apply(_, params)).to.eql('some another long sweet text.*.*.*.*');
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
        it('should return new repeated string', function () {
                expect(_.repeat.apply(_, params)).to.eql('repeat me!repeat me!repeat me!repeat me!');
            }
        );
    });

    describe('replace', function () {
        before(function () {
            params = datasets.replace();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(Number.isInteger(params[1])).to.eql(true);
        });
        it('should ...', function () {
                expect(_.replace.apply(_, params)).to.eql('');
            }
        );
    });

    describe('snakeCase', function () {
        before(function () {
            params = datasets.snakeCase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should return transformed string', function () {
                expect(_.snakeCase.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
        it('should return split string', function () {
                expect(_.split.apply(_, params)).to.eql([ 'split', 'me' ]);
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
        it('should return transformed string', function () {
                expect(_.startCase.apply(_, params)).to.eql('Some Very Long String Prepared To Transform');
            }
        );
    });

    describe('startsWith', function () {
        before(function () {
            params = datasets.startsWith();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[0]).to.have.length.above(0);
            expect(params[1]).to.be.a('string');
            expect(params[1]).to.have.length.above(0);
            expect(params).to.have.length.within(2,3);
            if (params[2] !== undefined && params.length === 3) {
                expect(params[2]).to.be.a('number');
                expect(Number.isInteger(params[2])).to.eql(true);
            }
        });
        it('shold return true if string ends with target, else false', function () {
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
            if (param2 !== undefined && params.length == 2) {
                expect(param2).to.be.an('object');
                expect(Object.keys(param2)).to.have.length.within(1, 6);
            }
        });
        it('should contain specific option parameter', function () {
            var param2 = params[1];
            var options = ['escape', 'evaluate', 'imports', 'interpolate', 'sourceURL', 'variable'];

            expect(param2).to.have.any.keys(options);
            for (var key in param2) {
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
        });
        it('should not contain empty option parameter', function () {
                var param2 = params[1];
                for (var key in param2){
                    expect(param2[key]).to.not.be.empty;
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
        it('should return transformed string', function () {
                expect(_.toLower.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
        it('should return transformed string', function () {
                expect(_.toUpper.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
        });
        it('should return transformed string', function () {
                expect(_.trim.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
        });
        it('should return transformed string', function () {
                expect(_.trimEnd.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
        });
        it('should return transformed string', function () {
                expect(_.trimStart.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
            }
        );
    });

    describe('truncate', function () {
        before(function () {
            params = datasets.truncate();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
            expect(params[1]).to.be.a('string');
        });
        it('should return transformed string', function () {
                expect(_.truncate.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
                expect(_.unescape.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
            }
        );
    });

    describe('uppercase', function () {
        before(function () {
            params = datasets.uppercase();
        });
        it('should match types of passing elements', function () {
            expect(params[0]).to.be.a('string');
        });
        it('should return transformed string', function () {
                expect(_.uppercase.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
        it('should return transformed string', function () {
                expect(_.upperFirst.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
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
                expect(params[1]).to.be.a('string');
            });
            it('should return transformed string', function () {
                    expect(_.words2.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
                }
            );
        });
        describe('words1', function () {
            before(function () {
                params = datasets.words1();
            });
            it('should match types of passing elements', function () {
                expect(params[0]).to.be.a('string');
                expect(params[1]).to.be.an('RegExp');
            });
            it('should return transformed string', function () {
                    expect(_.words2.apply(_, params)).to.eql('some_very_long_string_prepared_to_transform');
                }
            );
        });
    });

});