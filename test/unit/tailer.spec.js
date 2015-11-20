'use strict';

var Promise = require('bluebird');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var tailer = require('../../app/tailer');
chai.use(require('sinon-chai'));
Promise.longStackTraces();

describe('tailer', function () {

    var db;
    var dogCollection;
    var catCollection;
    var insertDelay = 1000;
    var createTailerTimeout = 0;

    before(function (done) {
        var MongoClient = require('mongodb').MongoClient;
        var url = 'mongodb://localhost/test';
        MongoClient.connect(url, function (err, _db) {
            if (err) {
                done(err);
                return;
            }
            db = Promise.promisifyAll(_db);
            dogCollection = db.collection('dog');
            dogCollection = Promise.promisifyAll(dogCollection);
            catCollection = db.collection('cat');
            catCollection = Promise.promisifyAll(catCollection);

            db.dropDatabaseAsync().then(function () {
                return db.createCollectionAsync('dog');
            }).then(function () {
                return db.createCollectionAsync('cat', {capped: true, size: 100});
            }).then(function () {
                done();
            });
        });
    });

    after(function () {
        if (db) {
            db.close();
        }
    });

    describe('when dog watcher is created', function () {
        var dogSpy;

        before(function () {
            dogSpy = sinon.spy();
            return tailer(db, 'dog', dogSpy).delay(createTailerTimeout);
        });

        describe('and 2 dogs are added', function () {
            var time1;
            var time2;
            before(function () {
                time1 = new Date().getTime();
                return dogCollection.insertAsync({name: 'Dogbert', createDate: time1}).then(function () {
                    time2 = new Date().getTime();
                    return dogCollection.insertAsync({name: 'Houndus', createDate: time2});
                }).delay(insertDelay);
            });

            it('should invoke onDog callback with Dogbert and Houndus', function () {
                expect(dogSpy).to.have.been.calledWithMatch({name: 'Dogbert', createDate: time1});
                expect(dogSpy).to.have.been.calledWithMatch({name: 'Houndus', createDate: time2});
            });

            describe('and another dog is added', function () {
                before(function () {
                    time1 = new Date().getTime();
                    return dogCollection.insertAsync({name: 'Monty', createDate: time1}).delay(insertDelay);
                });

                it('should invoke onDog callback with Monty', function () {
                    expect(dogSpy).to.have.been.calledWithMatch({name: 'Monty', createDate: time1});
                    expect(dogSpy).to.have.been.callCount(3);
                });

                describe('and cat watcher is created', function () {
                    var catSpy;

                    before(function () {
                        catSpy = sinon.spy();
                        return tailer(db, 'cat', catSpy).delay(createTailerTimeout);
                    });

                    describe('and a cat is added', function () {
                        before(function () {
                            time1 = new Date().getTime();
                            return catCollection.insertAsync({name: 'Ruppert', createDate: time1})
                                .then(function () {
                                    return catCollection.findAsync({}).then(function (result) {
                                        return result.toArray();
                                    });
                                }).delay(insertDelay);
                        });

                        it('should NOT invoke onDog callback', function () {
                            expect(dogSpy).to.have.been.callCount(3);
                        });

                        it('should invoke onCat callback with Ruppert', function () {
                            expect(catSpy).to.have.been.calledWithMatch({name: 'Ruppert', createDate: time1});
                            expect(catSpy).to.have.been.callCount(1);
                        });

                        describe('and another dog is added', function () {
                            before(function () {
                                time1 = new Date().getTime();
                                return dogCollection.insertAsync({name: 'Rufus', createDate: time1})
                                    .then(function () {
                                        return dogCollection.findAsync({}).then(function (result) {
                                            return result.toArray();
                                        });
                                    }).delay(insertDelay);
                            });


                            it('should NOT invoke onCat callback', function () {
                                expect(catSpy).to.have.been.callCount(1);
                            });

                            it('should invoke onDog callback with Rufus', function () {
                                expect(dogSpy).to.have.been.calledWithMatch({name: 'Rufus', createDate: time1});
                                expect(dogSpy).to.have.been.callCount(4);
                            });
                        });
                    });

                });
            });
        });
    });

});

