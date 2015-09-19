'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var phone = require('../../app/phone');
var phoneList = require('../../data/data.json').phones;
var expected = require('../../data/expected.json');

describe('search', function () {
    var db;
    var phoneCollection;
    var newPhone = {
        _id: '56d9bf92f9be48771d6fe512',
        name: 'T-Mobile G2', os: 'Android 2.2',
        description: 'Launched nearly two years ago, it created an entirely new class of mobile phones and apps. Share photos videos and movies together.'
    };

    function cleanPhoneCollection() {
        return db.dropDatabase().then(function () {
            return db.createCollection('phone');
        });
    }

    function prepareDB(data) {
        return cleanPhoneCollection().then(function () {
            return phoneCollection.insertMany(data);
        }).then(function () {
            return phoneCollection.createIndex({description: 'text'});
        });
    }

    function addNewPhone() {
        return phoneCollection.insertOne(newPhone);
    }

    function removePhone() {
        return phoneCollection.removeOne({_id: '56d9bf92f9be48771d6fe512'});
    }

    before(function () {
        var MongoClient = require('mongodb').MongoClient;
        var url = 'mongodb://' + (process.env.MONGO_HOST || 'localhost') + '/test';
        return MongoClient.connect(url).then(function (_db) {
            db = _db;
            phoneCollection = db.collection('phone');
        }).then(prepareDB.bind(null, phoneList));
    });

    after(function () {
        if (db) {
            db.close();
        }
    });

    describe('search', function () {
        var findSpy;
        before(function () {
            findSpy = sinon.spy(phoneCollection, 'find');
        });
        describe('always', function () {
            var result;
            before(function () {

                return phone.search(phoneCollection).then(function (data) {
                    result = data;
                });
            });
            it('should search the entire phrase and not its parts separately', function () {
                expect(result).to.not.eql(expected.search.incorrect1);
            });
            it('should return description with specific phrase', function () {
                expect(result).to.eql(expected.search.correct1);
            });
            it('should use text search query', function () {
                expect(findSpy).to.have.been.calledWithMatch({$text: {$search: {}}});
            });
        });
        describe('when db is updated', function () {
            var result;
            before(function () {
                return addNewPhone().then(phone.search.bind(null, phoneCollection)).then(function (data) {
                    result = data;
                });
            });
            after(function () {
                return removePhone();
            });
            it('should search the entire phrase and not its parts separately', function () {
                expect(result).to.not.eql(expected.search.incorrect2);
            });
            it('should return description with specific phrase', function () {
                expect(result).to.eql(expected.search.correct2);
            });
            it('should use text search query', function () {
                expect(findSpy).to.have.been.calledWithMatch({$text: {$search: {}}});
            });
        });
    });
});
