'use strict';

var chai = require('chai');
var expect = chai.expect;
var dbFactory = require('../../app/db');

describe('DB', function () {

    describe('when dog db is created', function () {

        var dogDb;

        before(function () {
            dogDb = dbFactory();
        });

        it('db should be empty', function () {
            expect(dogDb.getAll()).to.have.length(0);
        });

        describe('and dog is added', function () {

            var addedDog;

            before(function () {
                addedDog = dogDb.save({name: 'Dogbert'});
            });

            it('should return dog with generated id', function () {
                expect(addedDog).to.have.property('id');
            });

            it('should return dog with generated id', function () {
                expect(dogDb.getAll()).to.have.length(1);
            });

            describe('and cat db is created', function () {

                var catDb;

                before(function () {
                    catDb = dbFactory();
                });

                it('cat db should be empty', function () {
                    expect(catDb.getAll()).to.have.length(0);
                });

                it('dog db should NOT be empty', function () {
                    expect(dogDb.getAll()).to.contain(addedDog);
                });

            });

        });

    });
});

