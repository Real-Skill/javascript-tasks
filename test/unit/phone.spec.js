'use strict';

var chai = require('chai');
var expect = chai.expect;
var phone = require('../../app/phone');
var _ = require('lodash');

var phoneList = require('../../data/data.json').phones;
var expected = require('../../data/expectations.json');

describe('phone', function () {

    var db;
    var phoneCollection;
    var newPhone = {
        _id: '56d9bf92f9be48771d6fe512',
        name: 'T-Mobile G2', os: 'Android 2.2',
        storage: {flash: '4000MB', ram: '512MB'},
        battery: {
            talkTime: '7 hours'
        },
        connectivity: {
            bluetooth: 'Bluetooth 3.0'
        },
        hardware: {fmRadio: true}
    };

    function cleanPhoneCollection() {
        return db.dropDatabase().then(function () {
            return db.createCollection('phone');
        });
    }

    function seedPhoneCollection(data) {
        return phoneCollection.insertMany(data);
    }

    function prepareDB(data) {
        return cleanPhoneCollection().then(seedPhoneCollection.bind(null, data));
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

    describe('getAllPhones', function () {
        describe('always', function () {
            var result;
            before(function () {
                return phone(db).getAllPhones().then(function (data) {
                    result = data;
                });
            });
            it('should return all phones', function () {
                expect(result).to.eql(phoneList);
            });
        });
        describe('when the new phone was added', function () {
            var result;
            var expected = _.concat(phoneList, newPhone);
            before(function () {
                return addNewPhone().then(phone(db).getAllPhones).then(function (data) {
                    result = data;
                });
            });
            after(function () {
                return removePhone();
            });
            it('should return all phones including added phone', function () {
                expect(result).to.eql(expected);
            });
        });
    });
    describe('getPhoneByOS', function () {
        describe('Android 2.2', function () {
            var result;
            before(function () {
                return phone(db).getPhonesByOS('Android 2.2').then(function (data) {
                    result = data;
                });
            });
            it('should return all phones with specified OS', function () {
                expect(result).to.eql(expected.getPhoneByOS.spec1);
            });
        });
        describe('Android 2.1', function () {
            var result;
            before(function () {
                return phone(db).getPhonesByOS('Android 2.1').then(function (data) {
                    result = data;
                });
            });
            it('should return all phones with specified OS', function () {
                expect(result).to.eql(expected.getPhoneByOS.spec2);
            });
        });
    });
    describe('getPhonesByNetwork', function () {
        describe('T-Mobile', function () {
            var result;
            before(function () {
                return phone(db).getPhonesByNetwork(['T-Mobile']).then(function (data) {
                    result = data;
                });
            });
            it('should return all phones with specified network', function () {
                expect(result).to.eql(expected.getPhonesByNetwork.spec1);
            });
        });
        describe('Vodafone,Verizon,Sprint', function () {
            var result;
            before(function () {
                return phone(db).getPhonesByNetwork(['Vodafone', 'Verizon', 'Sprint']).then(function (data) {
                    result = data;
                });
            });
            it('should return all phones with specified network', function () {
                expect(result).to.eql(expected.getPhonesByNetwork.spec2);
            });
        });
    });
    describe('getPhonesWithConditions', function () {
        describe('always', function () {
            var result;
            before(function () {
                return phone(db).getPhonesWithConditions().then(function (data) {
                    result = data;
                });
            });
            it('should return all phones with specified conditions', function () {
                expect(result).to.eql(expected.getPhonesWithConditions.spec1);
            });
        });
        describe('when the new phone was added', function () {
            var result;
            before(function () {
                return addNewPhone().then(phone(db).getPhonesWithConditions).then(function (data) {
                    result = data;
                });
            });
            after(function () {
                return removePhone();
            });
            it('should return all phones with specified conditions', function () {
                expect(result).to.eql(expected.getPhonesWithConditions.spec2);
            });
        });
    });
    describe('getPhonesWithWeight', function () {
        describe('when range between 150 and 169', function () {
            var result;
            before(function () {
                return phone(db).getPhonesWithWeightRange([150, 169]).then(function (data) {
                    result = data;
                });
            });
            it('should return all phones between range', function () {
                expect(result).to.eql(expected.getPhonesWithWeight.spec1);
            });
        });
        describe('when range between 105 and 130', function () {
            var result;
            before(function () {
                return phone(db).getPhonesWithWeightRange([105, 130]).then(function (data) {
                    result = data;
                });
            });
            it('should return all phones between range', function () {
                expect(result).to.eql(expected.getPhonesWithWeight.spec2);
            });
        });
    });
    describe('countPhonesWithRadio', function () {
        describe('always', function () {
            var result;
            before(function () {
                return phone(db).countPhonesWithRadio().then(function (data) {
                    result = data;
                });
            });
            it('should return amount of phones with radio', function () {
                expect(result).to.eql([{_id: 'fmRadio', count: 5}]);
            });
        });
        describe('when the new phone was added', function () {
            var result;
            before(function () {
                return addNewPhone().then(phone(db).countPhonesWithRadio).then(function (data) {
                    result = data;
                });
            });
            after(function () {
                return removePhone();
            });
            it('should return amount of phones with radio including added phone', function () {
                expect(result).to.eql([{_id: 'fmRadio', count: 6}]);
            });
        });
    });
    describe('groupByTalkTime', function () {
        describe('always', function () {
            var result;
            before(function () {
                return phone(db).groupByTalkTime().then(function (data) {
                    result = data;
                });
            });
            it('should group phones by talk time', function () {
                expect(result).to.eql(expected.groupByTalkTime.spec1);
            });
        });
        describe('when the new phone was added', function () {
            var result;
            before(function () {
                return addNewPhone().then(phone(db).groupByTalkTime).then(function (data) {
                    result = data;
                });
            });
            after(function () {
                return removePhone();
            });
            it('should group phones by talk time including added phone', function () {
                expect(result).to.eql(expected.groupByTalkTime.spec2);
            });
        });
    });
    describe('searchInFeatures', function () {
        describe('with case sensitive', function () {
            var result;
            before(function () {
                return phone(db).searchInFeatures('QWERTY keyboard', true).then(function (data) {
                    result = data;
                });
            });
            it('should search and score all phrase occurrence', function () {
                expect(result).to.eql(expected.searchInFeatures.spec1);
            });
        });
        describe('without case sensitive', function () {
            var result;
            before(function () {
                return phone(db).searchInFeatures('QWERTY', false).then(function (data) {
                    result = data;
                });
            });
            it('should search and score all phrase occurrence', function () {
                expect(result).to.eql(expected.searchInFeatures.spec2);
            });
        });
    });
});

