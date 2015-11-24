'use strict';

var chai = require('chai');
var expect = chai.expect;
var Promise = require('bluebird');
var wrapperFactory = require('../../app/dateWrapper');


describe('DateWrapper', function () {

    describe('when dateWrapper is instantiated', function () {
        var wrapperA;

        before(function () {
            wrapperA = wrapperFactory();
        });

        it('should return current date', function () {
            var i = 0;

            function loop() {
                var currentTime = new Date().getTime();
                expect(wrapperA.get().getTime()).to.be.least(currentTime);
                if (i++ < 7) {
                    return Promise.delay(100).then(loop);
                }
            }

            return loop();
        });

        describe('and artificial date is set', function () {
            before(function () {
                wrapperA.set(new Date());
            });

            it('should return the same date despite running time', function () {
                var i = 0;

                function loop() {
                    var currentTime = new Date().getTime();
                    expect(wrapperA.get().getTime()).to.be.most(currentTime);
                    if (i++ < 7) {
                        return Promise.delay(100).then(loop);
                    }
                }

                return loop();
            });
        });

        describe('and another dateWrapper is instantiated', function () {

            var wrapperB;

            before(function () {
                wrapperB = wrapperFactory();
            });

            it('should return the same date despite running time', function () {
                var i = 0;

                function loop() {
                    var currentTime = new Date().getTime();
                    expect(wrapperB.get().getTime()).to.be.below(currentTime);
                    if (i++ < 7) {
                        return Promise.delay(100).then(loop);
                    }
                }

                return loop();
            });
        });
    });

});

