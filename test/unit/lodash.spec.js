'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');

describe('Lodash training', function() {
    var params;
    
    describe('template', function() {
        beforeEach(function() {
            params = datasets.template();
        });
        it('should match types of passing elements', function() {
            var param1 = params[0];
            var param2 = params[1];
            expect(param1).to.be.a('string');
            expect(params).to.have.length.within(1,2);
            if(param2 !== undefined && params.length == 2){
                expect(param2).to.be.an('object');
                expect(Object.keys(param2)).to.have.length.within(1,6);
            }
        });
        it('should contain specific option parameter', function() {
            var param2 = params[1];
            var options = ['escape', 'evaluate', 'imports' ,'interpolate', 'sourceURL', 'variable'];

            expect(param2).to.have.any.keys(options);
            for(var key in param2) {
                expect(key).to.be.oneOf(options);
                if (key == options[0]) {
                    expect(key).to.be.a('RegExp');
                }
                if (key == options[1]) {
                    expect(key).to.be.a('RegExp');
                }
                if (key == options[2]) {
                    expect(key).to.be.an('Object');
                }
                if (key == options[3]) {
                    expect(key).to.be.a('RegExp');
                }
                if (key == options[4]) {
                    expect(key).to.be.a('string');
                }
            }
        });
        it('should not contain empty option parameter', function () {
            var param2 = params[1];
            for(var key in param2)
                expect(param2[key]).to.not.be.empty;
            }
        );
    });

});